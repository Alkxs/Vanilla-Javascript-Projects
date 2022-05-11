const display = document.querySelector('.display');
const keys = document.querySelectorAll('.keys');

const previous = document.getElementById('previous');
const current = document.getElementById('current');

const numbers = document.querySelectorAll('[data-type="number"]');
const operators = document.querySelectorAll('[data-type="operation"]');

const decimal = document.querySelector('.decimal');
const equal = document.querySelector('[data-type="equal"]');
const clear = document.querySelector('[data-type="clear"]');
const deleteLast = document.querySelector('[data-type="delete"]');

keys.forEach((key) => {
  key.addEventListener('click', (e) => {
    let keyPressed = e.target.innerText;
    let showDisplay = display.innerText;

    if (e.target.classList.contains('number') || e.target.classList.contains('operator')) {
      if (showDisplay === '0' && keyPressed === '0') {
        display.innerText = '0';
      } else if (showDisplay === '0') {
        display.innerText = keyPressed;
      } else {
        display.innerText += keyPressed;
      }
    }

    clear.addEventListener('click', (e) => {
      display.innerText = '0';
    });

    // deleteLast.addEventListener('click', (e) => {
    //   if (display.textContent.length) {
    //     display.textContent = display.textContent.slice('0', '-1');
    //   }
    // });

    // switch (display.innerText) {
    //   case 'clear':
    //     display.textContent = '0';
    //     break;
    //   case '←':
    //     if (showDisplay) {
    //       showDisplay = display.textContent.slice(0, -1);
    //     }
    //     break;
    //   // case '=':
    //   //   compute();
    // }
  });
});

function compute(number, op, number2) {
  console.log(number, op, number2);
}
