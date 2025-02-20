// - Erstelle ein Formular, in dem du eine Zahl eingeben kannst. Daneben steht ein Button, der eine Funktion ausführt und zwar "Verdoppel mich". Du sollst also eine Function deklarieren, die den Wert aus deinem Input-Feld mit 2 multipliziert. Das Ergebnis wird schließlich in deinem HTML ausgegeben.
// - **Bitte halte dich an den Typescript-Standard.**
// Gib deiner form onsubmit="return false" falls sich deine Seite nach dem Absenden neu lädt.

const numberInput = document.querySelector<HTMLInputElement>("#number-input");
const outputValue = document.querySelector(".output-value");
const button = document.querySelector("button");

button?.addEventListener("click", doubleInput);

function doubleInput() {
  let inputValue;

  if (numberInput) {
    inputValue = numberInput.value;
  }

  if (outputValue) {
    outputValue.innerHTML = `<p>${Number(inputValue) * 2}</p>`;
  }
}
