// - Lernziel: Zugriff auf Array-Werte erlernen und anwenden.
// - Jetzt, da du weißt, wie man ein Array definiert, kannst du versuchen, auf einzelne Werte zuzugreifen.
// - Denke daran, dass [Arrays 0-indiziert](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Array?retiredLocale=de#array%5Findices) sind, d.h. sie fangen bei 0 an zu zählen.
// - Um auf ein einzelnes Element zuzugreifen, verwende den Namen des Arrays gefolgt von eckigen Klammern und dem Index.
// - Zum Beispiel: bucketList[1] gibt den Wert an der Position 1 im Array bucketList zurück.
// - Lasse dir aus deinen vorhin erstellten Arrays bucketList, luckyNumbers, favoritePeople die einzelnen Werte in der Konsole ausgeben.

const bucketList: string[] = ["Japan", "Marokko", "Griechenland"];

const luckyNumbers: number[] = [666, 3, 9];

const favoritePeople: string[] = ["Lizz", "Kritz", "Axl"];

//// Einzelne Werte aus Arrays in der Konsole ausgeben lassen
console.log(bucketList[1]);
console.log(bucketList[2]);
console.log(bucketList[0]);

console.log(luckyNumbers[0]);
console.log(luckyNumbers[1]);
console.log(luckyNumbers[2]);

console.log(favoritePeople[0]);
console.log(favoritePeople[1]);
console.log(favoritePeople[2]);
