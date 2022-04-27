const decrease = document.querySelector('.btn-decrease');
const increase = document.querySelector('.btn-increase');
const reset = document.querySelector('.btn-reset');
const counter = document.querySelector('.counter');

let count = 0;

increase.addEventListener('click', () => {
  count++;
  counter.innerHTML = '';
  counter.innerHTML = count;

  if (count > 0) {
    counter.style.color = 'green';
  }
});

decrease.addEventListener('click', () => {
  count--;
  counter.innerHTML = '';
  counter.innerHTML = count;

  if (count < 0) {
    counter.style.color = 'red';
  }
});

reset.addEventListener('click', () => {
  restart();
});

function restart() {
  count = 0;
  counter.innerHTML = 0;
}
