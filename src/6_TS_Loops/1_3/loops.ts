// - Lernziel: while-Schleife verstehen und anwenden.
// - Schreibe eine while-Schleife, die "Hallo World + Nummer" 10 mal anzeigt.
// - Lege dazu eine Variable counter mit dem Wert 0 an.
// - Als Bedingung nutze in der Schleife "counter < 10".
// - Gib den String "Hallo World + counter" in der Konsole aus.
// - Erhöhe counter um eins.

let counter = 0;
// # damit es kein infinity-loop wird, muss die variable mit let deklariert werden, weil sie sonst nicht veränderbar ist

while (counter <= 10) {
  console.log("Hello World " + counter);
  counter++;
  //   # damit es kein infinity-loop wird, muss counter innerhalb der Schleife inkrementiert werde: counter++
}
