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

  const delBtn = document.createElement('button');
  delBtn.textContent = 'X';

  delBtn.onclick = () => {
    todoItem.remove();
  };

  const todoValue = document.createElement('span');
  todoValue.textContent = value;

  todoItem.append(todoValue, delBtn);

  return todoItem;
}
