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

    onsubmit = e => {
      e.preventDefault();
      form.reset();
      console.log(INPUTS);
      localStorage.clear();
    };
  }, 500)
);

function regainInputs() {
  const getInputsJSON = localStorage.getItem('feedback-form-state');
  if (getInputsJSON !== null) {
    const outputsJSON = JSON.parse(getInputsJSON);
    email.value = outputsJSON.email || '';
    message.value = outputsJSON.message || '';
  }
}
