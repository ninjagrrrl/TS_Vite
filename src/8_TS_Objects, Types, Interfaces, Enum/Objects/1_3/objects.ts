// - Im vorgegebenen Code findest du einen type Apple, drei Objekte vom Typ Apple und ein Array mit allen Äpfeln
// - Nutze eine for-Schleife, die das Array von Äpfeln durchgeht und nur die Größen aller Äpfeln in der Konsole ausgibt.
// - Nutze forEach, um die Farbe jedes Apfels auf der Konsole auszugeben
// - Verwende den Befehl length, um die Anzahl der Äpfel auszugeben
// - Erstelle selbst ein Objekt pinkApple vom Typ Apple und pushe es in das apples-Array
// - Füge eine neue Eigenschaft isSweet vom Typ boolean zum Typ Apple hinzu
// - Schau dir die Fehlermeldungen an und füge bei jedem Apple-Objekt die Eigenschaft isSweet hinzu

type Apple = {
  color: string;
  size: string;
  isSweet: boolean;
};

const redApple: Apple = { color: "red", size: "big", isSweet: true };
const greenApple: Apple = { color: "green", size: "small", isSweet: false };
const yellowApple: Apple = { color: "yellow", size: "big", isSweet: false };
const pinkApple: Apple = { color: "pink", size: "small", isSweet: true };

const apples: Apple[] = [redApple, greenApple, yellowApple];

// # wenn ich über ein Array iteriere, muss der index immer < als die array.length NIE <=, weil das erste Element eines Arrays den Index 0 hat. Deshalb ist der letztgültige Index immer um 1 kleiner als array.length
for (let i = 0; i < apples.length; i++) {
  // # um auf "size" Eigenschaft JEDES apple-objekts zuzugreifen nimmt man [i] anstatt eines spezifischen index wie [0]
  console.log(apples[i].size);
}

apples.forEach((apple: Apple) => {
  console.log(apple.color);
});

console.log("Anzahl der Äpfel:", apples.length);

apples.push(pinkApple);
console.log(apples);

// ! in folgendem Beispiel klappt >= weil es nicht um die Indexierung eines bestimmten Arrays geht, sondern um das Erstellen von Zahlen von 1 bis 20
const numbersToTwenty = [];

for (let i = 1; i <= 20; i++) {
  numbersToTwenty.push(i);
}

console.log(numbersToTwenty);
