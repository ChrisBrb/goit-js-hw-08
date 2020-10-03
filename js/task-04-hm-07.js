const counterValue = document.querySelector('#value');

const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
};

refs.incrementBtn.addEventListener('click', onIncrement);
function onIncrement() {
  counterValue.textContent++;
}

refs.decrementBtn.addEventListener('click', onDecrement);
function onDecrement() {
  counterValue.textContent--;
}
