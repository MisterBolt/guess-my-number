"use strict";

let secretNumber = drawSecretNumber();
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("Enter correct number!");
  } else if (guess === secretNumber) {
    displayMessage("Great! You found the correct number!");
    displayNumber(secretNumber);
    changeNumberWidth("30rem");
    changeBackgroundColor("#60b347");

    if (score > highscore) {
      highscore = score;

      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;

      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
    } else {
      score = 0;

      displayMessage("You lost the game!");
    }

    displayScore();
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = drawSecretNumber();
  score = 20;

  displayMessage("Start guessing...");
  displayScore();
  displayNumber("?");
  changeNumberWidth("15rem");
  changeBackgroundColor("#222");
  document.querySelector(".guess").value = "";
});

function drawSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

function displayScore() {
  document.querySelector(".score").textContent = score;
}

function displayNumber(number) {
  document.querySelector(".number").textContent = number;
}

function changeBackgroundColor(color) {
  document.querySelector("body").style.backgroundColor = color;
}

function changeNumberWidth(width) {
  document.querySelector(".number").style.width = width;
}
