let computerScore = 0;
let playerScore = 0;

const computerPlay = () => {
  const randNum = Math.floor(Math.random() * 3);
  return randNum === 0 ? "rock" : randNum === 1 ? "paper" : "scissors";
};

const playerPlay = () => {
  let playerSelection = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
  if (
    playerSelection !== "rock" &&
    playerSelection !== "paper" &&
    playerSelection !== "scissors"
  ) {
    alert("Invalid entry: Please enter Rock, Paper or Scissors");
  }
  return playerSelection;
};

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    let result = `Tie! Try again. \n Player score: ${playerScore} \n Computer score: ${computerScore}`;
    return result;
  }

  if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
    let result = `You lose! Paper covers rock. \n Player score: ${playerScore} \n Computer score: ${computerScore}`;
    return result;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    let result = `You Win! Rock smashes scissors. \n Player score: ${playerScore} \n Computer score: ${computerScore}`;
    return result;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    let result = `You Win! Paper covers rock. \n Player score: ${playerScore} \n Computer score: ${computerScore}`;
    return result;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
    let result = `You Lose! Scissors cuts paper. \n Player score: ${playerScore} \n Computer score: ${computerScore}`;
    return result;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    let result = `You Lose! Rock smashes scissors. \n Player score: ${playerScore} \n Computer score: ${computerScore}`;
    return result;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    let result = `You Win! Scissors cuts paper. \n Player score: ${playerScore} \n Computer score: ${computerScore}`;
    return result;
  }
}

function endGame() {
  if (playerScore > computerScore) {
    console.log(
      `Game Over! You are Victorious!😎 \nFinal score: \n${playerScore} to ${computerScore}`
    );
  } else if (computerScore > playerScore) {
    console.log(
      `Game Over! You are Defeated!😢 \nFinal score: \n${playerScore} to ${computerScore}`
    );
  } else {
    console.log(
      `Game Over! Tie Game!🍻 \nFinal score: \n${playerScore} to ${computerScore}`
    );
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(playerPlay(), computerPlay()));
  }
  endGame();
}

game();
