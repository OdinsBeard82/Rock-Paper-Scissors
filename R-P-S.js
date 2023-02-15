const resultDisplay = document.querySelector("#result");
const choicesDisplay = document.querySelector("#choices");
const choices = ["rock", "paper", "scissors"];
const playButton = document.createElement("button");

let roundCount = 0;

const handleClick = (e) => {
  if (roundCount < 5) {
    roundCount++;
    getResults(e.target.innerHTML, getComputerChoice());

    if (roundCount === 5) {
      disableButtons();
    }
  }
};

function disableButtons() {
  const buttons = document.querySelectorAll("#choices button");
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

choices.forEach((choice) => {
  const button = document.createElement("button");
  button.innerHTML = choice;
  button.addEventListener("click", handleClick);
  choicesDisplay.appendChild(button);
});

const getResults = (playerSelection, computerSelection) => {
  const result = playRound(playerSelection, computerSelection);
  resultDisplay.innerHTML = result;
};

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
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = getComputerChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    if (result.includes("win")) {
      playerScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    }

    if (playerScore === 3 || computerScore === 3) {
      break;
    }
  }

  if (playerScore > computerScore) {
    resultDisplay.innerHTML =
      "You won the game! Score: " + playerScore + " - " + computerScore;
  } else if (playerScore < computerScore) {
    resultDisplay.innerHTML =
      "You lost the game. Score: " + playerScore + " - " + computerScore;
  } else {
    resultDisplay.innerHTML =
      "The game was a draw. Score: " + playerScore + " - " + computerScore;
  }

  // reset the game after 5 rounds
  setTimeout(() => {
    playerScore = 0;
    computerScore = 0;
    resultDisplay.innerHTML = "";
    roundCount = 0;
    enableButtons();
  }, 2000);
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