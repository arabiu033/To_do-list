import './style.css';
import TaskHandling from './task.js';
import {
  updateCheck, clearTasks,
} from './status.js';

let tasks;
if (localStorage.getItem('listOfTasks')) {
  tasks = new TaskHandling(JSON.parse(localStorage.getItem('listOfTasks') || '[]'));
  updateCheck(tasks);
} else {
  tasks = new TaskHandling([]);
}

const add = document.querySelector('.arrow');
add.addEventListener('click', () => {
  tasks.add(add.previousSibling.previousSibling);
  updateCheck(tasks);
});

const clear = document.getElementById('clear');
clear.addEventListener('click', () => clearTasks(tasks));

const input = document.getElementById('new-priority');
input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    tasks.add(add.previousSibling.previousSibling);
    updateCheck(tasks); 
  }
})