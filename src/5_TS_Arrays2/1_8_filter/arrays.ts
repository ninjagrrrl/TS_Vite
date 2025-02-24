// In dieser Übung wiederholst du die Anwendung der Methode filter().
// Nutze das Array der Zahlen von 1 bis 10 aus dem Code-Snippet
// Das Ergebnis sollen zwei Arrays sein: evenNumbers und oddNumbers
// Prüfe die Funktionalität
// Schreibe nun die selbe Logik noch einmal in der Arrow-Function-Schreibweise
// array.filter((element: string) => { //Logik})

const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// - Schreibe eine Function printEvenNumbers(), wobei die Elemente durch eine boolsche Abfrage ausgewählt werden, die uns nur die geraden Zahlen zeigt
// - Nutze beide Funktionen für den Aufruf der filter-Methode

const evenNumbers1 = zahlen.filter(printEvenNumbers);

function printEvenNumbers(zahl: number): boolean {
  return zahl % 2 === 0;
}

console.log(evenNumbers1);

// # als Arrow-function mit {} und MIT return
const evenNumbers = zahlen.filter((zahl: number) => {
  return zahl % 2 === 0;
});
console.log(evenNumbers);

// # als Arrow-function OHNE {} und OHNE return
// ! wenn man die geschweiften Klammern nutzt, braucht es ein RETURN um die Elemente herauszufiltern
//  ! alternativ kann man bei einer EINZEILIGEN function die geschweiften Klammern weglassen und auf das RETURN verzichten

const evenNumbers2 = zahlen.filter((zahl: number) => zahl % 2 === 0);
console.log(evenNumbers2);

// - Schreibe eine Function printOddNumbers(), wobei die Elemente durch eine boolsche Abfrage ausgewählt werden, die uns nur die ungeraden Zahlen zeigt
const oddNumbers = zahlen.filter(printOddNumbers);

function printOddNumbers(zahl: number): boolean {
  return zahl % 2 !== 0;
}

console.log(oddNumbers);

// # als Arrow-function OHNE {} und OHNE return
const oddNumbers2 = zahlen.filter((zahl: number) => zahl % 2 !== 0);
console.log(oddNumbers2);
