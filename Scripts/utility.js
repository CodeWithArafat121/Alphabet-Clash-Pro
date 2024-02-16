function addClassById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function removeClassById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-[#FFA500]");
}
function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-[#FFA500]");
}

function getElementValueById(elementId) {
  const elementCurrentScoreElement = document.getElementById(elementId);
  const elementCurrentScoreText = elementCurrentScoreElement.innerText;
  const elementCurrentScore = parseInt(elementCurrentScoreText);
  const elementNewScore = elementCurrentScore + 1;
  elementCurrentScoreElement.innerText = elementNewScore;
  const result = elementCurrentScoreElement.innerText;
}

function getLifeValueById(elementId) {
  const elementLife = document.getElementById(elementId);
  const elementLifeText = elementLife.innerText;
  const elementLifeNumber = parseInt(elementLifeText);
  const elementNewLife = elementLifeNumber - 1;
  elementLife.innerText = elementNewLife;
  const result = elementLife.innerText;

  if (result <= 0) {
    addClassById("Play-ground");
    removeClassById("Score");
    const currentScore = document.getElementById("current-Score");
    const currentScoreText = currentScore.innerText;
    const ScoreResult = document.getElementById("Score-result");
    const ScoreResultText = (ScoreResult.innerText = currentScoreText);
  }
}

function getPlayAgainLifeValueById (elementId) {
  const elementLife = document.getElementById(elementId)
  const elementLifeText = elementLife.innerText
  const elementLifeNumber = parseInt(elementLifeText)
  elementLife.innerText = 5
}

function getPlayAgainScoreValueById (elementId) {
  const elementCurrentScoreElement = document.getElementById(elementId)
  const elementCurrentScoreText = elementCurrentScoreElement.innerText
  const elementCurrentScore = parseInt(elementCurrentScoreText)
  elementCurrentScoreElement.innerText = 0
  const result = elementCurrentScoreElement.innerText
}

function randomAlphabetGenerator() {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const alphabet = alphabets.split("");
  const randomNumber = Math.random() * alphabet.length;
  const index = Math.round(randomNumber);
  // const index = parseInt(randomNumber)
  const result = alphabet[index];
  return result;
}

// const currentScoreElement = document.getElementById("current-Score");
//     const currentScoreText = currentScoreElement.innerText;
//     const currentScore = parseInt(currentScoreText);
//     const newScore = currentScore + 1;
//     currentScoreElement.innerText = newScore;

// const life = document.getElementById("Life");
// const lifeText = life.innerText;
// const lifeNumber = parseInt(lifeText);
// const newLife = lifeNumber - 1;
// const result = (life.innerText = newLife);

// console.log(result);
// continueGame();
// removeBackgroundColorById(acceptedKey);
// if (result <= 0) {
//   addClassById("Play-ground");
//   removeClassById("Score");
//   const currentScore = document.getElementById("current-Score");
//   const currentScoreText = currentScore.innerText;
//   const ScoreResult = document.getElementById("Score-result");
//   const ScoreResultText = (ScoreResult.innerText = currentScoreText);
// }

  // const life = document.getElementById("Life");
  // const lifeText = life.innerText;
  // const lifeNumber = parseInt(lifeText);
  // const result = (life.innerText = 5);


   // const currentScoreElement = document.getElementById("current-Score");
  // const currentScoreText = currentScoreElement.innerText;
  // const currentScore = parseInt(currentScoreText);
  // const newScore = currentScore;
  // const result1 = (currentScoreElement.innerText = 0);