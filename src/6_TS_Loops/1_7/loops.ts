// - Erstelle einen Loop mit [do...while](https://www.w3schools.com/js/js%5Floop%5Fwhile.asp).
// - Es sollen die Nummern von 1 bis 5 (wie im Screenshot zu sehen) im HTML-Dokument ausgeben werden.

let doWhileCounter = 1;
const outputDiv = document.querySelector<HTMLDivElement>("div");

do {
  // # if (outputDiv) ist die Nullprüfung, die prüft ob outputDiv exisitert und einen Wert hat
  if (outputDiv) {
    outputDiv.innerHTML += `<p>The number is ${doWhileCounter}</p>`;
  }
  doWhileCounter++;
} while (doWhileCounter <= 5);
