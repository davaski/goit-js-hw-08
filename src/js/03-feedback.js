import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
const { email, message } = form.elements;
reload();

function onInput(event) {
  data = { email: email.value, message: message.value };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function reload() {
  if (data) {
    email.value = data.email || '';
    message.value = data.message || '';
  }
}

function onSubmit(event) {
  event.preventDefault();
  if (email.value === '' || message.value === '') {
    return alert(`Будь ласка, заповніть всі обов'язкові поля.`);
  }
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
  data = {};
}
