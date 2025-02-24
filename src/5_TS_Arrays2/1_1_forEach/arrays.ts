const aufgabeDiv2 = document.createElement("div");
aufgabeDiv2.innerHTML = `<p> In dieser Übung wirst du [forEach()](https://www.w3schools.com/jsref/jsref%5Fforeach.asp) kennenlernen. Die Methode wird dir noch häufig begegnen.
- Schreibe eine Funktion myDrinks(), die jedes Element eines Arrays in deiner Konsole ausgibt und überlege wie du die Elemente in deine index.html schreibst.
- Verwende die Liste aus dem Code-Snippet und sortiere das Array getraenke vorher alphabetisch.
- **Bitte halte dich an den Typescript-Standard.**</p>`;
document.body.appendChild(aufgabeDiv2);

const outputDiv = document.querySelector<HTMLDivElement>("div");

const getraenke: string[] = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];

function myDrinks() {
  const sortedDrinks = getraenke.sort();
  console.log(sortedDrinks);

  let outputString = "";
  sortedDrinks.forEach((drink) => {
    console.log(drink);
    outputString += `<p>${drink}</p>`;
  });

  // # null-prüfung: prüft, ob outputDiv existiert (es war rot unterkringelt mit Fehlermeldung, dass der Wert null sein könnte), bevor die Zuweisung durchgeführt wird Empfohlene Methode, um mit potenziell null oder undefined Werten umzugehen
  if (outputDiv) {
    outputDiv.innerHTML = outputString;
  }
}

myDrinks();

// # interessant: da der ganze html-string dem innerHTML-Elements eines DOM-Elements zugewiesen wird, interpretiert der Browser ihn als HTML-Struktur und rendert ihn entsprechend als eine ungeordnete Liste mit Listenpunkten, anstatt den rohen Text anzuzeigen
// function myDrinks2() {
//   const sortedDrinks = getraenke.sort();
//   console.log(sortedDrinks);

//   let html = "<ul>";
//   sortedDrinks.forEach((drink) => {
//     html += `<li>${drink}</li>`;
//   });

//   html += "</ul>";
//   outputDiv.innerHTML = html;
// }

// myDrinks2();
