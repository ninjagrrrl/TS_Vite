// - Lernziel: TypeScript-Methode [map()](https://www.w3schools.com/jsref/jsref_map.asp) verstehen und anwenden.
// - **Bitte halte dich an den Typescript-Standard.**
// - Verwende folgendes Array

// const drinks = ['Coca-Cola', 'Apfelsaft', 'Pepsi', 'Traubensaft', 'Sprite', 'Orangensaft', 'Red Bull Energy Drink', 'Fanta']

// # Die map()-Funktion ist eine Methode zur Transformation von Arrays. Sie erstellt ein neues Array, indem sie eine bereitgestellte Funktion auf jedes Element des ursprünglichen Arrays anwendet

// - Hauptmerkmale von map() in TS:
//! 1. Transformation: Jedes Element wird durch die Anwendung einer Funktion in ein neues Element umgewandelt.
//! 2. Neues Array: Das Ergebnis ist ein neues Array, ohne das ursprüngliche zu verändern
//! 3. Typsicherheit: In TypeScript können Typen für die Parameter in der map()-Callback-Funktion spezifiziert werden, was die Typsicherheit erhöht

const drinks = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];

// - Nutze die map()-Methode, um in einer neuen Variable upperDrinks alle Getränke in Großbuchstaben zu speichern.
// - Gib upperDrinks in der Konsole aus.

const upperDrinks = drinks.map((drinks) => drinks.toUpperCase());
console.log(upperDrinks);

// - Nutze die Map-Methode um für jedes Element auf der Konsole folgendes auszugeben:
// - ‘I like [drink]’

const likeUpperDrinks = drinks.map((upperDrinks) => "I like " + upperDrinks);
console.log(likeUpperDrinks);
