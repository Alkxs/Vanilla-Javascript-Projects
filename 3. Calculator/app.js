const display = document.querySelector('.display');
const keys = document.querySelectorAll('.keys');

const previous = document.getElementById('previous')
const current = document.getElementById('current')

const numbers = document.querySelectorAll('[data-type="number"]');
const operators = document.querySelectorAll('[data-type="operation"]');

const decimal = document.querySelector('.decimal');
const equal = document.querySelector('[data-type="equal"]');
const clear = document.querySelector('[data-type="clear"]');
const deleteLast = document.querySelector('[data-type="delete"]');

keys.forEach((num) => {
  num.addEventListener('click', (e) => {
    let key = e.target;
    let keyValue = key.textContent;
    let displayValue = display.textContent;
    display.textContent = keyValue;

    switch (keyValue) {
      case 'AC':
        display.textContent = '';
        break;
      case '←':
        if (display.textContent) {
          display.textContent = display.textContent.slice(0, -1);
        }
        break;
      case '=':
        compute()
    }
  });
});

compute(number, op, number2) {
}

// let buttons = Array.from(keys);
// buttons.map((key) => {
//   key.addEventListener('click', (e) => {
//     switch (e.target.innerText) {
//       case 'AC':
//         display.innerText = '';
//         break;
//       case '←':
//         if (display.innerText) {
//           display.innerText = display.innerText.slice(0, -1);
//         }
//         break;
//       case '=':
//         try {
//           display.innerText = eval(display.innerText);
//         } catch {
//           display.innerText = 'Error';
//         }
//         break;
//       default:
//         display.innerText += e.target.innerText;
//     }
//   });
// });
