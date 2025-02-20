// - Deklariere die Funktion showHero(): void mit drei Parametern heroName, heroPower und heroEnemy. Im Funktionskörper {} sollst du dann Folgendes machen
// - Deklariere drei Variablen nameOutput, powerOutput und enemyOutput.
// - Weise den Variablen dann diese Werte zu   a. Mein:e Lieblingsheld:in ist: xyz   b. Er/sie hat die Fähigkeit: xyz   Sein/ihr größte/r Gegner:in ist: xyz.
function showHero(heroName: string, heroPower: string, heroEnemy: string) {
  const nameOutput = `Mein Lieblingsheld ist: ${heroName}. `;
  const powerOutput = `Er hat die Fähigkeit: ${heroPower} `;
  const enemyOutput = `Sein größter Gegner ist: ${heroEnemy}.`;
  // - Gib nameOutput + powerOutput + enemyOutput in der Konsole aus.
  console.log(nameOutput + powerOutput + enemyOutput);
}

// - Ruf deine Funktion auf.
// - Übergib Argumente für deine:n Lieblingsheld:in und gib diese in der Konsole aus.
// - **Bitte halte dich an den Typescript-Standard.**
showHero(
  "Iron Man",
  "Seine Rüstung ist mit modernster Technik ausgestattet, wie z.B. Laserstrahlen.",
  "Mandarin"
);
