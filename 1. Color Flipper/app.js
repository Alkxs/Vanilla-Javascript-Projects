const btn = document.querySelector('.btn');

function getRandomNumber(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function getRandomColor() {
  const r = getRandomNumber(0, 255);
  const g = getRandomNumber(0, 255);
  const b = getRandomNumber(0, 255);

  const randomColor = `rgb(${r}, ${g}, ${b})`;

  document.body.style.backgroundColor = randomColor;
}

// function generateRandomColor() {
//   // const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
//   // return randomColor;

// }

btn.addEventListener('click', getRandomColor);
