const form = document.querySelector('form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const task = taskInput.value;
  const taskItem = document.createElement('li');
  taskItem.textContent = task;
  taskList.appendChild(taskItem);
  taskInput.value = '';
});
