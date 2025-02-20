// # Array-TS-Level-1_5 (pop)

// - Lernziel: Array-Methode pop() Verstehen und Anwenden.
// - Wer hinzufügt, der muss es auch wieder entfernen können. Dafür wird die Array-Methode **pop()** genutzt. Bei pop() wird der letzte Wert von einem Array entfernt und der entfernte Wert wird zurückgegeben.
// - Nutze wieder einmal die Arrays aus der vorherigen Übung. Entferne jeweils einen Wert aus deinen Arrays und lasse dir den entfernten Wert in der Konsole ausgeben.
// - Zur besseren Darstellung kannst du dir das Array vor dem pop() ausgeben lassen, dann den entfernten Wert und dann das Array nochmal. Schau dir die Ergebnisvorschau an.

const bigCities: string[] = ["London", "Paris", "New York"];

bigCities.push("Berlin", "Shanghai");
console.log(bigCities);

//// Elemente entfernen
bigCities.pop();
console.log(bigCities);

bigCities.pop();
console.log(bigCities);

bigCities.pop();
console.log(bigCities);

const removedCity = bigCities.pop();
console.log(bigCities);
console.log("Entferntes Element:", removedCity);

const removedCity2 = bigCities.pop();
console.log(bigCities);
console.log("Entferntes Elemente:", removedCity2);
