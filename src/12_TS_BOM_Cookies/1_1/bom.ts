// # ✅ Aufgabenstellung

// 🏁 Lernziel: Nach dieser Aufgabe kannst du setTimeout(), setInterval() und clearInterval() anwenden

// - Schreibe eine Funktion, die nach x Sekunden einen Text anzeigt. Dafür kannst du die setTimeout()-Methode nutzen.
// - Schreibe anschließend eine weitere Funktion, die genau das Ergebnis, das unten in der Vorschau angezeigt wird, ausgibt. Nutze hierfür: setInterval(), clearInterval() und if/else.
// - **Bitte halte dich an den TypeScript-Standard.**

// setTimeout(() => {
//   console.log("Hallöchen, zwei Sekunden sind um!");
// }, 2000);

function startCountdown() {
  console.log("Start: Warten für 3 Sekunden..");

  setTimeout(() => {
    console.log("Erledigt. Du hast 3 Sekunden verschwendet.");

    let counter = 8;

    const interval = setInterval(() => {
      console.log(counter);
      counter--;

      if (counter === 0) {
        clearInterval(interval);
        console.log("Endlich Feierabend!");
      }
    }, 1000);
  }, 3000);

  let initialCounter = 10;
  const initialInterval = setInterval(() => {
    console.log(initialCounter);
    initialCounter--;

    if (initialCounter === 8) {
      clearInterval(initialInterval);
    }
  }, 1000);
}

startCountdown();
