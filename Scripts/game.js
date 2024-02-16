document.getElementById("home-play-btn").addEventListener("click", function () {
  addClassById("Home");
  removeClassById("Play-ground");
  continueGame();
});

function continueGame() {
  const alphabet = randomAlphabetGenerator();
  const alphabetShower = document.getElementById("Alphabet-Shower");
  alphabetShower.innerText = alphabet;
  setBackgroundColorById(alphabet);
}

document.addEventListener("keyup", detectedKeyboardKeyupEvent);

function detectedKeyboardKeyupEvent(event) {
  const playerPassed = event.key;
  const alphabetShower = document.getElementById("Alphabet-Shower");
  const acceptedKey = alphabetShower.innerText.toLowerCase();
  if (playerPassed === acceptedKey) {
    getElementValueById("current-Score");
    removeBackgroundColorById(acceptedKey);
    continueGame();
  } else {
    getLifeValueById("Life");
    continueGame();
    removeBackgroundColorById(acceptedKey);
  }
}

document.getElementById("Play-again").addEventListener("click", function () {
  addClassById("Score");
  removeClassById("Play-ground");
  getPlayAgainLifeValueById("Life")
  getPlayAgainScoreValueById("current-Score")
});


