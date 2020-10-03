const input = document.querySelector('#validation-input');
const length = document.querySelector('[data-length="6"]');

input.addEventListener('focus', onFocus);

function onFocus(event) {
  event.currentTarget.value.length < length.dataset.length
    ? input.classList.add('invalid')
    : input.classList.replace('invalid', 'valid');
}
