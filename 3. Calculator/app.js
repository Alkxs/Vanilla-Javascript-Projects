let currentNum = '';
let previousNum = '';
let operator = '';

const previousDisplay = document.getElementById('previous');
const currentDisplay = document.getElementById('current');

window.addEventListener('keydown', handleKeyPress);

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

const decimal = document.querySelector('.decimal');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const deleteLast = document.querySelector('.delete');

decimal.addEventListener('click', () => {
  addDecimal();
});

equal.addEventListener('click', () => {
  if (currentNum != '' && previousNum != '') {
    compute();
  }
});

clear.addEventListener('click', clearCalculator);

deleteLast.addEventListener('click', handleDelete);

numbers.forEach((num) => {
  num.addEventListener('click', (e) => {
    handleNumber(e.target.value);
  });
});

function handleNumber(number) {
  if (previousNum !== '' && currentNum !== '' && operator === '') {
    previousNum = '';
    currentDisplay.textContent = currentNum;
  }
  if (currentNum.length <= 11) {
    currentNum += number;
    currentDisplay.textContent = currentNum;
  }
}

operators.forEach((op) => {
  op.addEventListener('click', (e) => {
    handleOperator(e.target.value);
  });
});

function handleOperator(op) {
  if (previousNum === '') {
    previousNum = currentNum;
    operatorCheck(op);
  } else if (currentNum === '') {
    operatorCheck(op);
  } else {
    compute();
    operator = op;
    currentDisplay.textContent = '0';
    previousDisplay.textContent = previousNum + ' ' + operator;
  }
}

function operatorCheck(text) {
  operator = text;
  previousDisplay.textContent = previousNum + ' ' + operator;
  currentDisplay.textContent = '0';
  currentNum = '';
}

function compute() {
  previousNum = Number(previousNum);
  currentNum = Number(currentNum);

  if (operator === '+') {
    previousNum += currentNum;
  } else if (operator === '-') {
    previousNum -= currentNum;
  } else if (operator === 'x') {
    previousNum *= currentNum;
  } else if (operator === '/') {
    if (currentNum <= 0) {
      previousNum = 'Error';
      displayResults();
      return;
    }
    previousNum /= currentNum;
  }
  previousNum = roundNumber(previousNum);
  previousNum = previousNum.toString();
  displayResults();
}

function roundNumber(num) {
  return Math.round(num * 100000) / 100000;
}

function displayResults() {
  if (previousNum.length <= 11) {
    currentDisplay.textContent = previousNum;
  } else {
    currentDisplay.textContent = previousNum.slice(0, 11) + '...';
  }
  previousDisplay.textContent = '';
  operator = '';
  currentNum = '';
}

function clearCalculator() {
  currentNum = '';
  previousNum = '';
  operator = '';
  currentDisplay.textContent = '0';
  previousDisplay.textContent = '';
}

function addDecimal() {
  if (!currentNum.includes('.')) {
    currentNum += '.';
    currentDisplay.textContent = currentNum;
  }
}

function handleKeyPress(e) {
  e.preventDefault();
  if (e.key >= 0 && e.key <= 9) {
    handleNumber(e.key);
  }
  if (e.key === 'Enter' || (e.key === '=' && currentNum != '' && previousNum != '')) {
    compute();
  }
  if (e.key === '+' || e.key === '-' || e.key === '/') {
    handleOperator(e.key);
  }
  if (e.key === '*') {
    handleOperator('x');
  }
  if (e.key === '.') {
    addDecimal();
  }
  if (e.key === 'Backspace') {
    handleDelete();
  }
  console.log(e.key);
}

function handleDelete() {
  if (currentNum !== '') {
    currentNum = currentNum.slice(0, -1);
    currentDisplay.textContent = currentNum;
    if (currentNum === '') {
      currentDisplay.textContent = '0';
    }
  }
  if (currentNum === '' && previousNum !== '' && operator === '') {
    previousNum = previousNum.slice(0, -1);
    currentDisplay.textContent = previousNum;
  }
}
