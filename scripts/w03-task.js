/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2
}
  
function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value)
    let addNumber2 = Number(document.querySelector('#add2').value)
    document.querySelector('#sum').value = add(addNumber1, addNumber2)
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers)
  
/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
}
  
  const subtractNumbers = function () {
    let subtract1 = Number(document.querySelector('#subtract1').value)
    let subtract2 = Number(document.querySelector('#subtract2').value)
    document.querySelector('#difference').value = subtract(subtract1, subtract2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value)
    let factor2 = Number(document.querySelector('#factor2').value)
    document.querySelector('#product').value = multiply(factor1, factor2)
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers)

/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
    return dividend / divisor;
}
  
function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value)
    let divisor = Number(document.querySelector('#divisor').value)
  
    document.querySelector('#quotient').value = divide(dividend, divisor);
}
  
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
const currentDate = new Date();
let currentYear;
currentYear = currentDate.getFullYear();
document.querySelector('#year').value = currentYear;


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').textContent = numbersArray.join(', ');

/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(number => number % 2 === 1);
document.querySelector('#odds').textContent = oddNumbers.join(', ');

/* Output Evens Only Array */
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.querySelector('#evens').textContent = evenNumbers.join(', ');

/* Output Sum of Org. Array */
const sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.querySelector('#sumOfArray').textContent = sum;

/* Output Multiplied by 2 Array */
const multipliedArray = numbersArray.map(number => number * 2);
document.querySelector('#multiplied').textContent = multipliedArray.join(', ');

/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = multipliedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.querySelector('#sumOfMultiplied').textContent = sumOfMultiplied;
