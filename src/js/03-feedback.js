import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);
let data = JSON.parse(localStorage.getItem(STORAGE_KEY) || {});

function onInput(event) {
  data = { email: email.value, message: message.value };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
function onSubmit(event) {
  event.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert(`Будь ласка, заповніть всі обов'язкові поля.`);
  }

  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
}
