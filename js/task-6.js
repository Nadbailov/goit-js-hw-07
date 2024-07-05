function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; // Очищаємо попередні елементи

  let size = 30; // Початковий розмір
  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = color;
    box.style.margin = '5px'; // Додаємо зазор між елементами
    box.style.boxSizing = 'border-box'; // Враховуємо padding у розмірах елементів
    boxesContainer.appendChild(box);
    size += 10; // Збільшуємо розмір для наступного елемента
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; // Очищаємо всі елементи
}

document.addEventListener('DOMContentLoaded', () => {
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const inputAmount = document.querySelector('input[type="number"]');

  createButton.addEventListener('click', () => {
    const amount = parseInt(inputAmount.value);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      inputAmount.value = ''; // Очищаємо поле вводу
    } else {
      alert('Please enter a number between 1 and 100.');
    }
  });

  destroyButton.addEventListener('click', () => {
    destroyBoxes();
  });
});