// - Schreibe eine Funktion, die beim Anklicken der Buttons die Hintergrundfarben aller Elemente ändert.
// - **Bitte halte dich an den Typescript-Standard.**
// - HTML- und CSS-Code findest du im Code-Snippet.
// - Nutze zum Beispiel:
//     - getElementsByClassName
//     - for-loop
//     - oder length

const colorElement = document.getElementsByClassName("example");
const userInputBtn = document.querySelector("button");

userInputBtn?.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  const newColor = getRandomColor();

  for (let i = 0; i < colorElement.length; i++) {
    const element = colorElement[i] as HTMLElement;
    element.style.backgroundColor = newColor;
  }
}

function getRandomColor(): string {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
