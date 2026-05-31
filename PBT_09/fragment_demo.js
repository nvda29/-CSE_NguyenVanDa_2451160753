function renderWithFragment(items) {
  const fragment = document.createDocumentFragment();
  items.forEach((item) => {
    const div = document.createElement('div');
    div.textContent = item;
    fragment.appendChild(div);
  });
  document.body.appendChild(fragment);
}

renderWithFragment(Array.from({ length: 20 }, (_, i) => `Item ${i}`));
