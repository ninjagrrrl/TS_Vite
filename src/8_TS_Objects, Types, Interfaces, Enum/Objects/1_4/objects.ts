// - Lernziel: auf Objekte in einem Array zugreifen.
// - Verwende den vorgegebenen Code.
// - Greife auf die Werte "Nala" und "Droopy" in diesem Array von Objekten zu und lasse sie dir auf der Konsole ausgeben.
// - Lasse dir einmal alle Hundenamen anzeigen.
// - Ändere folgende Werte:
//     - Droopy in Snoppy
//     - Dinky in Pinky
// - Erstelle ein weiteres Objekt vom Typ Pet, z. B. Hamster
// - Füge das Objekt im Array hinzu

type Pet = {
  tiertyp: string;
  namen: string[];
};

const unsereHaustiere: Pet[] = [
  {
    tiertyp: "Katze",
    namen: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    namen: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
  {
    tiertyp: "Hamster",
    namen: ["Backe", "Mausi", "Rufus"],
  },
];

// - Greife auf die Werte "Nala" und "Droopy" in diesem Array von Objekten zu und lasse sie dir auf der Konsole ausgeben.
console.log(unsereHaustiere[0].namen[1]);

console.log(unsereHaustiere[1].namen[2]);

// - Lasse dir einmal alle Hundenamen anzeigen.
console.log(unsereHaustiere[1].namen);

// - Ändere folgende Werte:
//     - Droopy in Snoppy
//     - Dinky in Pinky

unsereHaustiere[1].namen.splice(2, 1, "Snoopy");
console.log(unsereHaustiere[1]);

unsereHaustiere[0].namen.splice(2, 1, "Pinky");
console.log(unsereHaustiere[0]);
