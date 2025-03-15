"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number!";
  } else if (guess === secretNumber) {
    // Correct guess
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    // Guess too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      // Miss
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // Game over
      document.querySelector(".message").textContent = "💥 You lost!";
      document.querySelector(".score").textContent = 0;
    }
    // Guess too low
  } else {
    // Miss
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // Game over
      document.querySelector(".message").textContent = "💥 You lost!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Select and attach click handler to "Again" button
document.querySelector(".again").addEventListener("click", function () {
  // Restore initial values
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  // Restore initial condition of message fields
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = null;
  document.querySelector(".message").textContent = "Start guessing...";
  // Restore original styles
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
