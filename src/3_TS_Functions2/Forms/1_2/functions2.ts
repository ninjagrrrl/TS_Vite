// - In dieser Aufgabe sollst du ein Formular zur Berechnung deines Alters erstellen.
// - **Bitte halte dich an den Typescript-Standard.**
// - Erstelle dazu ein Formular, in dem du dein Geburtsjahr eingeben kannst, sowie einen Button, der die Funktion dann ausführt.
// - Definiere eine Funktion, die dein Alter in Jahren ausgibt. Dein Alter soll dann in deinem HTML ausgegeben werden.

// ! VARIABLEN ANLEGEN UM TYPESCRIPT MIT HTML ZU VERHEIRATEN, SIE KENNEN SICH SONST NICHT
const birthYearInput =
  document.querySelector<HTMLInputElement>("#year-of-birth");
const outputValue = document.querySelector(".output-value");
const button = document.querySelector("button");

button?.addEventListener("click", calculateAge);

function calculateAge() {
  let inputValue;

  if (birthYearInput) {
    inputValue = birthYearInput.value;
  }

  if (outputValue) {
    outputValue.innerHTML = `<p>${
      new Date().getFullYear() - Number(inputValue)
    }</p>`;
  }
}
