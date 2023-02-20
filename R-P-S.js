const resultDisplay = document.querySelector("#result");
const choicesDisplay = document.querySelector("#choices");
const choices = ["rock", "paper", "scissors"];
const playButton = document.createElement("button");

let playerScore = 0;
let computerScore = 0;

const handleClick = (e) => {
  if (playerScore < 5 && computerScore < 5) {
    const playerSelection = e.target.innerHTML;
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    getResults(result);
  }
};

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

choices.forEach((choice) => {
  const button = document.createElement("button");
  button.innerHTML = choice;
  button.addEventListener("click", handleClick);
  choicesDisplay.appendChild(button);
});

const getResults = (result) => {
  if (result.includes("win")) {
    playerScore++;
  } else if (result.includes("lose")) {
    computerScore++;
  }

const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");

playerScoreDisplay.textContent = playerScore;
computerScoreDisplay.textContent = computerScore;


  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      resultDisplay.innerHTML =
        "You won the game! Score: " + playerScore + " - " + computerScore;
    } else {
      resultDisplay.innerHTML =
        "You lost the game. Score: " + playerScore + " - " + computerScore;
    }
    disableButtons();
  } else {
    resultDisplay.innerHTML = result;
  }
};

function disableButtons() {
  const buttons = document.querySelectorAll("#choices button");
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection + computerSelection) {
    case "scissorspaper":
    case "rockscissors":
    case "paperrock":
      return (
        "You chose " +
        playerSelection +
        ", the computer chose " +
        computerSelection +
        ", you win"
      );
    case "paperscissors":
    case "scissorsrock":
    case "rockpaper":
      return (
        "You chose " +
        playerSelection +
        ", the computer chose " +
        computerSelection +
        ", you lose"
      );
    case "scissorsscissors":
    case "rockrock":
    case "paperpaper":
      return (
        "You chose " +
        playerSelection +
        ", the computer chose " +
        computerSelection +
        ", draw"
      );
  }
}

const game = () => {
  playerScore = 0;
  computerScore = 0;
  resultDisplay.innerHTML = "";
  enableButtons();
};

function enableButtons() {
  const buttons = document.querySelectorAll("#choices button");
  buttons.forEach((button) => {
    button.disabled = false;
  });
}

playButton.innerHTML = "Play Game";
playButton.addEventListener("click", game);
document.body.appendChild(playButton);