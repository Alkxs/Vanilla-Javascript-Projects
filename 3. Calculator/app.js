const calculator = document.querySelector('.calculator');
const keys = document.querySelectorAll('.keys');
const screen = document.querySelector('.screen');

const numbers = document.querySelectorAll('[data-type="number"]');
const operators = document.querySelectorAll('[data-type="operation"]');
const decimal = document.querySelector('.decimal');
const equal = document.querySelector('[data-type="equal"]');
const clear = document.querySelector('[data-type="clear"]');
const deleteLast = document.querySelector('[data-type="delete"]');

// keys.forEach((num) => {
//   num.addEventListener('click', (e) => {
//     let key = e.target;
//     let keyValue = key.textContent;
//     let displayValue = screen.textContent;
//     screen.textContent = keyValue;
//   });
// });

let buttons = Array.from(keys);

buttons.map((key) => {
  key.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case 'AC':
        screen.innerText = '';
        break;
      case '←':
        if (screen.innerText) {
          screen.innerText = screen.innerText.slice(0, -1);
        }
        break;
      case '=':
        try {
          screen.innerText = eval(screen.innerText);
        } catch {
          screen.innerText = 'Error';
        }
        break;
      default:
        screen.innerText += e.target.innerText;
    }
  });
});
