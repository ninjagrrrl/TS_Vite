// - Dieses Mal sollst du eine Funktion zur Berechnung deines Alters schreiben. Setze dafür folgende Schritte nacheinander um
// - Überlege dir einen eindeutigen, sprechenden Namen
// - Definiere eine Funktion, die einen Parameter hat: birthYear.
// - Berechne im Funktionskörper dein Alter
// - Nutze return, um dein Alter zurückzugeben.

function calculateAge(birthYear: number) {
  let age = 2025 - birthYear;
  return age;
}

// - Gib dein Alter schließlich außerhalb der Funktion in der Konsole aus.
let ergebnis = calculateAge(1990);
console.log(ergebnis);

// - Die erste Funktion ist geschafft - super!
// - Schreibe nun eine Funktion, die dein Alter mit dem Alter einer/s anderen Teilnehmer:in vergleicht.
// - Definiere eine Funktion die zwei Parameter hat.
// - Benutze im Funktionskörper die Parameter um die Differenz eurer Alter zu berechnen und speichere dir das Ergebnis in der Variablen altersDifferenz ab.
// - Returne das Ergebnis und speichere das Ergebnis in einer Variablen
// - Gib die Altersdifferenz in der Konsole aus.
// - **Bitte halte dich an den Typescript-Standard.**

function compareAge(age1: number, age2: number) {
  let altersDifferenz = age1 - age2;
  return altersDifferenz;
}

let ergebnis2 = compareAge(35, 28);
console.log(ergebnis2);
