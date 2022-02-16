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





