// # ✅ Aufgabenstellung

// Lernziel: Anwendung von async-await

// - Erstelle eine TypeScript-Datei mit dem Namen tv-series.ts.
// - Definiere eine Funktion watchSeries, die folgende Parameter akzeptiert:
//     - seriesName: Der Name der Serie als Zeichenfolge.
//     - numberOfEpisodes: Die Anzahl der Episoden der Serie als Ganzzahl.
//     - avgRuntime: Die durchschnittliche Laufzeit jeder Episode in Minuten als Ganzzahl.
// - Die Funktion watchSeries soll ein Promise vom Typ number zurückgeben.
// - Innerhalb der Funktion soll die gesamte Zeit berechnet werden, die benötigt wird, um alle Episoden der Serie anzusehen.
// - Die Zeit sollte auf der Grundlage der Anzahl der Episoden und der durchschnittlichen Laufzeit berechnet werden.
// - Implementiere eine Funktion suggestSeries, die eine zufällige Serie aus einer vordefinierten Liste von Serien als Promise vom Typ string zurückgibt.
// - Die Liste sollte mindestens 5 verschiedene Serien mit numberOfEpisodes und avgRuntime  enthalten.
// - Rufe die Funktion suggestSeries auf und warte auf eine zufällige Serie.
// - Rufe die Funktion watchSeries für die vorgeschlagene Serie auf und warte auf ihre Fertigstellung.
// - Gib die Gesamtzeit, die benötigt wird, um alle Episoden der Serie anzusehen, auf der Konsole aus.

const seriesList = [
  { seriesName: "Friends", numberOfEpisodes: 236, avgRuntime: 22 },
  { seriesName: "Seinfeld", numberOfEpisodes: 180, avgRuntime: 22 },
  { seriesName: "Game of Thrones", numberOfEpisodes: 73, avgRuntime: 60 },
  { seriesName: "Breaking Bad", numberOfEpisodes: 62, avgRuntime: 47 },
  { seriesName: "The O.C.", numberOfEpisodes: 92, avgRuntime: 44 },
];

function watchSeries(
  seriesName: string,
  numberOfEpisodes: number,
  avgRuntime: number
) {
  return new Promise((resolve) => {
    const totalTime = numberOfEpisodes * avgRuntime;
    resolve(totalTime);
  });
  function suggestSeries(): string {
    const randomIndex = Math.floor(Math.random() * seriesList.length);
    const randomSeries = seriesList[randomIndex];
    return randomSeries.seriesName;
  }
}

suggestSeries();
