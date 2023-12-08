function visHangman() {
  let startSide = document.getElementById("startSide");
  let main = document.getElementById("main");

  // Fjern knappen
  startSide.style.display = "none";

  // Vis skjulte elementer
  main.style.display = "block";
  main.classList.remove("hidden");
}

let programming_languages = [
  "python",
  "javascript",
  "mongodb",
  "json",
  "java",
  "html",
  "css",
  "c",
  "csharp",
  "golang",
  "kotlin",
  "php",
  "sql",
  "ruby",
];

let answer = "";
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
  answer =
    programming_languages[
      Math.floor(Math.random() * programming_languages.length)
    ];
}

function generateButtons() {
  let buttonsHTML = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map(
      (letter) =>
        `
        <button
          class="btn btn-lg btn-primary m-2"
          id='` +
        letter +
        `'
          onClick="handleGuess('` +
        letter +
        `')"
        >
          ` +
        letter +
        `
        </button>
      `
    )
    .join("");

  document.getElementById("keyboard").innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute("disabled", true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    //Hvis bokstaven ikke finnes i answer, vil indexOf returnere -1
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();
    updateHangmanPicture();
  }
}

function updateHangmanPicture() {
  document.getElementById("hangmanPic").src = "./Bilder/" + mistakes + ".jpg";
}

function checkIfGameWon() {
  if (wordStatus == answer) {
    document.getElementById("keyboard").innerHTML = "Du vant!";
  }
}
function checkIfGameLost() {
  if (mistakes == maxWrong) {
    document.getElementById("wordSpotlight").innerHTML =
      "Det riktige ordet var " + answer;
    document.getElementById("keyboard").innerHTML = "Du tapte!";
  }
}

function guessedWord() {
  wordStatus = answer
    .split("")
    .map((letter) => (guessed.indexOf(letter) >= 0 ? letter : " _ "))
    .join("");

  document.getElementById("wordSpotlight").innerHTML = wordStatus;
}

function updateMistakes() {
  document.getElementById("mistakes").innerHTML = mistakes;
}

document.getElementById("maxWrong").innerHTML = maxWrong;

function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById("hangmanPic").src = "./Bilder/0.jpg";

  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
}

randomWord();
generateButtons();
guessedWord();
