// create js representation from the DOM model 
const startText=document.getElementById('startText');
console.log(startText);


// Game variables 
let gameRunning = false;

document.addEventListener('keydown', startGame);

// start the game 
function startGame() {
       if (gameRunning) {
              return;
       }
       gameRunning = true;
       startText.style.display = "none";
       document.removeEventListener('keydown', startGame);
}
//startGame();



