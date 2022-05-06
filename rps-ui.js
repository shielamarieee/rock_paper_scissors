//scoreboard
let playerScore = 0;
let computerScore = 0;
let currentRound = 1;

//queries
const header = document.querySelector('.header');
const announcement = document.createElement('div');
announcement.className = 'announcement';
header.appendChild(announcement);
const playerHand = document.querySelector('.playerHand');
const computerHand = document.querySelector('.computerHand');
const scoreLeft = document.querySelector('.scoreLeft');
const scoreRight = document.querySelector('.scoreRight');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let playerSelection = button.className;
    let computerSelection = computerPlay();
    let roundResult = playRound(playerSelection, computerSelection);

    if(roundResult === 'playerWin') {
      playerScore++
      currentRound++
    } else if (roundResult === 'computerWin') {
      computerScore++;
      currentRound++
    }
    

    //Player Pick Illustrations
    function changeImage() {
    if(playerSelection === 'rock') {
      playerHand.setAttribute('src', './images/human_rock.png');
    } else if (playerSelection === 'paper') {
      playerHand.setAttribute('src', './images/human_paper.png');
    } else if (playerSelection === 'scissors') {
      playerHand.setAttribute('src', './images/human_scissors.png');
    }

    //Computer Pick Illustrations
    if(computerSelection === 'rock') {
      computerHand.setAttribute('src', './images/robot_rock.png');
    } else if(computerSelection === 'paper') {
      computerHand.setAttribute('src', './images/robot_paper.png');
    } else if(computerSelection === 'scissors') {
      computerHand.setAttribute('src', './images/robot_scissors.png');
    }
  }
  score();
  gameEnd();
  changeImage();
  })
})

function computerPlay() {
  const pick = ['rock', 'paper', 'scissors'];
  return pick[Math.floor(Math.random() * pick.length)];
}

function playRound(playerSelection, computerSelection) {

  let tie = `It's a tie you both picked ${playerSelection}`;
  let playerWin = `You win this round! ${playerSelection} beats ${computerSelection}`;
  let computerWin = `You lose this round! ${computerSelection} beats ${playerSelection}`;

  if(playerSelection === computerSelection) {
    announcement.innerHTML = tie;
    return 'tie';
  } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
    announcement.innerHTML = playerWin;
    return 'playerWin';
  } else if(playerSelection === 'paper' && computerSelection === 'rock') {
    announcement.innerHTML = playerWin;
    return 'playerWin';
  } else if(playerSelection === 'scissors' && computerSelection === 'paper' ) {
    announcement.innerHTML = playerWin;
    return 'playerWin';
  } else {
    announcement.innerHTML = computerWin;
    return 'computerWin';
  }
}

function score() {
  scoreLeft.innerHTML = `${playerScore}`;
  scoreRight.innerHTML = `${computerScore}`;
}

const restartBtn = document.createElement('button');
restartBtn.className = 'restart';
restartBtn.appendChild(document.createTextNode('Play Again'));

function gameEnd() {
  if(playerScore === 5 || computerScore === 5) {
    document.querySelector('.rock').style.display = 'none';
    document.querySelector('.paper').style.display = 'none';
    document.querySelector('.scissors').style.display = 'none';

    document.querySelector('.buttons').appendChild(restartBtn);
    restartBtn.addEventListener('click', () => {
      window.location.reload();
    })
    if(playerScore > computerScore) {
      announcement.innerHTML = '<b>Congrats, You win!</b>';
    } else if (computerScore > playerScore) {
      announcement.innerHTML = '<b>Aww you lose against the computer</b>';
    }
  }
}