let arrayNumbers = [0];
let arrayOperators = [];
let lastOperator = "";
arrayNumbers[arrayNumbers.length - 1]

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

const calculator = document.querySelector('.calculator');
const display = document.querySelector('.display');
const numpad = document.querySelector('.numpad');
const operators = document.querySelector('.operators');

let numpadNumbers = [];
for(let i = 0; i < 10; i++){
    numpadNumbers[i] = document.createElement('button');
    numpadNumbers[i].classList.add('numpadNumber');
    numpadNumbers[i].textContent = `${i}`;
    numpadNumbers[i].addEventListener('click', function(){
        arrayNumbers[arrayNumbers.length - 1] *= 10;
        arrayNumbers[arrayNumbers.length - 1] += i;
        displayEquation();
    });
    numpad.appendChild(numpadNumbers[i]);
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

function clear(){
    lastOperator = "";
    arrayNumbers = [0];
    arrayOperators = [];
    display.textContent = "";
}

function displayEquation(){
    display.textContent = "";
    for(let i = 0; i < arrayNumbers.length - 1; i++){
        display.textContent += `${arrayNumbers[i]} ${arrayOperators[i]} `;
    }
    display.textContent += `${arrayNumbers[arrayNumbers.length - 1]}`;
}

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
            arrayOperators.splice(i, 1);
            arrayNumbers[i] = operation(arrayNumbers[i], arrayNumbers[i + 1], arrayOperators[i]);
            arrayOperators.splice(i, 1);
            arrayNumbers.splice(i + 1, 1);
            return;
        }
    }
}