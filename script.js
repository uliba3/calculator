// Use const and let appropriately
let arrayNumbers = [0];
let arrayOperators = [];
let arrayBrackets = [''];

function operation(num1, num2, operator){
    console.log(operator);
    if(operator == '+'){
        return num1+num2;
    }else if(operator == '-'){
        return num1-num2;
    }else if(operator == '*'){
        return num1*num2;
    }else if(operator == '/'){
        return num1/num2;
    }
}

// Select elements using querySelector
const calculator = document.querySelector('.calculator');
const display = document.querySelector('.display');
const numpad = document.querySelector('.numpad');
const operators = document.querySelector('.operators');

// Create numpad buttons using a loop
const numpadNumbers = [];
for (let i = 0; i < 10; i++) {
  const button = document.createElement('button');
  button.classList.add('numpadNumber');
  button.textContent = i;
  button.addEventListener('click', () => {
    arrayNumbers[arrayNumbers.length - 1] *= 10;
    arrayNumbers[arrayNumbers.length - 1] += i;
    displayEquation();
  });
  numpadNumbers.push(button);
  numpad.appendChild(button);
}

let operatorMarks = [];
let operatorMarksArray = ['+', '-', '*', '/', '=', 'clear'];
for(operatorMark of operatorMarksArray){
    let i = operatorMarksArray.indexOf(operatorMark)
    operatorMarks[i] = document.createElement('button');
    operatorMarks[i].classList.add('operator');
    operatorMarks[i].textContent = `${operatorMark}`;
    operatorMarks[i].addEventListener('click', function(){
        if(operatorMarksArray[i] != '=' && operatorMarksArray[i] != 'clear'){
            arrayNumbers.push(0);
            lastOperator = operatorMarksArray[i];
            arrayOperators.push(lastOperator);
            displayEquation();
        }else if(operatorMarksArray[i] == '=') {
            console.log(arrayOperators);
            calculation();
            displayEquation();
        }else if(operatorMarksArray[i] == 'clear') {
            clear();
        }
    });
    operators.appendChild(operatorMarks[i]);
}

// Function to handle operator button click
function handleOperatorClick(operator) {
  if (operator !== '=' && operator !== 'clear' && operator !== '(' && operator !== ')') {
    arrayNumbers.push(0);
    arrayOperators.push(operator);
    displayEquation();
  } else if (operator === '=') {
    if(validate()){
        calculation();
    }
  } else if (operator === 'clear') {
    clear();
  } else{
    for(let i = arrayBrackets.length; i < arrayOperators.length ; i++){
        arrayBrackets.push('');
    }
    arrayBrackets.push(operator);
    console.log('arrayOperators, arrayBrackets', arrayOperators, arrayBrackets);
    displayEquation();
  }
}

function validate() {
    
}

// Clear function
function clear() {
  arrayNumbers = [0];
  arrayOperators = [];
  arrayBrackets = [];
  displayEquation();
}

function displayEquation() {
    let equation = "";
    for (let i = 0; i < arrayNumbers.length - 1; i++) {
        if (arrayBrackets[i] === '(') {
            equation += arrayBrackets[i] + arrayNumbers[i].toString() + arrayOperators[i];
        } else if (arrayBrackets[i] === ')') {
            equation += arrayNumbers[i].toString() + arrayBrackets[i] + arrayOperators[i];
        } else {
            equation += arrayNumbers[i].toString() + arrayOperators[i];
        }
    }
    equation += arrayNumbers[arrayNumbers.length - 1];
    
    // Display the equation in the "display" element
    display.textContent = equation;
}

// Calculation function
function calculation() {
    for(let i = 0; i < arrayOperators.length; i++){
        if(arrayOperators[i] == '*' || arrayOperators[i] == '/'){
            arrayNumbers[i] = operation(arrayNumbers[i], arrayNumbers[i + 1], arrayOperators[i]);
            arrayOperators.splice(i, 1);
            arrayNumbers.splice(i + 1, 1);
            return;
        }
    }
    for(let i = 0; i < arrayOperators.length; i++){
        if(arrayOperators[i] == '+' || arrayOperators[i] == '-'){
            arrayNumbers[i] = operation(arrayNumbers[i], arrayNumbers[i + 1], arrayOperators[i]);
            arrayOperators.splice(i, 1);
            arrayNumbers.splice(i + 1, 1);
            return;
        }
    }
}