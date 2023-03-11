'use strict';

const todoForm = document.querySelector('.todoForm');
const todoInput = document.querySelector('.todoInput');
const todoList = document.querySelector('.todoList');

const TODO_REG_EXP = /^\s*$/;

todoInput.oninput = (e) => {
  if (!TODO_REG_EXP.test(e.target.value)) {
    e.target.classList.add('valid');
    e.target.classList.remove('invalid');
  } else {
    e.target.classList.remove('valid');
    e.target.classList.add('invalid');
  }
};

todoForm.onsubmit = (e) => {
  e.preventDefault();
  if (!TODO_REG_EXP.test(e.target.elements['todo-item'].value)) {
    const todoListItem = createTodoItem(e.target.elements['todo-item'].value);
    todoList.append(todoListItem);
    e.target.elements['todo-item'].value = '';
    e.target.elements['todo-item'].classList.remove('valid');
  } else {
    e.target.elements['todo-item'].classList.add('invalid');
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
