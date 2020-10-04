const value = document.querySelector('#value');
const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
};

const counterValue = event => {
  if (event.toElement.dataset.action === 'increment') {
    value.textContent++;
  } else if (event.toElement.dataset.action === 'decrement') {
    value.textContent--;
  }
};

refs.incrementBtn.addEventListener('click', counterValue);
refs.decrementBtn.addEventListener('click', counterValue);
