// create js representation from the DOM model
const startText = document.getElementById('startText');
const player1ScoreEl = document.getElementById('player1score');
const player2ScoreEl = document.getElementById('player2score');
const paddle1=document.getElementById('paddle1');
const paddle2 = document.getElementById('paddle2');
const maxPaddleSpeed=5;
const gameHeight=400;
const gameWidth=600;

// Game variables
let gameRunning = false;
let player1Score = 0;
let player2Score = 0;
let keysPressed = {};
let paddle1Speed = 0;
let paddle1Y = 150;
let paddle2Speed = 0;
let paddle2Y = 150;

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
       if (gameRunning) {
              updatePaddle1();
              updatePaddle2();
              moveBall();
              setTimeout(gameLoop, 8);
       }
}

function handleKeyDown(e){
       keysPressed[e.key] = true;
}
function handleKeyUp(e){
       keysPressed[e.key] = false;
}



function updatePaddle1() {
       if (!paddle1) {
              return;
       }
       if (keysPressed['w']) {
              paddle1Speed = -5;
       } else if (keysPressed['s']) {
              paddle1Speed = 5;
       } else {
              paddle1Speed = 0;
       }
       paddle1Y += paddle1Speed;
       if (paddle1Y < 0) {
              paddle1Y = 0;
       } else if (paddle1Y > 300) {
              paddle1Y = 300;
       }
       paddle1.style.top = paddle1Y + 'px';
}

function updatePaddle2() {
       if (!paddle2) {
              return;
       }
       if (keysPressed['ArrowUp']) {
              paddle2Speed = -5;
       } else if (keysPressed['ArrowDown']) {
              paddle2Speed = 5;
       } else {
              paddle2Speed = 0;
       }
       paddle2Y += paddle2Speed;
       if (paddle2Y < 0) {
              paddle2Y = 0;
       } else if (paddle2Y > 300) {
              paddle2Y = 300;
       }
       paddle2.style.top = paddle2Y + 'px';
}


// Ball function 
// 






