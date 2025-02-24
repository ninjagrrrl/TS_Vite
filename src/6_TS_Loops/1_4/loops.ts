// - Deklariere ein Array "friendNames" mit den Werten: "Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim" und "Sergio"
// - Dann verwende eine for-Schleife, um alle Namen in der Konsole anzuzeigen
// - Verwende anschließend eine for … of - Schleife um alle Namen in der Konsole anzuzeigen

const friendNames: string[] = [
  "Georg",
  "Anass",
  "Elaine",
  "Hakan",
  "Eric",
  "Kim",
  "Sergio",
];

for (let i = 0; i <= 6; i++) {
  console.log(friendNames[i]);
  //   hier muss friendNames mit [i] geloggt werden, damit jeder Name in der Konsole augezeigt wird
}

for (const singleName of friendNames) {
  console.log(singleName);
}

// # REMINDER: ich habe die for...of Schleife zuerst IN die for Schleife verschachtelt. Die Konsole hate mir dann 6 * die friendNames durchlaufen, weil die äußere Schleife sich 6 mal wiederholt und für jeden Durchlauf dieser äußeren Schleife wird die innere for...of Schleife komplett durchlaufen, die jeden Namen im friendNames Array ausgibt.
