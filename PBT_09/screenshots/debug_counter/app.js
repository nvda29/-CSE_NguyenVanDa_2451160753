const countDisplay = document.querySelector('.count');
const historyList = document.getElementById('history');

let count = 0;

function updateDisplay() {
  countDisplay.textContent = String(count);
}

function saveState() {
  localStorage.setItem('count', String(count));
  localStorage.setItem('history', historyList.innerHTML);
}

document.querySelector('#incrementBtn').addEventListener('click', () => {
  count += 1;
  updateDisplay();

  const li = document.createElement('li');
  li.textContent = `Count changed to ${count}`;
  li.addEventListener('click', () => deleteHistory(li));
  historyList.append(li);
  saveState();
});

document.querySelector('#decrementBtn').addEventListener('click', () => {
  count -= 1;
  updateDisplay();
  saveState();
});

document.querySelector('#resetBtn').addEventListener('click', () => {
  count = 0;
  updateDisplay();
  saveState();
});

function deleteHistory(element) {
  element.remove();
  saveState();
}

document.querySelector('#clearHistory').addEventListener('click', () => {
  historyList.querySelectorAll('li').forEach((item) => item.remove());
  saveState();
});

window.addEventListener('beforeunload', saveState);

window.addEventListener('load', () => {
  const savedCount = localStorage.getItem('count');
  count = savedCount ? Number(savedCount) : 0;
  updateDisplay();

  const savedHistory = localStorage.getItem('history');
  if (savedHistory) historyList.innerHTML = savedHistory;
});
