const listTasks = document.querySelector('#lista-tarefas');
const buttonAdd = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const clearButton = document.querySelector('#apaga-tudo');
const completedButton = document.querySelector('#remover-finalizados');
const saveButton = document.querySelector('#salvar-tarefas');
const list = document.getElementsByTagName('ol')[0];

function addTasks() {
  const task = document.createElement('li');
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

function doubleClick(event) {
  if (event.target.className === '') {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
}
listTasks.addEventListener('dblclick', doubleClick);

function clearList() {
  clearButton.addEventListener('click', () => {
    listTasks.innerHTML = '';
  });
}
clearList();

function clearCompleted() {
  completedButton.addEventListener('click', () => {
    const tasks = document.querySelectorAll('li');
    for (let index = 0; index < tasks.length; index += 1) {
      if (tasks[index].className === 'completed') {
        tasks[index].remove();
      }
    }
  });
}
clearCompleted();

function saveList() {
  localStorage.setItem('listTasks', list.innerHTML);
}
saveButton.addEventListener('click', saveList);

window.onload = () => {
  const storageSave = localStorage.getItem('listTasks');
  list.innerHTML = storageSave;
}
