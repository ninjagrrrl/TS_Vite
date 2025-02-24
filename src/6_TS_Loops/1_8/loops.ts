// - Lernziel: do...while-Loop anwenden und verstehen.
// - Erstelle einen Loop mit [do...while](https://www.w3schools.com/js/js%5Floop%5Fwhile.asp).
// - Es sollen alle geraden Zahlen bis 20 im HTML-Dokument ausgegeben werden.
// - **Bitte halte dich an den Typescript-Standard.**

// ! 1. Möglichkeit mit modulor

let doWhileCounter = 1;
const outputDiv = document.querySelector<HTMLDivElement>("div");

do {
  // # wenn Nullprüfung UND modulor
  if (outputDiv && doWhileCounter % 2 === 0) {
    outputDiv.innerHTML += `<p>${doWhileCounter}</p>`;
  }

  doWhileCounter++;
} while (doWhileCounter <= 20);

// ! 2. Möglchkeit, direkt den count bei 2 starten und in 2er schritten hochgehen

let doWhileCounter2 = 2;
const outputDiv2 = document.querySelector<HTMLDivElement>("div");

do {
  // # Nullprüfung mit if (outputDiv)
  if (outputDiv2) {
    outputDiv2.innerHTML += `<p>${doWhileCounter2}</p>`;
  }

  doWhileCounter2 += 2;
} while (doWhileCounter2 <= 20);
