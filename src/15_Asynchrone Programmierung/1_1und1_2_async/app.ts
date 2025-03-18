// # ✅ Aufgabenstellung

// - Erstelle mit Vite ein Vanilla-Typescript Projekt
// - Erstelle eine Datei patient-waiter.ts
// - Erstelle eine Funktion waitForTwoSeconds mit diesem Inhalt

// setTimeout(() => {
//     console.log('Thank you for your patience');
//   }, 2000); // Warte für 2 Sekunden

// - Die Funktion soll asynchron aufrufbar sein, d. h. sie soll einen Promise<void> zurückgeben
// - Exportiere die Funktion
// - Erstelle eine Datei app.ts
// - Binde patient-waiter.ts ein
// - Lege eine asynchrone Funktion mit dem Namen main an
// - Schreibe in der Funktion auf die Konsole “Hi, here I am…”
// - Rufe dann waitForTwoSeconds auf ohne zu warten (ohne await)
// - Schreibe danach auf die Konsole “Hello…”
// - Schreib danach auf die Konsole “Can you hear me…”
// - Rufe main() auf
// - Schau dir in der Ausgabe an, wann was geloggt wird

import { waitForTwoSeconds } from "./patient-waiter";

// async function main() {
//   console.log("Hi, here I am...");
//   waitForTwoSeconds();

//   console.log("Hello...");
//   console.log("Can you hear me...");
// }
// main();

// # was passiert in der konsole?

// - "Hi, here I am..." wird sofort ausgegeben.
// - waitForTwoSeconds() wird asynchron gestartet, aber der Code läuft weiter.
// - "Hello..." und "Can you hear me..." erscheinen in der gleichen Reihenfolge, sehr schnell hintereinander (man sieht die Verzögerung nicht)
// - Nach 2 Sekunden wird "Thank you for your patience 💜" ausgegeben.
// * würde man await vor waitForTwoSeconds() in der main() hinzufügen, würde die Ausgabe von "Hello..." und "Can you hear me..." erst nachdem die waitForTwoSeconds()-Funktion abgeschlossen ist erscheinen

// # async-TS-Level-1_2

// # ✅ Aufgabenstellung

// - Wir bauen auf [async-TS-Level-1_1](https://www.notion.so/async-TS-Level-1_1-582a9399e4864f389855c09d91796659?pvs=21) auf
// - Jetzt soll auf die Ausführung von waitForTwoSeconds gewartet werden
// - Nutze das Schlüsselwort await an der richtigen Stelle in der Funktion main
// - Schau dir nun die Reihenfolge in der Ausgabe an

async function main() {
  console.log("Hi, here I am...");
  await waitForTwoSeconds();

  console.log("Hello...");
  console.log("Can you hear me...");
}
main();
