import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

regainInputs();

form.addEventListener(
  'input',
  throttle(() => {
    const inputs = { email: email.value, message: message.value };
    const setInputsJSON = JSON.stringify(inputs);
    localStorage.setItem('feedback-form-state', setInputsJSON);
  }, 500)
  );

  form.addEventListener('submit', e => {
    e.preventDefault();
    localStorage.clear();
    console.log({ email: email.value, message: message.value });
    form.reset();
  });
  
  function regainInputs() {
  const getInputsJSON = localStorage.getItem('feedback-form-state');
  const outputsJSON = JSON.parse(getInputsJSON);
  if (getInputsJSON !== null) {
    email.value = outputsJSON.email || '';
    message.value = outputsJSON.message || '';
  }
}
