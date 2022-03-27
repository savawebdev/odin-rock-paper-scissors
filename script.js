function computerPlay() {
  randomChoice = Math.floor(Math.random() * 3);

  switch (randomChoice) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    console.log(`It's a draw! You both selected ${playerSelection}!`);

    return "draw";
  }

  switch (playerSelection) {
    case "rock":
      if (computerSelection === "paper") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return "computerWins";
      } else {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return "playerWins";
      }
      break;

    case "paper":
      if (computerSelection === "rock") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return "playerWins";
      } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return "computerWins";
      }
      break;

    case "scissors":
      if (computerSelection === "rock") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return "computerWins";
      } else {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return "playerWins";
      }
      break;
    default:
      console.log("Invalid choice");
      return;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  console.log(`Game Start!`);
  console.log(`Player Score: ${playerScore}`);
  console.log(`Computer Score: ${computerScore}`);

  for (let i = 1; i <= 5; i++) {
    const playerSelection = window.prompt();

    result = playRound(playerSelection, computerPlay());

    if (result === "draw") {
      playerScore++;
      computerScore++;
    } else if (result === "playerWins") {
      playerScore++;
    } else if (result === "computerWins") {
      computerScore++;
    } else {
      console.log(`Oops, something went wrong!`);
      return;
    }

    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
  }
}
