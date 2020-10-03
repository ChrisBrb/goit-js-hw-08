const input = document.querySelector('#font-size-control');
const spanById = document.querySelector('#text');

input.setAttribute('min', 16);
input.setAttribute('max', 32);

input.addEventListener('input', onInput);

function onInput(event) {
  spanById.style.fontSize = event.currentTarget.value + 'px';
}
