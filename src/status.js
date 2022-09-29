// Functions related to status of the task
import unchecked from './images/unchecked.png';
import mark from './images/check.png';
import { ul } from './task.js';

function updateCheck(task) {
  const checks = document.querySelectorAll('.check');
  console.log(checks);
  checks.forEach((e) => {
    e.addEventListener('click', () => select(e, task));
  });
}

const select = (ele, task) => {
  console.log('hhh');
  ele.nextSibling.classList.toggle('strike');
  ele.src = ele.src === mark ? unchecked : mark;
  console.log(task.tasks);
  task.tasks[+ele.parentElement.id - 1].completed = 
    task.tasks[+ele.parentElement.id - 1].completed ? false : true;
  console.log(task.tasks);
}

const clearTasks = (task) => {
  console.log(task.tasks);
  task.tasks = task.tasks.filter((e) => e.completed === false);
  for (let i = 0; i < task.tasks.length; i += 1) {
    task.tasks[i].index = i + 1;
  }
  localStorage.setItem('listOfTasks', JSON.stringify(task.tasks));
  ul.innerHTML = '';
  console.log(task.tasks);
  task.populate();
  updateCheck(task);
}

export { updateCheck, clearTasks };