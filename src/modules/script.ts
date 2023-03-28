let value: string;
let firstOperand: string;
let secondOperand: string;
let operator: string;
let operatorSelected: boolean = false;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function () {
      if (button.textContent !== null) {
        value = button.textContent;
        saveOperator();
        saveOperand();
        updateDisplay();
      }
    });
  });
  
  function saveOperand() {
    if (/\d/.test(value)) {
      if (!operatorSelected) {
        firstOperand = firstOperand ? firstOperand + value : value;
        console.log(firstOperand);
      } else {
        secondOperand = secondOperand ? secondOperand + value : value;
        console.log(secondOperand);
      }
    }
  }
  
  function updateDisplay() {
    const display = document.querySelector('.display');
    if (display) {
      if (!operatorSelected) {
        display.innerHTML = firstOperand;
      }
      else if(['+', '-', '*', '/'].includes(value)){
       display.innerHTML = operator
      }
       else {
        display.innerHTML = secondOperand;
      }
      
    }
  }
  

function saveOperator() {
  if (['+', '-', '*', '/'].includes(value)) {
    operator = value;
    operatorSelected = true;
    console.log(operator);
  }
}

function performCalculation() {
  let result: number;

  const numFirstOperand = parseFloat(firstOperand);
  const numSecondOperand = parseFloat(secondOperand);

  switch (operator) {
    case '+':
      result = numFirstOperand + numSecondOperand;
      break;
    case '-':
      result = numFirstOperand - numSecondOperand;
      break;
    case '*':
      result = numFirstOperand * numSecondOperand;
      break;
    case '/':
      result = numFirstOperand / numSecondOperand;
      break;
    default:
      console.error('Invalid operator');
      return;
  }

 
  const display = document.querySelector('.display');
  if (display) {
    display.innerHTML = result.toString();
  }
  resetCalculator();
}

function resetCalculator() {
  firstOperand = '';
  secondOperand = '';
  operator = '';
  operatorSelected = false;
}


const equalButton = document.querySelector('#equal'); 
if (equalButton) {
  equalButton.addEventListener('click', performCalculation);
}

  
//bild

const img = document.createElement('img');
document.body.append(img)


const imgUrl = new URL('../image/robin.jpg',import.meta.url);
img.src = imgUrl.href;