const form = document.querySelector('.feedback-form');

regainInputs();
form.addEventListener('input', _.throttle(saveInputs), 500);
form.addEventListener('submit', submitInputs);

function saveInputs(event) {
  event.preventDefault();
  const email = document.querySelector('input');
  const text = document.querySelector('textarea');
  const INPUTS = [email.value, text.value];
  const inputsJSON = JSON.stringify(INPUTS);
  localStorage.setItem('feedback-form-state', inputsJSON);
}

function regainInputs() {
  const email = document.querySelector('input');
  const text = document.querySelector('textarea');
  const INPUTS = [email.value, text.value];
  const inputsJSON = localStorage.getItem('feedback-form-state');
  if (inputsJSON !== null) {
    const outputsJSON = JSON.parse(inputsJSON);
    email.value = outputsJSON[0] || '';
    text.value = outputsJSON[1] || '';
  }
}

function submitInputs(event) {
  event.preventDefault();
  const email = document.querySelector('input');
  const text = document.querySelector('textarea');
  const INPUTS = [email.value, text.value];
  console.log(INPUTS);
  form.reset();
  localStorage.clear();
}
