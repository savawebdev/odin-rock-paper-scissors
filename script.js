// Selects the player choice buttons
const gameBtns = document.querySelectorAll(".btn");

// Selects the elemnt to show the round result
const results = document.querySelector(".results");
const resultText = document.querySelector("#result");

// Select the score elements
const playerScoreText = document.querySelector("#player-score");
const computerScoreText = document.querySelector("#computer-score");

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
  if (playerSelection === computerSelection) {
    resultText.textContent = `It's a draw! Both players selected ${playerSelection}`;

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

let playerScore = 0;
let computerScore = 0;

gameBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const playerSelection = e.target.getAttribute("id");
    const computerSelection = computerPlay();

    const roundResult = playRound(playerSelection, computerSelection);

    // Update the score
    if (roundResult === "playerWins") {
      playerScore++;
      playerScoreText.textContent = playerScore;
    } else if (roundResult === "computerWins") {
      computerScore++;
      computerScoreText.textContent = computerScore;
    }

    if (playerScore === 5) {
      resultText.textContent = "Player wins the game!";
      disableButtons();
    }

    if (computerScore === 5) {
      resultText.textContent = "Computer wins the game!";
      disableButtons();
    }
  });
});

function disableButtons() {
  gameBtns.forEach((btn) => {
    btn.disabled = true;
  });
}
