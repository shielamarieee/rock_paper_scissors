function game() {
  //scoreboard
let playerScore = 0;
let computerScore = 0;

//Query to change game result text;
const gameResult = document.querySelector('.game-result');

//To start the game
const startGame = () => {
  const startBtn = document.querySelector('.first-page button');
  const firstPage = document.querySelector('.first-page');
  const game = document.querySelector('.game');

  startBtn.addEventListener('click', () => {
    firstPage.classList.add('fadeOut');
    game.classList.add('fadeIn');
  });
}

const playMatch = () => {
  const buttons = document.querySelectorAll('.buttons button');
  const playerHand = document.querySelector('.player-hand');
  const computerHand = document.querySelector('.computer-hand');

  //to put arguments in playRound function
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const playerSelection = button.className;
      const computerSelection = computerPlay();
      let roundResult = playRound(playerSelection, computerSelection);

      //change images
      playerHand.src = `./images/human_${playerSelection}.png`;
      computerHand.src = `./images/robot_${computerSelection}.png`;

      //to end game
      gameEnd();
    })
  })
}

const gameEnd = () => {
  //create restart button
  const restartBtn = document.createElement('button');
  restartBtn.className = 'restart';
  restartBtn.textContent = 'Play Again'

  if(playerScore === 5 || computerScore === 5) {
   document.querySelector('.rock').style.display = 'none';
   document.querySelector('.paper').style.display = 'none';
   document.querySelector('.scissors').style.display = 'none';
   document.querySelector('.buttons').appendChild(restartBtn);

   //to restart
   restartBtn.addEventListener('click', () => {
     window.location.reload();
   })
   
    if(playerScore > computerScore) {
      gameResult.textContent = 'Yey! You win!';
    } else if (computerScore > playerScore) {
      gameResult.textContent = 'Aww you lose against the computer';
    }
   }
 }
// to update score
const score = () => {
  const pScore = document.querySelector('.player-score p');
  const cScore = document.querySelector('.computer-score p');
  pScore.textContent = playerScore;
  cScore.textContent = computerScore;
}

const computerPlay = () => {
  const pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * pick.length)];
}
const playRound = (playerSelection, computerSelection) => {
  if(playerSelection === computerSelection) {
      gameResult.textContent = 'Draw!';
      return;
    } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
      gameResult.textContent = 'You win this round!';
      playerScore++;
      score();
      return;
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
      gameResult.textContent = 'You win this round!';
      playerScore++;
      score();
      return;
    } else if(playerSelection === 'scissors' && computerSelection === 'paper' ) {
      gameResult.textContent = 'You win this round!';
      playerScore++;
      score();
      return;
    } else {
      gameResult.textContent = 'You lose this round';
      computerScore++;
      score();
      return;
    }
  }

  //call inner functions
startGame();
playMatch();
gameEnd();
}

game();