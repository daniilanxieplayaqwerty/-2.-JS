// main.js

// Рахує кількість входжень вказаної літери (регістр не враховуємо)
function countLetter(str, letter = 'a') {
  if (!str || !letter) return 0;
  const target = letter[0]; // тільки перший символ
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charAt(i);
    if (ch.toLowerCase() === target.toLowerCase()) count++;
  }
  return count;
}

// Повертає рядок, у якому більше вказаної літери (за замовчуванням 'a')
function getRow(firstRow, secondRow, letter = 'a') {
  const aCount = countLetter(firstRow, letter);
  const bCount = countLetter(secondRow, letter);
  return aCount >= bCount ? firstRow : secondRow;
}

// === Приклад з умови (дивіться у консолі) ===
const firstRow = 'Slow and steady wins the race';
const secondRow = 'You can say that again';
console.log(getRow(firstRow, secondRow)); // очікувано: 'You can say that again'

// === Інтерактив: prompt/alert ===
(function interactive() {
  // Попросимо користувача ввести рядки (можна скасувати)
  const usePrompts = false; // змініть на true, щоб запускалось автоматично при відкритті сторінки
  if (!usePrompts) return;

  const row1 = prompt('Введіть перший рядок:', firstRow);
  if (row1 === null) return;

  const row2 = prompt('Введіть другий рядок:', secondRow);
  if (row2 === null) return;

  const letter = prompt('Яку літеру рахувати? (один символ)', 'a') || 'a';

  const best = getRow(row1, row2, letter);
  const c1 = countLetter(row1, letter);
  const c2 = countLetter(row2, letter);

  alert(`Літера: "${letter}"\nУ рядку 1: ${c1}\nУ рядку 2: ${c2}\n\nБільше у: \n${best}`);
})();

// === Логіка для форми на сторінці ===
document.addEventListener('DOMContentLoaded', () => {
  const firstInput = document.getElementById('firstInput');
  const secondInput = document.getElementById('secondInput');
  const letterInput = document.getElementById('letterInput');
  const runBtn = document.getElementById('runBtn');
  const result = document.getElementById('result');

  // Значення за замовчуванням
  firstInput.value = firstRow;
  secondInput.value = secondRow;

  runBtn.addEventListener('click', () => {
    const ltr = (letterInput.value || 'a').slice(0,1);
    const r1 = firstInput.value;
    const r2 = secondInput.value;

    const c1 = countLetter(r1, ltr);
    const c2 = countLetter(r2, ltr);
    const best = getRow(r1, r2, ltr);

    result.textContent =
      `Літера: "${ltr}"\n` +
      `У рядку 1: ${c1}\n` +
      `У рядку 2: ${c2}\n\n` +
      `Рядок з більшою кількістю: \n"${best}"`;
  });
});
