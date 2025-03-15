"use strict";

let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

const displayMessage = (message) =>
  (document.querySelector(".message").textContent = message);
const displayScore = (score) =>
  (document.querySelector(".score").textContent = score);

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    displayMessage("⛔ No number!");
  } else if (guess === secretNumber) {
    // Correct guess
    const VICTORY_BOX_WIDTH = "30rem";
    const VICTORY_COLOR = "#60b347";

    // Update UI
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = VICTORY_BOX_WIDTH;
    document.querySelector("body").style.backgroundColor = VICTORY_COLOR;

    // New high score
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    // Incorrect guess
  } else {
    // Game continues
    if (score > 1) {
      // Update UI
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      displayScore(--score);
    } else {
      // Game over
      // Alert user to game over
      displayMessage("💥 You lost!");
      displayScore("0");
    }
  }
});

// Select and attach click handler to "Again" button
document.querySelector(".again").addEventListener("click", () => {
  const DEFAULT_COLOR = "#222";
  const DEFAULT_BOX_WIDTH = "15rem";
  const UNKNOWN_NUMBER_MESSAGE = "?";

  // Restore initial values
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  // Restore initial condition of message fields
  document.querySelector(".number").textContent = UNKNOWN_NUMBER_MESSAGE;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");

  // Restore original styles
  document.querySelector("body").style.backgroundColor = DEFAULT_COLOR;
  document.querySelector(".number").style.width = DEFAULT_BOX_WIDTH;
});
