// In dieser Übung geht es darum, Arrays alphabetisch zu sortieren.
// Deklariere die Funktion sortAlphabetically.
// Sortiere die Programmiersprachen alphabetisch.
// Der Code für das Array steht im Code-Snippet.
// Rufe die Funktion sortAlphabetically auf.
// Überprüfe den Erfolg in der Konsole.

// Lege selbst ein weiteres Array europeanCountries mit einigen Ländern an, z. B.
// France, Germany, Sweden, Great Britain, Czech Republic, Switzerland
// Rufe die Funktion sortAlphabetically mit den europeanCountries auf
// Überprüfe den Erfolg in der Konsole.

// Bitte halte dich an den Typescript-Standard.

const languages: string[] = [
  "JavaScript",
  "Python",
  "Java",
  "Ruby",
  "PHP",
  "C++",
  "CSS",
  "C#",
  "Go",
  "C",
  "TypeScript",
  "Swift",
];

const europeanCountries: string[] = [
  "France",
  "Germany",
  "Sweden",
  "Great Britain",
  "Czech Republic",
  "Switzerland",
];

//#  Funktion deklarieren
function sortAlphabetically(sortedList: string[]) {
  //# Um das sortierte Array außerhalb der Funktion verwenden zu können (z.B. für die Konsolenausgabe), muss es returned werden
  return sortedList.sort();
}

// # Funktion sortAlphabetically aufrufen und Ergebnisse in Variable sorted.Languages speichern
const sortedLanguages = sortAlphabetically(languages);
console.log(sortedLanguages);

// # Funktion sortAlphabetically aufrufen und Ergebnisse in Variable sorted.Countries speichern
const sortedCountries = sortAlphabetically(europeanCountries);
console.log(sortedCountries);
