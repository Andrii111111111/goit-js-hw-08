import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = form.elements.email.value;
const message = form.elements.message.value;
const LOCAL_KEY = 'feedback-form-state';
console.log(email);
form.addEventListener('input', getData);

function getData(evt) {
  console.log(form.elements.email.value);
  console.log(form.elements.message.value);
  //   localStorage.setItem(LOCAL_KEY, evt.target.value);
  const data = { email, message };
  localStorage.setItem(LOCAL_KEY, data);
  //   localStorage.setItem(LOCAL_KEY, form.elements.message.value);
}

document.addEventListener('DOMContentLoaded', backContent);

function backContent(evt) {
  evt.target.value = localStorage.getItem(LOCAL_KEY);
  console.log(localStorage.getItem(LOCAL_KEY));
}
