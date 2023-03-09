import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

regainInputs();
form.addEventListener(
  'input',
  throttle(e => {
    e.preventDefault();
    const INPUTS = { email: email.value, message: message.value };
    const setInputsJSON = JSON.stringify(INPUTS);
    localStorage.setItem('feedback-form-state', setInputsJSON);
  }, 500)
);

form.addEventListener('submit', e => {
  e.preventDefault();
  onsubmit = e => {
    e.preventDefault();
    const INPUTS = { email: email.value, message: message.value };
    console.log(INPUTS);
    form.reset();
    localStorage.clear();
  };
});

function regainInputs() {
  const getInputsJSON = localStorage.getItem('feedback-form-state');
  if (getInputsJSON !== null) {
    const outputsJSON = JSON.parse(getInputsJSON);
    email.value = outputsJSON.email || '';
    message.value = outputsJSON.message || '';
  }
}
