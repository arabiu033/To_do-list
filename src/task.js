// This a class containing all the necessary operations
import dots from './images/menu.png';
import unchecked from './images/unchecked.png';
import mark from './images/check.png';
import recycle from './images/bin.png';

export const ul = document.getElementById('to-do-list');
export default class TaskHandling {
  constructor(tasks) {
    this.tasks = tasks;
    this.taskCount = tasks.length;
    ul.innerHTML = '';
    this.populate();
  }

  add(ele) {
    if (ele.value === '') {
      return;
    }
    this.taskCount += 1;
    this.tasks.push({ index: this.taskCount, desc: ele.value, completed: false });
    localStorage.setItem('listOfTasks', JSON.stringify(this.tasks));
    ul.innerHTML = '';
    ele.value = '';
    this.populate();
  }

  remove(ele) {
    this.tasks = this.tasks.filter((e) => e.index !== +ele.parentElement.id);
    for (let i = 0; i < this.tasks.length; i += 1) {
      this.tasks[i].index = i + 1;
    }
    localStorage.setItem('listOfTasks', JSON.stringify(this.tasks));
    ul.removeChild(ele.parentElement);
  }

  edit(ele) {
    ele.classList.add('hide');
    const li = ele.parentElement;
    const textArea = ele.nextSibling;
    const menu = textArea.nextSibling;
    const bin = menu.nextSibling;

    textArea.classList.remove('hide');
    menu.classList.add('hide');
    bin.classList.remove('hide');
    li.classList.add('edit');
    bin.addEventListener('click', () => this.remove(bin));

    textArea.onblur = () => {
      if (textArea.value === '') {
        this.remove(textArea);
        return;
      }

      ele.textContent = textArea.value;
      menu.classList.remove('hide');
      bin.classList.add('hide');
      textArea.classList.add('hide');
      ele.classList.remove('hide');
      li.classList.remove('edit');

      this.tasks[li.id - 1].desc = ele.textContent;
      localStorage.setItem('listOfTasks', JSON.stringify(this.tasks));
    };
  }

  // select = (ele) => {
  //   ele.nextSibling.classList.toggle('strike');
  //   ele.src = ele.src === mark ? unchecked : mark;
  // }

  populate() {
    for (let i = 0; i < this.tasks.length; i += 1) {
      const li = document.createElement('li');
      li.className = 'priorities';
      li.id = i + 1;
      const check = document.createElement('img');
      check.className = 'check';
      check.src = unchecked;

      const p = document.createElement('p');
      p.className = 'desc';
      p.textContent = this.tasks[i].desc;
      const editArea = document.createElement('input');
      editArea.setAttribute('type', 'text');
      editArea.setAttribute('value', this.tasks[i].desc);
      editArea.className = 'to-do hide edit';

      const menu = document.createElement('img');
      menu.className = 'dots';
      menu.style.cursor = 'move';
      menu.src = dots;

      const bin = document.createElement('img');
      bin.className = 'dots hide bin';
      bin.style.cursor = 'pointer';
      bin.src = recycle;

      li.append(check, p, editArea, menu, bin);
      ul.appendChild(li);
    }

    // const checks = document.querySelectorAll('.check');
    const descp = document.querySelectorAll('.desc');
    // checks.forEach((e) => {
    //   e.addEventListener('click', () => this.select(e));
    // });
    descp.forEach((e) => {
      e.addEventListener('click', () => this.edit(e));
    });
  }
}
