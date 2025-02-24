// - In dieser Übung lernst du, wie man die Nummern 0-99 aufsteigend sortiert.
// - Sortiere die Zahlen aus dem Array im Code-Snippet aufsteigend.
// - Verwende den Befehl sort() und schau dir diese [Doku](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort?retiredLocale=de) genauer an, um die Aufgabe korrekt auszuführen.
// - Überprüfe das Ergebnis in der Konsole.
// - Sortiere anschließend die Zahlen aus dem Array absteigend
// - Überprüfe das Ergebnis in der Konsole.
// - **Bitte halte dich an den Typescript-Standard.**

const numArray1: number[] = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];
numArray1.sort();

// # Zahlen können mit sort() nur über eine Vergeleichsfunktion sortiert werden

console.log(numArray1.sort((a, b) => a - b));

console.log(numArray1.sort((a, b) => b - a));
