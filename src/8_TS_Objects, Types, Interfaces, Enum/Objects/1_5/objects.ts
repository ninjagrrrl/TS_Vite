// - Lernziel: auf Objekt-Inhalte zugreifen.
// - Verwende den vorgegebenen Code: den Typ Lager und ein Objekt vom Typ Lager
// - Greife auf die Eigenschaften des Objekts zu und gib folgende Werte in der Konsole aus:
//     - Geheimnisse
//     - Cola
//     - Hefter

type Lager = {
  schreibtisch: {
    schublade: string;
  };
  schrank: {
    "Obere Schublade": {
      Ordner1: string;
      Ordner2: string;
    };
    "Untere Schublade": string;
  };
};

const unserLager: Lager = {
  schreibtisch: {
    schublade: "Hefter",
  },
  schrank: {
    "Obere Schublade": {
      Ordner1: "Dokumente",
      Ordner2: "Geheimnisse",
    },
    "Untere Schublade": "Cola",
  },
};

// # Da const unserLager ein einzelnes Objekt und nicht ein Array von Objekten ist, kann man direkt mit der Punktnotation .schrank auf die Eigenschaften zugreifen ohne vorher über eine Indexierung [i] das gewünschte Objekt auswählen zu müssen

console.log(unserLager.schrank["Obere Schublade"].Ordner2);

console.log(unserLager.schrank["Untere Schublade"]);

console.log(unserLager.schreibtisch.schublade);
