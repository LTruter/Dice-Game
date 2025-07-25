# 🎲 Pig Dice Game

A simple 2-player dice game implemented in JavaScript, HTML, and CSS. The game logic follows the structure below:

## 🔁 Game Flow

![Game Flowchart](pig-game-flowchart.png)

- **Roll Dice**:
  - Generates a random number from 1 to 6.
  - If the number is not 1, it's added to the player's **current score**.
  - If it's a 1, the **current score is lost** and the turn switches to the other player.

- **Hold**:
  - Adds the current score to the **total score**.
  - If the total score is **100 or more**, the player wins.
  - Otherwise, the turn switches.

- **New Game**:
  - Resets all scores to 0.
  - Sets **Player 1** as the starting player.

## 🛠 Built With

- HTML
- CSS
- JavaScript (DOM manipulation)
