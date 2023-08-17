import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const subBtn = document.querySelector('button');
const LOCAL_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(getData, 500));
function getData(evt) {
  const data = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
}

document.addEventListener('DOMContentLoaded', backContent);
function backContent(evt) {
  if (localStorage.getItem(LOCAL_KEY) === null) {
    return;
  } else {
    form.elements.email.value = JSON.parse(
      localStorage.getItem(LOCAL_KEY)
    ).email;
    form.elements.message.value = JSON.parse(
      localStorage.getItem(LOCAL_KEY)
    ).message;
  }
}

subBtn.addEventListener('click', sendData);
function sendData(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCAL_KEY)));
  localStorage.clear(LOCAL_KEY);
  form.elements.email.value = '';
  form.elements.message.value = '';
}
