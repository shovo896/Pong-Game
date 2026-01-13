// create js representation from the DOM model
const startText = document.getElementById('startText');
const player1ScoreEl = document.getElementById('player1score');
const player2ScoreEl = document.getElementById('player2score');

// Game variables
let gameRunning = false;
let player1Score = 0;
let player2Score = 0;

initScoreboard();

document.addEventListener('keydown', startGame, { once: true });

// start the game 
function startGame() {
       if (gameRunning) {
              return;
       }
       gameRunning = true;
       gameLoop();
       
       if (startText) {
              startText.style.display = 'none';
       }
       document.removeEventListener('keydown', startGame);


}

//startGame();

function initScoreboard() {
       if (player1ScoreEl) {
              player1ScoreEl.textContent = String(player1Score);
       }
       if (player2ScoreEl) {
              player2ScoreEl.textContent = String(player2Score);
       }
}





