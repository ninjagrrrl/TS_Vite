// - Lernziel: Der Vergleich von Functions und Variablen.
// - Deklariere die Function returnOne(). Schreibe return 1; in den Funktionskörper.
// - Deklariere die Variable x mit dem Wert 1, außerhalb des Funktionskörpers.
// - Deklariere die Variable y mit dem Wert returnOne(), außerhalb des Funktionskörpers.
// - Wenn x gleich y ist, dann soll in der Konsole “Wird das gedruckt?” angezeigt werden. Wenn x ungleich y ist, dann soll es nicht angezeigt werden.
// - **Bitte halte dich an den Typescript-Standard.**

function returnOne(): number {
  return 1;
}

let x: number = 1;
let y: number = returnOne();

if (x === y) {
  console.log("Wird das gedruckt?");
} else {
}
