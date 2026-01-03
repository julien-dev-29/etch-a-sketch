var isRandomColor = false;
var isDarkenColor = false;

/**
 * @type {HTMLElement}
 */
const container = document.querySelector(".container");
const windowSize = window.innerWidth - 300;
container.style.width = windowSize;
/**
 * @type {HTMLButtonElement}
 */
const button = document
  .querySelector("#btn")
  .addEventListener("click", handleSubmit);

/**
 * @type {HTMLInputElement}
 */
const randomColorToggler = document.querySelector("#toggle");
randomColorToggler.addEventListener("change", function () {
  isRandomColor = !isRandomColor;
  darkenColorToggler.checked = false;
  isDarkenColor = false;
});

/**
 * @type {HTMLInputElement}
 */
const darkenColorToggler = document.querySelector("#toggle-darken");
darkenColorToggler.addEventListener("change", function () {
  isDarkenColor = !isDarkenColor;
  randomColorToggler.checked = false;
  isRandomColor = false;
});

initGrid(16);

/**
 *
 * @param {*} e
 */
function changeColor(e) {
  if (isRandomColor) {
    e.target.style.backgroundColor = `rgb(
    ${Math.floor(Math.random() * 255)}, 
    ${Math.floor(Math.random() * 255)}, 
    ${Math.floor(Math.random() * 255)})`;
  } else if (isDarkenColor) {
    console.log(e.target);

    var count = parseFloat(e.target.dataset["count"]) + 0.1;
    e.target.style.backgroundColor = `rgb(0, 0, 0, ${count})`;
    e.target.dataset["count"] = count;
  } else {
    e.target.style.backgroundColor = " #0090FF";
  }
}
function handleSubmit() {
  var squareNumber = parseInt(prompt("Combien de carré ?"));
  initGrid(squareNumber);
}
function initGrid(squareNb) {
  container.replaceChildren();
  if (squareNb > 100) {
    return container.append(
      (document.createElement("p").innerText = "Nombre trop grand!")
    );
  }
  for (let i = 0; i < squareNb; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < squareNb; j++) {
      const square = document.createElement("div");
      square.dataset["count"] = 0;
      square.addEventListener("mouseenter", changeColor);
      square.addEventListener("touchmove", changeColor);
      square.classList.add("item");
      row.appendChild(square);
    }
    container.appendChild(row);
    console.log(row.getBoundingClientRect());
    container.style.height = row.getBoundingClientRect().width  + "px"
    console.log("container" + container.getBoundingClientRect().width);
  }
}
