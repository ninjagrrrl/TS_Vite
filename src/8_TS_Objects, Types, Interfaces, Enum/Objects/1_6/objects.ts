// - In dieser Übung lernen wir, wie man auf die Objekte zugreift.
// - Der Code ist vorgegeben.
// - Greife auf folgende Werte dieses Objekts zu und lasse sie dir auf der Konsole ausgeben:
// - "The Beatles"
// - aus dem Objekt Pink Floyd: "Download"
// - aus dem Objekt Pink Floyd: true
// - die Releasejahre: 1971 und 1983
// - Von Metallica: "MC"
// - aus dem Objekt  Metallica das Wort: "Ride"
// - Lege ein neues Objekt vom Typ Musik an und füge es zum Array hinzu.

type Musik = {
  kunstler: string;
  title: string;
  release_jahr: number;
  formate: string[];
  gold: boolean;
};

const meineTopVier: Musik[] = [
  {
    kunstler: "The Beatles",
    title: "Abbey Road",
    release_jahr: 1969,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
  {
    kunstler: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_jahr: 1978,
    formate: ["CS", "CD", "LP", "Download"],
    gold: true,
  },
  {
    kunstler: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_jahr: 1971,
    formate: ["CS", "LP", "Download"],
    gold: true,
  },
  {
    kunstler: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_jahr: 1983,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
];

// # weil ich nur ein Objekt deklariere werden keine [] Klammern benötigt
const meinPunkFavorite: Musik = {
  kunstler: "Wire",
  title: "Pink Flag",
  release_jahr: 1977,
  formate: ["LP", "CD", "MC", "Download"],
  gold: false,
};

meineTopVier.push(meinPunkFavorite);
console.log(meineTopVier);

console.log(meineTopVier[0].kunstler);

console.log(meineTopVier[1].formate[3]);

console.log(meineTopVier[1].gold);

console.log(meineTopVier[2].release_jahr);

console.log(meineTopVier[3].release_jahr);

console.log(meineTopVier[3].formate[2]);

console.log(meineTopVier[3].title.split(" ")[4]);
