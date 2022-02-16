const listTasks = document.querySelector('#lista-tarefas');
const buttonAdd = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');

function addTasks() {
  let task = document.createElement('li');
  task.innerHTML = input.value;
  input.value = '';
  listTasks.appendChild(task);
}
buttonAdd.addEventListener('click', addTasks);

function selectGray(event) {
  const tasks = document.querySelectorAll('li');
  for (let index = 0; index < tasks.length; index += 1) {
    if (tasks[index].style.backgroundColor === 'gray') {
      tasks[index].style.backgroundColor = 'white';
    } 
  }
  event.target.style.backgroundColor = 'gray';
}
listTasks.addEventListener('click', selectGray);
