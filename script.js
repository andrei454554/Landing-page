function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
      return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
  }
  
  function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Choose rock, paper, or scissors.");
      const computerSelection = computerPlay();
      const roundResult = playRound(playerSelection, computerSelection);
      console.log(roundResult);
      if (roundResult.includes("win")) {
        playerScore++;
      } else if (roundResult.includes("lose")) {
        computerScore++;
      }
      console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`);
    }
    if (playerScore > computerScore) {
      console.log("Congratulations, you win!");
    } else if (computerScore > playerScore) {
      console.log("Sorry, you lose!");
    } else {
      console.log("It's a tie game!");
    }
  }
  
  game();
  