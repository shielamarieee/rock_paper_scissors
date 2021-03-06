
function computerPlay() {
    const pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * pick.length)];
}

function playRound(playerSelection, computerSelection) {
   if (playerSelection === computerSelection) {
      alert(`It's a tie! you both picked ${playerSelection}`);
      return "tie";
   } else if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){
      alert(`You sure about using ${playerSelection} on a game of "Rock, Paper, Scissors"?`)
   } else if (playerSelection === "rock" && computerSelection === "scissors") {
      alert(`You win this round! ${playerSelection} beats ${computerSelection}`);
      return "playerWin";
   } else if (playerSelection === "paper" && computerSelection === "rock") {
      alert(`You win this round! ${playerSelection} beats ${computerSelection}`);
      return "playerWin";
   } else if (playerSelection === "scissors" && computerSelection === "paper") {
      alert(`You win this! ${playerSelection} beats ${computerSelection}`);
      return "playerWin";
   } else {
      alert(`You lose this round! ${computerSelection} beats ${playerSelection}`);
      return "botWin";
   }
}

const computerSelection = computerPlay();


// to loop the game until 5 rounds
function game() {
   let playerScore = 0;
   let botScore = 0;
   let gameWinner = '';
   
   for (let i = 0; i < 5; i++) {

      let playerSelection = prompt(`Round ${i+1}: Choose among "Rock, Paper, Scissors" as your weapon`).toLowerCase();
      let roundResult = playRound(playerSelection, computerPlay());

      if (roundResult === "playerWin" ) {
         playerScore++;
      } else if (roundResult === "botWin" ) {
         botScore++;
      }
   }

   if (playerScore > botScore) {
      gameWinner = 'You win!';
   } else if (botScore > playerScore) {
      gameWinner = 'You lose, Computer wins!';
   } else {
      gameWinner = 'Draw';
   }

   alert(`Player: ${playerScore}  |  Bot: ${botScore}`);

   if (gameWinner === 'Draw') {
      alert("There is no match winner, draw!");
   } else {
      alert(`${gameWinner}`);
   }
}

game();

