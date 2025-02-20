// - In dieser Aufgabe soll geübt werden, wie Parameter eingesetzt werden können.
// - Erstelle dazu eine Funktion, die einen Parameter vom Typ number hat und multipliziere diesen mit 2.
// - Gib das Ergebnis mit return zurück und schaue dir das Ergebnis schließlich in der Konsole an.

function rechner(zahl1: number) {
  let multiply = zahl1 * 2;
  return multiply;
}

let ergebnis = rechner(10);
console.log(ergebnis);
