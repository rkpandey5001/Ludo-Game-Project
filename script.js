"use strict";

/*
console.log(document.querySelector(".p1"));
console.log(document.querySelector(".p2").textContent);

let age = 17;
if (age > 18) {
  document.querySelector(".p2").textContent = "Adult";
} else {
  document.querySelector(".p2").textContent = "Not Adult";
}

document.querySelector(".number").textContent = 15;
document.querySelector(".message").textContent = "Correct Number";

document.querySelector(".guess").value = 15;
console.log(document.querySelector(".guess").value);
  */

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
document.querySelector(".score").textContent = score;

function printMessage(message) {
  document.querySelector(".message").textContent = message;
}

// CHECK BUTTON
document.querySelector(".check").addEventListener("click", function () {
  //* assigning a input value to a value variable
  const value = Number(document.querySelector(".guess").value);

  if (value === 0) {
    printMessage("No Number 💥");
  } else if (value === secretNumber) {
    printMessage("Correct Number 🏆");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (value !== secretNumber) {
    if (score > 1) {
      console.log(score);
      printMessage(value > secretNumber ? "Too High! ☝️" : "Too Low! 👇");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      printMessage("Lost the Game! 🏴‍☠️");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// RESTART BUTTON
document.querySelector(".restart").addEventListener("click", () => {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = secretNumber;
  printMessage("Start Guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#111";
  document.querySelector(".number").textContent = "?";
});

// MODAL

// document.querySelector(".modal");
// document.querySelector(".close-modal");
// document.querySelector(".show-modal");

// ABOUT Button
document.querySelector(".about").addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("hidden");
  document.querySelector(".background").classList.remove("hidden");
});

const addHidden = () => {
  document.querySelector(".modal").classList.add("hidden");
  document.querySelector(".background").classList.add("hidden");
};

// CLOSE Button
document.querySelector(".close-modal").addEventListener("click", addHidden);

// White background
document.querySelector(".background").addEventListener("click", addHidden);
