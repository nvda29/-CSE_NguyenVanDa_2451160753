const images = Array.from({ length: 9 }, (_, index) => ({
  id: index + 1,
  src: `https://placehold.co/900x500/2563eb/white?text=Image+${index + 1}`,
  caption: `Anh so ${index + 1}`,
}));

const galleryImage = document.querySelector('#galleryImage');
const galleryCaption = document.querySelector('#galleryCaption');
const thumbList = document.querySelector('#thumbList');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const playBtn = document.querySelector('#playBtn');
const openModalBtn = document.querySelector('#openModalBtn');
const imageModal = document.querySelector('#imageModal');
const modalImage = document.querySelector('#modalImage');
const closeModalBtn = document.querySelector('#closeModalBtn');
const commandPalette = document.querySelector('#commandPalette');
const commandInput = document.querySelector('#commandInput');
const commandResults = document.querySelector('#commandResults');

let currentIndex = 0;
let slideshowTimer = null;
let isPlaying = false;

const commands = [
  { label: 'Next image', action: () => showImage(currentIndex + 1) },
  { label: 'Previous image', action: () => showImage(currentIndex - 1) },
  { label: 'Play slideshow', action: () => startSlideshow() },
  { label: 'Pause slideshow', action: () => stopSlideshow() },
  { label: 'Open modal', action: () => openModal() },
  { label: 'Close modal', action: () => closeModal() },
];

function showImage(index) {
  currentIndex = (index + images.length) % images.length;
  const current = images[currentIndex];
  galleryImage.src = current.src;
  galleryImage.alt = current.caption;
  galleryCaption.textContent = current.caption;
  modalImage.src = current.src;
  modalImage.alt = current.caption;
}

function renderThumbs() {
  thumbList.textContent = '';
  images.forEach((image, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'thumb-btn';
    button.setAttribute('aria-label', `Go to image ${image.id}`);
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.caption;
    button.appendChild(img);
    button.addEventListener('click', () => showImage(index));
    thumbList.appendChild(button);
  });
}

function openModal() {
  imageModal.classList.remove('hidden');
  closeModalBtn.focus();
}

function closeModal() {
  imageModal.classList.add('hidden');
}

function startSlideshow() {
  if (isPlaying) return;
  isPlaying = true;
  slideshowTimer = setInterval(() => showImage(currentIndex + 1), 2000);
}

function stopSlideshow() {
  isPlaying = false;
  clearInterval(slideshowTimer);
  slideshowTimer = null;
}

function toggleSlideshow() {
  if (isPlaying) stopSlideshow();
  else startSlideshow();
}

function openCommandPalette() {
  commandPalette.classList.remove('hidden');
  commandInput.value = '';
  renderCommandResults('');
  commandInput.focus();
}

function closeCommandPalette() {
  commandPalette.classList.add('hidden');
}

function renderCommandResults(keyword) {
  commandResults.textContent = '';
  const key = keyword.trim().toLowerCase();
  const filtered = commands.filter((command) => command.label.toLowerCase().includes(key));

  filtered.forEach((command, index) => {
    const li = document.createElement('li');
    li.textContent = command.label;
    if (index === 0) li.classList.add('active');
    li.addEventListener('click', () => {
      command.action();
      closeCommandPalette();
    });
    commandResults.appendChild(li);
  });
}

prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
nextBtn.addEventListener('click', () => showImage(currentIndex + 1));
playBtn.addEventListener('click', toggleSlideshow);
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    openCommandPalette();
    return;
  }

  if (!commandPalette.classList.contains('hidden')) {
    if (event.key === 'Escape') closeCommandPalette();
    return;
  }

  if (event.key === 'ArrowRight') showImage(currentIndex + 1);
  if (event.key === 'ArrowLeft') showImage(currentIndex - 1);
  if (event.key === ' ') {
    event.preventDefault();
    toggleSlideshow();
  }
  if (event.key === 'Escape') closeModal();

  const number = Number(event.key);
  if (number >= 1 && number <= 9) showImage(number - 1);
});

commandInput.addEventListener('input', (event) => {
  renderCommandResults(event.target.value);
});

commandInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const first = commandResults.querySelector('li');
    if (first) first.click();
  }
});

renderThumbs();
showImage(0);
