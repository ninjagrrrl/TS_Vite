// Array-TS-Level-1_6 (shift)
// - Lernziel: Array-Methode shift() Verstehen und Anwenden.
// - Die Array-Methode **shift()** ist pop() sehr ähnlich. Denn shift() entfernt auch einen Wert aus einem Array, dieses Mal allerdings den ersten Wert. Hierbei wird der erste Wert entfernt und die anderen Werte rücken mit ihrem Index einen nach vorne.
// - Entferne aus deinem favoritePeople Array den ersten Wert und lasse dir diesen in der Konsole ausgeben.
// - Auch hier kannst du fürs bessere Verständnis das Array vorher und nachher in der Konsole ausgeben.

// - Um mit dem entfernten Wert weiterarbeiten zu können, solltest du dir shift() in einer Variable zwischenspeichern, da der Rückgabewert von shift() sonst verloren geht.
// - Beispiel: let firstPerson: string = array.shift();

const favoritePeople: string[] = ["Lizz", "Kritz", "Axl"];

//// Entferntes Element in firstPerson speichern
const firstPerson = favoritePeople.shift();
console.log(favoritePeople);
console.log("Entferntes Element:", firstPerson);
