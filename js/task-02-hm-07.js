const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const itemEl = document.querySelector('#ingredients');

const makeProductIngredient = ingredients => {
  const listEl = document.createElement('li');
  listEl.classList.add('ingredients-list');
  listEl.textContent = ingredients;
  return listEl;
};

const el = ingredients.map(makeProductIngredient);
itemEl.append(...el);
