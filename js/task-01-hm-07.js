const categoriesEl = document.querySelector('#categories');

const productEl = categoriesEl.querySelectorAll('h2');
console.log('Quantity of categories: ', productEl.length);

for (let i = 0; i < productEl.length; i += 1) {
  console.log(`${i + 1}. Category: ${productEl[i].textContent};`);
}

const quantityEl = document.querySelectorAll('.item');

for (let i = 0; i < quantityEl.length; i += 1) {
  const elm = quantityEl[i].querySelectorAll('li');
  console.log(`${i + 1}. Quantity elements: ${elm.length};`);
}
