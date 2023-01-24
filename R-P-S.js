function getComputerChoice() {
    return (Math.floor(Math.random) * choice);
}
const choice=("rock, paper, sicissors");

function playRound(playerSelection, computerSelection) {
    var userchoice = prompt ("Choose rock, paper or scissors");
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors;"
    }

    if (userchoice == "rock") {
    if (computerChoice == "paper") {
    }
    }
    }
    const playerSelection ="rock";
    const computerSelection = getComputerChoice();


    console.log(playRound(playerSelection, computerSelection));

