// This a class containing all the necessary operations
import dots from './images/menu.png';
import unchecked from './images/unchecked.png';
import mark from './images/check.png';
import recycle from './images/bin.png';
import { updateCheck } from './status.js';

export const ul = document.getElementById('to-do-list');
export default class TaskHandling {
  // Initialize the class properties
  constructor(tasks) {
    // use to make sure Focusout Event call 'remove method' only once
    this.signal = false;

    this.tasks = tasks;
    this.taskCount = tasks.length;
    ul.innerHTML = '';
    this.populate();
  }

  // class method to handle adding of to-do
  add(ele) {
    if (ele.value.trim() === '') {
      return;
    }

    this.taskCount += 1;
    this.tasks.push({ index: this.taskCount, desc: ele.value, completed: false });
    localStorage.setItem('listOfTasks', JSON.stringify(this.tasks));
    ul.innerHTML = '';
    ele.value = '';
    this.populate();
  }

  // class method to handle removing to-do
  remove(ele) {
    if (this.signal) {
      // serialize the tasks array incase of changes made by editing
      this.tasks.forEach((ele, i) => { ele.index = i + 1; });

      this.tasks = this.tasks.filter((e) => e.index !== +ele.parentElement.id);
      // serialize the tasks arrays after filtering the remove task
      this.tasks.forEach((ele, i) => { ele.index = i + 1; });

      localStorage.setItem('listOfTasks', JSON.stringify(this.tasks));
      ul.innerHTML = '';
      this.populate();
      updateCheck(this);
      this.signal = false;
    }
  }

  // class method to handle editing of todo
  edit(ele) {
    // capture the siblings element in the todo card
    ele.classList.add('hide');
    const li = ele.parentElement;
    const textArea = ele.nextElementSibling;
    const menu = textArea.nextElementSibling;
    const bin = menu.nextElementSibling;

    // effect the editing mode
    textArea.classList.remove('hide');
    menu.classList.add('hide');
    bin.classList.remove('hide');
    li.classList.add('edit');

    // add eventlisteners
    bin.addEventListener('click', () => this.remove(bin));

    textArea.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        this.cleanup(ele, textArea, menu, li, bin);
      }
    });

    this.signal = true;
    textArea.addEventListener('focusout', () => {
      if (textArea.value === '') {
        this.remove(textArea);
        return;
      }

      // Delay the focusout event incase user
      // wants to click the delete button
      setTimeout(() => this.cleanup(ele, textArea, menu, li, bin), 300);
    });

    // move cursor to end of input field
    textArea.focus();
    const val = textArea.value;
    textArea.value = '';
    textArea.value = val;
  }

  // Hide and shows elements
  // based on user action
  cleanup(ele, textArea, menu, li, bin) {
    ele.textContent = textArea.value;
    menu.classList.remove('hide');
    bin.classList.add('hide');
    textArea.classList.add('hide');
    ele.classList.remove('hide');
    li.classList.remove('edit');

    if (this.signal) {
      this.tasks[li.id - 1].desc = ele.textContent;
    }
    localStorage.setItem('listOfTasks', JSON.stringify(this.tasks));
  }

  // Populate the todos of user
  populate() {
    this.tasks.forEach((ele, i) => {
      const html = `
        <li class="priorities" id="${i + 1}">
          <img class="check" src="${ele.completed ? mark : unchecked}" />
          <p class="desc ${ele.completed ? 'strike' : ''}">${ele.desc}</p>
          <input type="text" id="added-task" value="${ele.desc}" class="to-do hide edit">
          <img class="dots" src="${dots}" style="cursor:move">
          <img class="dots hide bin" src="${recycle}" style="cursor:pointer">
        </li>
      `;
      ul.insertAdjacentHTML('beforeend', html);
    });

    // Add eventlisteners to the newly created tasks
    const descp = document.querySelectorAll('.desc');
    descp.forEach((e) => {
      e.addEventListener('click', () => this.edit(e));
    });
  }
}
