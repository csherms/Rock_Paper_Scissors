let computerScore = 0;
let playerScore = 0;
let rounds = 0;

const computerPlay = () => {
  const randNum = Math.floor(Math.random() * 3);
  return randNum === 0 ? "rock" : randNum === 1 ? "paper" : "scissors";
};

const playerPlay = () => {
  let result = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
  if (result !== "rock" && result !== "paper" && result !== "scissors") {
    return alert("Input invalid! Please enter Rock, Paper, or Scissors.");
  } else {
    return result;
  }
};

// Game rounds
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    rounds++;
    return `Round Tied! \n Player score: ${playerScore} \n Computer score: ${computerScore}`;
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      rounds++;
      return `Round Lost! Paper cover Rock. \n Player score: ${playerScore} \n Computer score: ${computerScore}`;
    } else {
      playerScore++;
      rounds++;
      return `Round Won! Rock smashes Scissors. \n Player score: ${playerScore} \n Computer score: ${computerScore}`;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      computerScore++;
      rounds++;
      return `Round Lost! Scissor cuts Paper. \n Player score: ${playerScore} \n Computer score: ${computerScore}`;
    } else {
      playerScore++;
      rounds++;
      return `Round Won! Paper covers Rock. \n Player score: ${playerScore} \n Computer score: ${computerScore}`;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      rounds++;
      return `Round Lost! Rock smashes Scissors.\n Player score: ${playerScore} \n Computer score: ${computerScore}`;
    } else {
      playerScore++;
      rounds++;
      return `Round Won! Scissors cust Paper. \n Player score: ${playerScore} \n Computer score: ${computerScore}`;
    }
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
  do {
    console.log(playRound(playerPlay(), computerPlay()));
  } while (rounds < 5);

  endGame();
}

game();
