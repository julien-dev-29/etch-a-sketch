const container = document.querySelector('.container')
const button = document.querySelector('#btn').addEventListener('click', handleSubmit)
/**
 * @type {HTMLInputElement}
 */
const randomColorToggler = document.querySelector('#toggle')
const darkenColorToggler = document.querySelector('#toggle-darken')
randomColorToggler.addEventListener('change', function () {
    isRandomColor = !isRandomColor
    darkenColorToggler.checked = false
})
darkenColorToggler.addEventListener('change', function () {
    isDarkenColor = !isDarkenColor
    randomColorToggler.checked = false
})
function toggle(toggler) {

}
var isRandomColor = false
var isDarkenColor = false
const containerSize = 850
var squares = []
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
        e.target.style.backgroundColor = "rgb(41, 163, 131)"

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
        squares.push(square)
        container.append(square)
        container.style.width = `${containerSize}px`
    }
    squares.map(square => square.addEventListener('mouseover', changeColor))
}