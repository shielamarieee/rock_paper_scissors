    //scoreboard
    let playerScore = 0;
    let computerScore = 0;
    
    //queries
    const scoreBoard = document.querySelector('.score-board');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const scoreLeft = document.querySelector('.player-current');
    const scoreRight = document.querySelector('.computer-current');
    const gameResult = document.querySelector('.game-result');
    
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        let playerSelection = button.className;
        let computerSelection = computerPlay();
        let roundResult = playRound(playerSelection, computerSelection);
    
        if(roundResult === 'playerWin') {
          playerScore++
        } else if (roundResult === 'computerWin') {
          computerScore++;
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
    
      let tie = 'Draw!';
      let playerWin = 'You win this round!';
      let computerWin = 'You lose this round!';
    
      if(playerSelection === computerSelection) {
        gameResult.innerHTML = tie;
        return 'tie';
      } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        gameResult.innerHTML = playerWin;
        return 'playerWin';
      } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        gameResult.innerHTML = playerWin;
        return 'playerWin';
      } else if(playerSelection === 'scissors' && computerSelection === 'paper' ) {
        gameResult.innerHTML = playerWin;
        return 'playerWin';
      } else {
        gameResult.innerHTML = computerWin;
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
          gameResult.innerHTML = '<b>Yey! You win!</b>';
        } else if (computerScore > playerScore) {
          gameResult.innerHTML = '<b>Aww you lose against the computer</b>';
        }
      }
    }