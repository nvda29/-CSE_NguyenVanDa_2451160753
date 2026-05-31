const products = [
  { id: 1, name: 'iPhone 16', price: 25990000, category: 'phone', image: 'https://placehold.co/400x250/6366f1/white?text=iPhone+16', rating: 4.5, inStock: true },
  { id: 2, name: 'MacBook Pro', price: 45990000, category: 'laptop', image: 'https://placehold.co/400x250/0ea5e9/white?text=MacBook', rating: 4.8, inStock: true },
  { id: 3, name: 'AirPods Pro', price: 6990000, category: 'accessory', image: 'https://placehold.co/400x250/22c55e/white?text=AirPods', rating: 4.3, inStock: true },
  { id: 4, name: 'iPad Air', price: 16990000, category: 'tablet', image: 'https://placehold.co/400x250/f59e0b/white?text=iPad', rating: 4.6, inStock: false },
  { id: 5, name: 'Samsung S24', price: 22990000, category: 'phone', image: 'https://placehold.co/400x250/8b5cf6/white?text=S24', rating: 4.4, inStock: true },
  { id: 6, name: 'Dell XPS 15', price: 35990000, category: 'laptop', image: 'https://placehold.co/400x250/ef4444/white?text=Dell+XPS', rating: 4.7, inStock: true },
  { id: 7, name: 'Galaxy Buds', price: 3490000, category: 'accessory', image: 'https://placehold.co/400x250/14b8a6/white?text=Buds', rating: 4.1, inStock: true },
  { id: 8, name: 'Xiaomi Pad 6', price: 7990000, category: 'tablet', image: 'https://placehold.co/400x250/f97316/white?text=Xiaomi+Pad', rating: 4.2, inStock: true },
  { id: 9, name: 'Pixel 9', price: 19990000, category: 'phone', image: 'https://placehold.co/400x250/3b82f6/white?text=Pixel+9', rating: 4.6, inStock: true },
  { id: 10, name: 'ThinkPad X1', price: 32990000, category: 'laptop', image: 'https://placehold.co/400x250/64748b/white?text=ThinkPad', rating: 4.5, inStock: true },
  { id: 11, name: 'Logitech MX', price: 2490000, category: 'accessory', image: 'https://placehold.co/400x250/06b6d4/white?text=MX+Mouse', rating: 4.4, inStock: true },
  { id: 12, name: 'Surface Pro', price: 27990000, category: 'tablet', image: 'https://placehold.co/400x250/a855f7/white?text=Surface', rating: 4.3, inStock: true },
];

const grid = document.querySelector('#productGrid');
const searchInput = document.querySelector('#searchInput');
const sortSelect = document.querySelector('#sortSelect');
const categoryFilters = document.querySelector('#categoryFilters');
const cartBadge = document.querySelector('#cartBadge');
const modal = document.querySelector('#modal');
const modalBody = document.querySelector('#modalBody');
const closeModal = document.querySelector('#closeModal');
const darkToggle = document.querySelector('#darkToggle');

let activeCategory = 'all';
let cartCount = 0;
let visibleProducts = [...products];

function formatPrice(value) {
  return value.toLocaleString('vi-VN') + 'd';
}

function renderCategoryFilters() {
  const categories = ['all', ...new Set(products.map((item) => item.category))];
  categoryFilters.textContent = '';

  categories.forEach((category) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'category-btn';
    if (category === activeCategory) button.classList.add('active');
    button.textContent = category === 'all' ? 'All' : category;
    button.dataset.category = category;
    categoryFilters.appendChild(button);
  });
}

function sortProducts(list) {
  const mode = sortSelect.value;
  const sorted = [...list];

  switch (mode) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price);
    case 'name-asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'rating-desc':
      return sorted.sort((a, b) => b.rating - a.rating);
    default:
      return sorted;
  }
}

function filterByCategory(list) {
  if (activeCategory === 'all') return list;
  return list.filter((item) => item.category === activeCategory);
}

function searchProducts(list, keyword) {
  const key = keyword.trim().toLowerCase();
  if (!key) return list;
  return list.filter((item) => item.name.toLowerCase().includes(key));
}

function renderProducts() {
  grid.textContent = '';
  visibleProducts = sortProducts(filterByCategory(searchProducts(products, searchInput.value)));

  visibleProducts.forEach((product) => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.dataset.id = product.id;

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;

    const body = document.createElement('div');
    body.className = 'product-body';

    const title = document.createElement('h3');
    title.textContent = product.name;

    const price = document.createElement('p');
    price.className = 'price';
    price.textContent = formatPrice(product.price);

    const rating = document.createElement('p');
    rating.className = 'rating';
    rating.textContent = `Rating: ${product.rating}`;

    const addBtn = document.createElement('button');
    addBtn.type = 'button';
    addBtn.className = 'add-cart-btn';
    addBtn.textContent = 'Them gio';
    addBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      cartCount += 1;
      cartBadge.textContent = String(cartCount);
      cartBadge.classList.remove('hidden');
    });

    body.append(title, price, rating, addBtn);
    card.append(img, body);

    card.addEventListener('click', () => openModal(product));
    grid.appendChild(card);
  });
}

function openModal(product) {
  modalBody.textContent = '';
  const title = document.createElement('h2');
  title.textContent = product.name;
  const price = document.createElement('p');
  price.textContent = formatPrice(product.price);
  const rating = document.createElement('p');
  rating.textContent = `Rating: ${product.rating} | Stock: ${product.inStock ? 'Co hang' : 'Het hang'}`;
  const img = document.createElement('img');
  img.src = product.image;
  img.alt = product.name;
  img.style.width = '100%';
  img.style.borderRadius = '8px';
  img.style.marginTop = '12px';
  modalBody.append(title, price, rating, img);
  modal.classList.remove('hidden');
}

categoryFilters.addEventListener('click', (event) => {
  const button = event.target.closest('.category-btn');
  if (!button) return;
  activeCategory = button.dataset.category;
  categoryFilters.querySelectorAll('.category-btn').forEach((btn) => btn.classList.remove('active'));
  button.classList.add('active');
  renderProducts();
});

searchInput.addEventListener('input', renderProducts);
sortSelect.addEventListener('change', renderProducts);
closeModal.addEventListener('click', () => modal.classList.add('hidden'));
modal.addEventListener('click', (event) => {
  if (event.target === modal) modal.classList.add('hidden');
});

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

renderCategoryFilters();
renderProducts();
