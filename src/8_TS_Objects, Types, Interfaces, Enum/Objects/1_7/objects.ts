// - Lernziel: Zugriff auf Objekte mit Hilfe von [forEach()](https://www.w3schools.com/jsref/jsref%5Fforeach.asp).
// - **Bitte halte dich an den Typescript-Standard.**
// - Verwende den vorgegebenen Code.
// - Gib folgende Werte mit forEach() pro Objekt folgende Werte im HTML aus:
//     - kunstler
//     - title
//     - formate

type Music = {
  artist: string;
  title: string;
  release_year: number;
  medium: string[];
  gold: boolean;
};

const myTopFour: Music[] = [
  {
    artist: "The Beatles",
    title: "Abbey Road",
    release_year: 1969,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
  {
    artist: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_year: 1978,
    medium: ["CS", "CD", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_year: 1971,
    medium: ["CS", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_year: 1983,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
];

// # 1. div-Element mit document.querySelector auswählen und in outputDiv-Variable speichern
const outputDiv = document.querySelector("div");

myTopFour.forEach((music: Music) => {
  console.log(music.artist);

  if (outputDiv) {
    outputDiv.innerHTML += `
    <p>Artist: ${music.artist}</p>
    <p>Title: ${music.title}</p>
    <p>Medium: ${music.medium.join(", ")}</p>`;
  }
});

// # Reminder: der += Operator fügt Inhalt zum bestehenden Inhalt hinzu
// # Reminder: join() führt das String-Array medium[] zu einem String zusammen
