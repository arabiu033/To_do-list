// Functions related to status of the task
import unchecked from './images/unchecked.png';
import mark from './images/check.png';
import { ul } from './task.js';

const select = (ele, task) => {
  ele.nextSibling.classList.toggle('strike');
  ele.src = ele.src === mark ? unchecked : mark;
  const hold = task.tasks[+ele.parentElement.id - 1].completed;
  
  if (hold) {
    task.tasks[+ele.parentElement.id - 1].completed = false;
  } else {
    task.tasks[+ele.parentElement.id - 1].completed = true;
  }
};

function updateCheck(task) {
  const checks = document.querySelectorAll('.check');
  checks.forEach((e) => {
    e.addEventListener('click', () => select(e, task));
  });
}

const clearTasks = (task) => {
  task.tasks = task.tasks.filter((e) => e.completed === false);
  for (let i = 0; i < task.tasks.length; i += 1) {
    task.tasks[i].index = i + 1;
  }
  localStorage.setItem('listOfTasks', JSON.stringify(task.tasks));
  ul.innerHTML = '';
  task.populate();
  updateCheck(task);
};

export { updateCheck, clearTasks };