var isRandomColor = false
var isDarkenColor = false
const containerSize = 850

/**
 * @type {HTMLElement}
 */
const container = document.querySelector('.container')

/**
 * @type {HTMLButtonElement}
 */
const button = document
    .querySelector('#btn')
    .addEventListener('click', handleSubmit)

/**
 * @type {HTMLInputElement}
 */
const randomColorToggler = document.querySelector('#toggle')
randomColorToggler.addEventListener('change', function () {
    isRandomColor = !isRandomColor
    darkenColorToggler.checked = false
})

/**
 * @type {HTMLInputElement}
 */
const darkenColorToggler = document.querySelector('#toggle-darken')
darkenColorToggler.addEventListener('change', function () {
    isDarkenColor = !isDarkenColor
    randomColorToggler.checked = false
    isRandomColor = false
})

initGrid(16)

/**
 * 
 * @param {*} e 
 */
function changeColor(e) {
    if (isRandomColor) {
        e.target.style.backgroundColor = `rgb(
    ${Math.floor(Math.random() * 255)}, 
    ${Math.floor(Math.random() * 255)}, 
    ${Math.floor(Math.random() * 255)})`
    } else if (isDarkenColor) {
        console.log(e.target);

        var count = parseFloat(e.target.dataset['count']) + 0.1
        e.target.style.backgroundColor = `rgb(41, 163, 131, ${count})`
        e.target.dataset['count'] = count
    }
    else {
        e.target.style.backgroundColor = " #29A383"
    }
}
function handleSubmit() {
    var squareNumber = parseInt(prompt("Combien de carré ?"))
    initGrid(squareNumber)
}
function initGrid(squareNb) {
    container.replaceChildren()
    squares = []
    if (squareNb > 100) {
        return container.append(document.createElement('p').innerText = "Nombre trop grand!")
    }
    for (let i = 0; i < squareNb * squareNb; i++) {
        var square = document.createElement('div')
        square.classList.add('item')
        square.style.width = containerSize / squareNb + "px"
        square.style.height = containerSize / squareNb + "px"
        square.addEventListener('mouseover', changeColor)
        square.dataset['count'] = 0
        container.append(square)
        container.style.width = `${containerSize}px`
    }
}