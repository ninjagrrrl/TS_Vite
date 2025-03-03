// - Lernziel: die dynamische Erstellung von HTML-Elementen und ihre Integration in das DOM mithilfe der createElement-Methode.
// - **Bitte halte dich an den Typescript-Standard.**
// - Erstelle eine einfache Website auf der dynamisch eine Einkaufsliste erzeugt werden soll.
// - Beim Klicken auf den Button sollte der eingegebene Text aus dem Input-Feld der Liste hinzugefügt werden.
// - Das Input-Feld soll nach jedem Hinzufügen geleert werden.
// - Das HTML ist vorgegeben (siehe Code-Snippet).
// - Du kannst folgendes nutzen:
//     - createElement
//     - appendChild
//     - getElementById
//     - textContent
//     - EventListener

// # ✨ Bonus

// - Leider kann man auch leere Eingaben der Liste hinzufügen.
// - Passe deinen Code so an, dass vorher geprüft wird, ob die Eingabe gültig ist und somit leere Eingaben auch nicht hinzugefügt werden können.
// - Schneide vorne und hinten Leerzeichen beim eingegebenen Text ab
// - Du kannst folgendes nutzen:
//     - Conditionals
//     - string-Methods

// ! TS und HTML verheiraten
const userInputText = document.getElementById("inputText");
const addToListBtn = document.getElementById("addBtn");
const outputList = document.getElementById("myList");

// ! EventListener für Btn
addToListBtn?.addEventListener("click", addItemToList);

function addItemToList() {
  if (userInputText instanceof HTMLInputElement) {
    const inputValue = userInputText.value;

    if (inputValue !== "") {
      const newItem = document.createElement("li");

      newItem.textContent = inputValue;
      outputList?.appendChild(newItem);
      //   # Textfeld wieder leeren, weil value = leerer String
      userInputText.value = "";
    }
  }
}
