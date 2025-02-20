// - Lernziel: Verständnis und Anwendung von TypeScript-Functions, Parametern und Zeichenverkettung zu verbessern.
// - Schreibe eine Function, die dich vorstellt und einen Text über dich ausgibt. Verwende folgende Parameter:
// vorname,  nachname,  geburtsort,  alter und  wohnort
// - Überlege dir einen guten sprechenden Namen
// - In der Konsole soll Folgendes ausgegeben werden:
// Mein Name ist Aurora Stardust.  Ich bin in New York geboren.  Ich lerne bei SuperCode.  Ich bin 20 Jahre alt.  Ich wohne in Celestia.
// - Nutze String Concatenation: "string text " + Parameter + " string text"
// - Vergiss nicht, die Function mit deinen Daten/Argumenten aufzurufen.
// - **Bitte halte dich an den Typescript-Standard.**

function dasBinIch(
  vorname: string,
  nachname: string,
  geburtsort: string,
  alter: number,
  wohnort: string
) {
  console.log(
    `Mein Name ist ${vorname} ${nachname}. Ich bin in ${geburtsort} geboren. Ich lerne bei SuperCode. Ich bin ${alter} Jahr alt. Ich wohne in ${wohnort}.`
  );
}

dasBinIch("Jule", "Freiseis", "Berlin", 34, "Leipzig");
