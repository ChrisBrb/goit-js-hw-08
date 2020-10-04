const refs = {
  input: document.querySelector('input[type="number"]'),
  buttonCreate: document.querySelector('button[data-action="render"]'),
  buttonReset: document.querySelector('button[data-action="destroy"]'),
  boxesDiv: document.querySelector('#boxes'),
};

let i;

refs.input.addEventListener('input', event => {
  console.log(event.currentTarget.value);
  refs.buttonCreate.addEventListener('click', onCreateNewDivClick);
});

function onCreateNewDivClick(event) {
  for (i = 0; i < refs.input.value; i += 1) {
    const createDiv = document.createElement('div');
    createDiv.classList.add('hard');
    const size = i * 10 + 30 + 'px';
    createDiv.style.width = size;
    createDiv.style.height = size;

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let rgbColor = `rgb(${red},${green},${blue})`;
    console.log(rgbColor);
    createDiv.style.background = rgbColor;
    refs.boxesDiv.append(createDiv);
  }
}

refs.buttonReset.addEventListener('click', event => {
  const children = refs.boxesDiv.children.length;
  for (i = 0; i < children; i += 1) {
    const findElem = refs.boxesDiv.querySelector('div');
    findElem.remove();
  }
  refs.input.value = 0;
});
