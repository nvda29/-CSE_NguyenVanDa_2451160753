const STORAGE_KEY = 'pbt09_todos';

const form = document.querySelector('#todoForm');
const input = document.querySelector('#todoInput');
const list = document.querySelector('#todoList');
const countLabel = document.querySelector('#countLabel');
const clearCompletedBtn = document.querySelector('#clearCompleted');
const filterButtons = document.querySelectorAll('.filter-btn');

let todos = [];
let currentFilter = 'all';
let editingId = null;

function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function loadTodos() {
  const raw = localStorage.getItem(STORAGE_KEY);
  todos = raw ? JSON.parse(raw) : [];
}

function updateCount() {
  const activeCount = todos.filter((todo) => !todo.completed).length;
  countLabel.textContent = `${activeCount} items left`;
}

function matchesFilter(todo) {
  if (currentFilter === 'active') return !todo.completed;
  if (currentFilter === 'completed') return todo.completed;
  return true;
}

function renderTodos() {
  list.textContent = '';

  todos.forEach((todo) => {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.dataset.id = todo.id;
    if (todo.completed) li.classList.add('completed');
    if (!matchesFilter(todo)) li.classList.add('hidden');

    if (editingId === todo.id) {
      const editInput = document.createElement('input');
      editInput.className = 'todo-edit';
      editInput.value = todo.text;
      editInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          todo.text = editInput.value.trim() || todo.text;
          editingId = null;
          saveTodos();
          renderTodos();
        }
        if (event.key === 'Escape') {
          editingId = null;
          renderTodos();
        }
      });
      li.appendChild(editInput);
      editInput.focus();
    } else {
      const text = document.createElement('span');
      text.className = 'todo-text';
      text.textContent = todo.text;
      li.appendChild(text);
    }

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'X';
    deleteBtn.setAttribute('aria-label', 'Delete todo');
    li.appendChild(deleteBtn);

    list.appendChild(li);
  });

  updateCount();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  todos.push({
    id: Date.now(),
    text,
    completed: false,
  });

  input.value = '';
  input.focus();
  saveTodos();
  renderTodos();
});

list.addEventListener('click', (event) => {
  const item = event.target.closest('.todo-item');
  if (!item) return;

  const id = Number(item.dataset.id);
  const todo = todos.find((entry) => entry.id === id);
  if (!todo) return;

  if (event.target.classList.contains('delete-btn')) {
    todos = todos.filter((entry) => entry.id !== id);
    saveTodos();
    renderTodos();
    return;
  }

  if (event.target.classList.contains('todo-text')) {
    todo.completed = !todo.completed;
    saveTodos();
    renderTodos();
  }
});

list.addEventListener('dblclick', (event) => {
  const textEl = event.target.closest('.todo-text');
  if (!textEl) return;
  const item = textEl.closest('.todo-item');
  editingId = Number(item.dataset.id);
  renderTodos();
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    currentFilter = button.dataset.filter;
    renderTodos();
  });
});

clearCompletedBtn.addEventListener('click', () => {
  todos = todos.filter((todo) => !todo.completed);
  saveTodos();
  renderTodos();
});

loadTodos();
renderTodos();
