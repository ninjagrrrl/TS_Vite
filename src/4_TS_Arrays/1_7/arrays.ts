// - Die Array-Methode **unshift()** ist push() sehr ähnlich. Denn unshift() fügt auch einen Wert zu einem Array hinzu, dieses mal allerdings an erster Stelle. Es ist möglich einen oder mehrere Werte mit unshift() am Anfang eines Arrays einzufügen. Die anderen Werte werden mit ihrem Index um Anzahl der neu hinzugefügten Werte erhöht.

// - Verwende unshift(), um mindestens 2 neue Werte zum Array der Städte hinzuzufügen.
// - Verwende console.log(), um den Inhalt und die Länge deines Arrays vor und nach dem Hinzufügen neuer Werte anzuzeigen. Beobachte die Veränderungen in der Konsole.

const bigCities: string[] = ["Longon", "Paris", "New York"];

bigCities.push("Berlin", "Shanghai");
console.log(bigCities);

const lengthAfterUnshift = bigCities.unshift("Peking", "Istanbul", "Athen");
console.log(bigCities);
console.log("Länge nach unshift():", lengthAfterUnshift);
