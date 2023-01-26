//function getComputerChoice() {
   // return (Math.floor(Math.random) * choice);
//}
const resultDisplay = document.querySelector('#result')
const choicesDisplay = document.querySelector('#choices')

const handleClick = () => {
    console.log('clicked')
}
const choices = ["rock, paper, sicissors"];
choices.forEach(choice => {
    const button = document.createElement('button')
    button.innerHTML = choice
    button.addEventListener('click', handleClick)
    choicesDisplay.appendChild(button)
})

//function playRound(playerSelection, computerSelection) {
 //   var userchoice = prompt ("Choose rock, paper or scissors");
 //   var computerChoice = Math.random();
   // if (computerChoice < 0.34) {
 //       computerChoice = "rock";
 //   } else if(computerChoice <= 0.67) {
 //       computerChoice = "paper";
 //   } else {
 //       computerChoice = "scissors;"
 //   }
 //   if (userchoice == "rock") {
 //   if (computerChoice == "paper") {
 //   }
  //  }
  //  }
  //  const playerSelection ="rock";
 //   const computerSelection = getComputerChoice();




