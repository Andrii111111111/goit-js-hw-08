import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const subBtn = document.querySelector('button');
const LS_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(getData, 500));
function getData(evt) {
  const data = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(LS_KEY, JSON.stringify(data));
}

document.addEventListener('DOMContentLoaded', backContent);
function backContent(evt) {
  if (localStorage.getItem(LS_KEY) === null) {
    return;
  } else {
    form.elements.email.value = JSON.parse(localStorage.getItem(LS_KEY)).email;
    form.elements.message.value = JSON.parse(
      localStorage.getItem(LS_KEY)
    ).message;
  }
}

subBtn.addEventListener('click', sendData);
function sendData(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LS_KEY)));
  localStorage.removeItem(LS_KEY);
  form.elements.email.value = '';
  form.elements.message.value = '';
}
