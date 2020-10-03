const patentEl = document.querySelector('#categories');
console.log(`У списку ${patentEl.children.length} категорії;`);

const quantityEl = patentEl.children;
for (let i = 0; i < quantityEl.length; i += 1) {
  console.log(
    `Категорія: ${quantityEl[i].firstElementChild.textContent}, \
Кількість елементів: ${quantityEl[i].lastElementChild.children.length}; `,
  );
}
