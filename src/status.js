// This module contains functions related to status of the task
import unchecked from './images/unchecked.png';
import mark from './images/check.png';

// tasks container
const ul = document.getElementById('to-do-list');

// Status of a todo
// Display unchecked box or marked
const select = (ele, task) => {
  ele.nextElementSibling.classList.toggle('strike');
  ele.src = ele.src === mark ? unchecked : mark;
  const hold = task.tasks[+ele.parentElement.id - 1].completed;

  if (hold) {
    task.tasks[+ele.parentElement.id - 1].completed = false;
  } else {
    task.tasks[+ele.parentElement.id - 1].completed = true;
  }
  localStorage.setItem('listOfTasks', JSON.stringify(task.tasks));
};

// Update all mark todos status
const updateCheck = (task) => {
  const checks = document.querySelectorAll('.check');
  checks.forEach((e) => {
    e.addEventListener('click', () => select(e, task));
  });
};

// Handle the functionality of removing
// all marked todos
const clearTasks = (task) => {
  task.tasks = task.tasks.filter((e) => e.completed === false);
  task.tasks.forEach((e, i) => {
    e.index = i + 1;
  });
  localStorage.setItem('listOfTasks', JSON.stringify(task.tasks));
  ul.innerHTML = '';
  task.populate();
  updateCheck(task);
};

export { updateCheck, clearTasks };