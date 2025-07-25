'use strict';

// Define variable
const diceEl = document.querySelector('.dice');
const newGameBtnEl = document.querySelector('.btn--new');
const rollDiceBtnEl = document.querySelector('.btn--roll');
const holdBtnEl = document.querySelector('.btn--hold');

const players = [
  document.querySelector('.player--0'),
  document.querySelector('.player--1'),
];

const currScoresArray = [
  document.querySelector('#current--0'),
  document.querySelector('#current--1'),
];

const displayTotals = [
  document.querySelector('#score--0'),
  document.querySelector('#score--1'),
];

const winningScore = 100;
const totalScores = [0, 0];
let currScore = 0;
let activePlayer = 0;
let gameOver = false;

// Rolls the dice
rollDiceBtnEl.addEventListener('click', () => {
  if (gameOver === false) {
    // Generates random number between 1 and 6
    const randNum = Math.trunc(Math.random() * 6 + 1);

    // Updates the <img> to show the dice face matching the rolled number
    diceEl.src = `dice-${randNum}.png`;

    // Prevents the broken image icon when the browser has nothing to display
    if (diceEl.classList.contains('hidden')) {
      diceEl.classList.remove('hidden');
    }

    // Checks if player rolled a number aside from 1
    if (randNum !== 1) {
      currScore += randNum;

      currScoresArray[activePlayer].textContent = currScore;
    } else {
      switchPlayers();
    }
  }
});

// Handles what happens when a player clicks hold button
holdBtnEl.addEventListener('click', () => {
  // Prevent further actions on hold click
  if (gameOver) return;

  // add current score to active player's total
  totalScores[activePlayer] += currScore;

  // Update the player's total score display value
  displayTotals[activePlayer].textContent = totalScores[activePlayer];

  // Reset current score to 0
  resetCurrScore();

  // Check if active player has score of 100 or more
  if (totalScores[activePlayer] >= winningScore) {
    players[activePlayer].classList.add('player--winner');

    gameOver = true;

    diceEl.classList.add('hidden');
  } else {
    // Switch players
    switchPlayers();
  }
});

// Handles what happens when a 1 is rolled
function switchPlayers() {
  resetCurrScore();

  // Changes the active player
  activePlayer = activePlayer === 0 ? 1 : 0;

  // Adds or removes the specified class, depending on whether it's already present
  players.forEach((player, i) => {
    player.classList.toggle('player--active', i === activePlayer);
  });
}

// Handles functionality of new game button
newGameBtnEl.addEventListener('click', resetGame);

function resetCurrScore() {
  currScore = 0;

  currScoresArray.forEach(score => (score.textContent = currScore));
}

function resetGame() {
  resetCurrScore();

  gameOver = false;

  // Sets totals scores to 0
  for (let i = 0; i < totalScores.length; i++) {
    totalScores[i] = 0;
    displayTotals[i].textContent = totalScores[i];
  }

  // Removes both classes from active player
  players[activePlayer].classList.remove('player--winner', 'player--active');

  players[0].classList.add('player--active');

  activePlayer = 0;

  diceEl.classList.add('hidden');
}
