// create js representation from the DOM model
const startText = document.getElementById('startText');
const player1ScoreEl = document.getElementById('player1score');
const player2ScoreEl = document.getElementById('player2score');

// Game variables
let gameRunning = false;
let player1Score = 0;
let player2Score = 0;
let keysPressed = {};
let paddle1Speed = 0;
let paddle1Y = 150;

initScoreboard();

document.addEventListener('keydown', startGame, { once: true });
document.addEventListener('keydown', handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

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
function gameLoop() {
       if (gameRunning){
              updatePaddle();
              
              setTimeout(gameLoop,8);}
       
}

function handleKeyDown(e){
       keysPressed[e.key] = true;
}
function handleKeyUp(e){
       keysPressed[e.key] = false;
}



function updatePaddle1() {
       if (keysPressed['w']) {
              // move paddle 1 up
              paddle1Speed= -5 ;
       }
       paddle1Y+= paddle1Speed;
       console.log(paddle1Y);

}








