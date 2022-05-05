const keys = document.querySelector('.keys');

const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operation]');
const decimal = document.querySelector('.decimal');
const equal = document.querySelector('.equal-sign');
const clear = document.querySelector('.clear');
const deleteLast = document.querySelector('.delete');

const screen = document.querySelector('.screen');

keys.addEventListener('click', (e) => {
  if (!e.target.closest('button')) return;

  const key = e.target;
  const keyValue = key.textContent;
  const displayValue = screen.textContent;
  screen.textContent = keyValue;

  if (displayValue === '0') {
    screen.textContent = keyValue;
  } else {
    screen.textContent = displayValue + keyValue;
  }

  console.log(keyValue);
});

////testing
function add(n1, n2) {
  const sum = n1 + n2;
  console.log(sum);
}
function subtract(n1, n2) {
  const minus = n1 - n2;
  console.log(minus);
}
function multiply(n1, n2) {
  const multi = n1 * n2;
  console.log(multi);
}
function divide(n1, n2) {
  const division = n1 / n2;
  console.log(division);
}

function operate() {
  subtract(10, 2);
  add(2, 2);
  multiply(2, 4);
  divide(10, 2);
}

operate();
