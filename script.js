// create js representation from the DOM model
const startText = document.getElementById('startText');
const player1ScoreEl = document.getElementById('player1score');
const player2ScoreEl = document.getElementById('player2score');
const paddle1=document.getElementById('paddle1');
const paddle2 = document.getElementById('paddle2');
const maxPaddleSpeed=5;
const gameHeight=400;
const gameWidth=600;
const ball =document.getElementById('ball');


// Game variables
let gameRunning = false;
let player1Score = 0;
let player2Score = 0;
let keysPressed = {};
let paddle1Speed = 0;
let paddle1Y = 150;
let paddle2Speed = 0;
let paddle2Y = 150;
let ballX=290;
let ballY=290;
let ballSpeedX=2;
let ballSpeedY=2;


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
function moveBall() {
       if (!ball) {
              return;
       }
       ballX += ballSpeedX;
       ballY += ballSpeedY;

       if (ballY >= gameHeight - ball.clientHeight || ballY <= 0) {
              ballSpeedY = -ballSpeedY;
       }
       const ballSize = ball.clientWidth;

       // paddle 1 movement collision 
       if (
              ballSpeedX < 0 &&
              ballX <= paddle1.clientWidth &&
              ballY + ballSize >= paddle1Y &&
              ballY <= paddle1Y + paddle1.clientHeight
       ) {
              ballSpeedX = -ballSpeedX;
       }
       // paddle 2 movement collision
       if (
              ballSpeedX > 0 &&
              ballX + ballSize >= gameWidth - paddle2.clientWidth &&
              ballY + ballSize >= paddle2Y &&
              ballY <= paddle2Y + paddle2.clientHeight
       ) {
              ballSpeedX = -ballSpeedX;
       }
       // out of gameArea
       if (ballX  <=0) {
              player2Score ++ ;
              initScoreboard();
              resetBall();
       } else if (ballX > gameWidth-ball.clientWidth) {
              player1Score ++;
              initScoreboard();
              resetBall();
       }

       ball.style.left=ballX + "px";
       ball.style.top=ballY + "px";

}

function resetBall() {
       ballX = (gameWidth - ball.clientWidth) / 2;
       ballY = (gameHeight - ball.clientHeight) / 2;
       ballSpeedX = ballSpeedX > 0 ? 2 : -2;
       ballSpeedY = ballSpeedY > 0 ? 2 : -2;
}
function initScoreboard(){
       player1ScoreElement.textContent=player1Score;
       player2ScoreElement.textContent=player2Score;

}






