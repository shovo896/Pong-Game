// create js representation from the DOM model 
const startText=document.getElementById('startText');
console.log(startText);


// Game variables 
let gameRunning = false;

// start the game 
function startGame(){
       gameRunning = true;
       startText.style.display = "block";

}
startGame();

