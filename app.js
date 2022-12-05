let computerScore = 0;
let playerScore = 0;
let rounds = 0;

const computerPlay = () => {
  const randNum = Math.floor(Math.random() * 3);
  return randNum === 0 ? "rock" : randNum === 1 ? "paper" : "scissors";
};

const playerPlay = () => {
  let result = prompt("Choose Rock, Paper, or Scissors").trim().toLowerCase();
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
    return `Round Tied! \nPlayer: ${playerScore} \nComputer: ${computerScore}`;
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      rounds++;
      return `Round Lost! \nPaper covers Rock. \nPlayer: ${playerScore} \nComputer: ${computerScore}`;
    } else {
      playerScore++;
      rounds++;
      return `Round Won! \nRock smashes Scissors. \nPlayer: ${playerScore} \nComputer: ${computerScore}`;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      computerScore++;
      rounds++;
      return `Round Lost! \nScissor cuts Paper. \nPlayer: ${playerScore} \nComputer: ${computerScore}`;
    } else {
      playerScore++;
      rounds++;
      return `Round Won! \nPaper covers Rock. \nPlayer: ${playerScore} \nComputer: ${computerScore}`;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      rounds++;
      return `Round Lost! \nRock smashes Scissors.\nPlayer: ${playerScore} \nComputer: ${computerScore}`;
    } else {
      playerScore++;
      rounds++;
      return `Round Won! \nScissors cuts Paper. \nPlayer: ${playerScore} \nComputer: ${computerScore}`;
    }
  }
}

function endGame() {
  if (playerScore > computerScore) {
    console.log(
      `Game Over! \nYou are Victorious!😎 \nFinal score: \n${playerScore} to ${computerScore}`
    );
  } else if (computerScore > playerScore) {
    console.log(
      `Game Over! \nYou were Defeated!😢 \nFinal score: \n${playerScore} to ${computerScore}`
    );
  } else {
    console.log(
      `Game Over! \nTie Game!🍻 \nFinal score: \n${playerScore} to ${computerScore}`
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
