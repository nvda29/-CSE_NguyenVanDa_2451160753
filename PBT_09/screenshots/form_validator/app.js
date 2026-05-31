const form = document.querySelector('#registerForm');
const submitBtn = document.querySelector('#submitBtn');
const successModal = document.querySelector('#successModal');
const successInfo = document.querySelector('#successInfo');
const closeSuccess = document.querySelector('#closeSuccess');

const fields = {
  name: document.querySelector('#name'),
  email: document.querySelector('#email'),
  password: document.querySelector('#password'),
  confirmPassword: document.querySelector('#confirmPassword'),
  phone: document.querySelector('#phone'),
};

const strengthFill = document.querySelector('#strengthFill');
const strengthText = document.querySelector('#strengthText');

const state = {
  name: false,
  email: false,
  password: false,
  confirmPassword: false,
  phone: false,
};

function setStatus(fieldName, valid, message = '') {
  const input = fields[fieldName];
  input.classList.toggle('valid', valid);
  input.classList.toggle('invalid', !valid);
  state[fieldName] = valid;

  const statusEl = document.querySelector(`.status[data-for="${fieldName}"]`);
  if (statusEl) statusEl.textContent = valid ? 'OK' : 'X';

  const errorEl = document.querySelector(`.error[data-for="${fieldName}"]`);
  if (errorEl) errorEl.textContent = message;
}

function validateName(value) {
  const valid = value.trim().length >= 2 && value.trim().length <= 50;
  setStatus('name', valid, valid ? '' : 'Ten phai tu 2-50 ky tu');
}

function validateEmail(value) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const valid = regex.test(value);
  setStatus('email', valid, valid ? '' : 'Email khong hop le');
}

function getPasswordStrength(value) {
  if (value.length < 8) return { level: 'Yeu', color: '#ef4444', width: '33%' };
  const hasLower = /[a-z]/.test(value);
  const hasUpper = /[A-Z]/.test(value);
  const hasNumber = /\d/.test(value);
  const hasSpecial = /[^A-Za-z0-9]/.test(value);
  if (hasLower && hasUpper && hasNumber && hasSpecial) {
    return { level: 'Manh', color: '#22c55e', width: '100%' };
  }
  if (/[A-Za-z]/.test(value) && hasNumber) {
    return { level: 'Trung binh', color: '#f59e0b', width: '66%' };
  }
  return { level: 'Yeu', color: '#ef4444', width: '33%' };
}

function validatePassword(value) {
  const strength = getPasswordStrength(value);
  strengthFill.style.width = strength.width;
  strengthFill.style.background = strength.color;
  strengthText.textContent = `Do manh: ${strength.level}`;
  strengthText.style.color = strength.color;
  const valid = strength.level !== 'Yeu';
  setStatus('password', valid, valid ? '' : 'Mat khau qua yeu');
}

function validateConfirmPassword(value) {
  const valid = value === fields.password.value && value.length > 0;
  setStatus('confirmPassword', valid, valid ? '' : 'Mat khau khong khop');
}

function formatPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 10);
  if (digits.length <= 4) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 4)}-${digits.slice(4)}`;
  return `${digits.slice(0, 4)}-${digits.slice(4, 7)}-${digits.slice(7)}`;
}

function validatePhone(value) {
  const digits = value.replace(/\D/g, '');
  const valid = digits.length === 10;
  setStatus('phone', valid, valid ? '' : 'Phone phai du 10 so');
}

function updateSubmitState() {
  submitBtn.disabled = !Object.values(state).every(Boolean);
}

fields.name.addEventListener('input', (event) => {
  validateName(event.target.value);
  updateSubmitState();
});

fields.email.addEventListener('input', (event) => {
  validateEmail(event.target.value);
  updateSubmitState();
});

fields.password.addEventListener('input', (event) => {
  validatePassword(event.target.value);
  validateConfirmPassword(fields.confirmPassword.value);
  updateSubmitState();
});

fields.confirmPassword.addEventListener('input', (event) => {
  validateConfirmPassword(event.target.value);
  updateSubmitState();
});

fields.phone.addEventListener('input', (event) => {
  event.target.value = formatPhone(event.target.value);
  validatePhone(event.target.value);
  updateSubmitState();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (submitBtn.disabled) return;

  successInfo.textContent = `Ten: ${fields.name.value}\nEmail: ${fields.email.value}\nPhone: ${fields.phone.value}`;
  successModal.classList.remove('hidden');
});

closeSuccess.addEventListener('click', () => {
  successModal.classList.add('hidden');
});
