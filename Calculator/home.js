let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions : add() , subtract() , divide() , multiply()
// Call the correct function when user clicks on one of the button
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

let sumEl = document.getElementById("sum-el")

function add() {
    let result = num1 + num2
    sumEl.textContent = "Sum : " + result
}

function subtract() {
    let result = num1 - num2
    sumEl.textContent = "Sum : " + result
}

function divide() {
    let result = num1 / num2
    sumEl.textContent = "Sum : " + result
}

function multiply() {
    let result = num1 * num2
    sumEl.textContent = "Sum : " + result
}