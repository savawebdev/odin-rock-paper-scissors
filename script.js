// Selects the player choice buttons
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

// Selects the elemnt to show the round result
const results = document.querySelector(".results");
const resultText = document.querySelector("#result");

// Returns a random computer choice from rock, paper, scissors
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

// Plays a round of RPS
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    console.log(`It's a draw! You both selected ${playerSelection}!`);

    return "draw";
  }

  switch (playerSelection) {
    case "rock":
      if (computerSelection === "paper") {
        resultText.textContent = `Player chose ${playerSelection}, computer chose ${computerSelection}. Computer wins!`;
        return "computerWins";
      } else {
        resultText.textContent = `Player chose ${playerSelection}, computer chose ${computerSelection}. Player wins!`;
        return "playerWins";
      }
      break;

    case "paper":
      if (computerSelection === "rock") {
        resultText.textContent = `Player chose ${playerSelection}, computer chose ${computerSelection}. Player wins!`;
        return "playerWins";
      } else {
        resultText.textContent = `Player chose ${playerSelection}, computer chose ${computerSelection}. Computer wins!`;
        return "computerWins";
      }
      break;

    case "scissors":
      if (computerSelection === "rock") {
        resultText.textContent = `Player chose ${playerSelection}, computer chose ${computerSelection}. Computer wins!`;
        return "computerWins";
      } else {
        resultText.textContent = `Player chose ${playerSelection}, computer chose ${computerSelection}. Player wins!`;
        return "playerWins";
      }
      break;

    default:
      break;
  }
}

rockBtn.addEventListener("click", () => {
  const roundResult = playRound("rock", computerPlay());
});
