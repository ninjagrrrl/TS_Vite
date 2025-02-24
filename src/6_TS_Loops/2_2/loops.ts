// Lernziel: Textausgabe je nach Eingabe der User:innen erstellen unter Verwendung von Bedingungen und Schleifen.
// In deinem HTML ist ein Inputfeld zu sehen, in das User:innen eine Zahl eingeben können. So wird die Anzahl des Buchstabens "o" festgelegt.
// Schreibe eine Funktion, mit der du am Ende in deinem HTML das Wort "Loop" ausgibst, mit der eingegebenen Anzahl an Os aus dem Input-Feld.

const userInput = document.querySelector<HTMLInputElement>("#oInput");
const outputDiv = document.querySelector<HTMLDivElement>("div");

userInput?.addEventListener("input", textOutput);

function textOutput() {
  let result = "L";

  if (userInput && userInput.value) {
    const inputNumber = Number(userInput.value);

    for (let i = 0; i < inputNumber; i++) {
      result += "o";
    }
  }

  result += "p";
  if (outputDiv) {
    outputDiv.innerHTML = result;
  }
}
