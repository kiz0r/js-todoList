'use strict';

const todoForm = document.querySelector('.todoForm');
const todoInput = document.querySelector('.todoInput');
const todoList = document.querySelector('.todoList');

const TODO_REG_EXP = /^\s*$/;

todoInput.oninput = ({ target }) => {
  if (!TODO_REG_EXP.test(target.value)) {
    target.classList.add('valid');
    target.classList.remove('invalid');
  } else {
    target.classList.remove('valid');
    target.classList.add('invalid');
  }
};

todoForm.onsubmit = (e) => {
  e.preventDefault();

  const todoItem = e.target.elements['todo-item'];

  if (!TODO_REG_EXP.test(todoItem.value)) {
    const todoListItem = createTodoItem(todoItem.value);
    todoList.append(todoListItem);
    todoItem.value = '';
    todoItem.classList.remove('valid');
  } else {
    todoItem.classList.add('invalid');
  }
};

function createTodoItem(value) {
  const todoItem = document.createElement('li');
  todoItem.classList.add('todoListItem');

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';

  const delBtn = document.createElement('button');
  delBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
  delBtn.classList.add('btn');

  delBtn.onclick = () => {
    todoItem.remove();
  };

  const todoValue = document.createElement('span');
  todoValue.textContent = value;

  checkBox.onclick = () => {
    if (checkBox.checked === true) {
      todoValue.style.textDecoration = 'line-through';
    } else {
      todoValue.style.textDecoration = 'none';
    }
  };

  todoItem.append(checkBox, todoValue, delBtn);

  return todoItem;
}
