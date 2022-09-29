import './style.css';
import TaskHandling from './task.js';

let tasks;
if (localStorage.getItem('listOfTasks')) {
  tasks = new TaskHandling(JSON.parse(localStorage.getItem('listOfTasks') || '[]'));
} else {
  tasks = new TaskHandling([]);
}

const add = document.querySelector('.arrow');
add.addEventListener('click', () => tasks.add(add.previousSibling.previousSibling));