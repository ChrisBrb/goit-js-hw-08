const input = document.querySelector('#name-input');

const nameOutput = document.querySelector('#name-output');

input.addEventListener('input', onNameOutput);

function onNameOutput(event) {
  if (event.currentTarget.value !== '') {
    nameOutput.textContent = event.currentTarget.value;
  }
}
