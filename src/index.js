import './style.css';
import dots from './images/menu.png';
import unchecked from './images/unchecked.png';

const list = [
  { index: 1, desc: 'Double-tap to edit', completed: false },
  { index: 2, desc: 'Drag\'n drop to reorder your list', completed: false },
  { index: 3, desc: 'Manage all your lists in one place', completed: false },
  { index: 4, desc: 'Resync to clear out the old', completed: false },
];

const ul = document.getElementById('to-do-list');
const populator = () => {
  for (let i = 0; i < list.length; i += 1) {
    const li = document.createElement('li');
    li.className = 'priorities';
    const check = document.createElement('img');
    check.src = unchecked;

    const p = document.createElement('p');
    p.className = 'desc';
    p.textContent = list[i].desc;

    const menu = document.createElement('img');
    menu.className = 'dots';
    menu.style.cursor = 'move';
    menu.src = dots;

    li.append(check, p, menu);
    ul.appendChild(li);
  }
};

populator();
