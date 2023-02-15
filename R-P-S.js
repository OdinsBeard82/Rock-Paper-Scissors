const resultDisplay = document.querySelector('#result')
const choicesDisplay = document.querySelector('#choices')
const choices1Display = document.querySelector('#choices1')
const choices = ["rock", "paper", "scissors"];

const handleClick = (e) => {
    getResults(e.target.innerHTML, getComputerChoice())
}

const getComputerChoice = () => {
   return choices [Math.floor(Math.random() * choices.length)];
}

choices.forEach(choice => {
    const button = document.createElement('button')
    button.innerHTML= choice
    button.addEventListener('click', handleClick)
    choicesDisplay.appendChild(button)
})


const getResults = (playerSelection, computerSelection) => {
   const result = playRound(playerSelection, computerSelection);
   resultDisplay.innerHTML = result;
}
   function playRound(playerSelection, computerSelection) {
   switch (playerSelection + computerSelection) {
   case 'scissorspaper':
   case 'rockscissors':
   case 'paperrock':
      resultDisplay.innerHTML = 'You chose' + playerSelection + 'the computer chose ' + computerSelection + ' , you win'
      break
   case 'paperscissors':
   case 'scissorsrock':
   case 'rockpaper':
      resultDisplay.innerHTML = 'You chose' + playerSelection + 'the computer chose ' + computerSelection + ' , you lose'
      break
   case 'scissorsscissors':
   case 'rockrock':
   case 'paperpaper':
      resultDisplay.innerHTML = 'You chose' + playerSelection + 'the computer chose ' + computerSelection + ' , draw'
      break
   }   
}
const game = () => { 
   let playerScore = 0; 
   let computerScore = 0; 
   for (let i = 0; i < 5; i++) { 
      const playerSelection = getComputerChoice(); 
      const computerSelection = getComputerChoice(); 
      const result = playRound(playerSelection, computerSelection);
      if (result.includes("win")) { playerScore++; } 
      else if (result.includes("lose")) { computerScore++; } } 
      if (playerScore > computerScore) { resultDisplay.innerHTML = "You won the game! Score: " + playerScore + " - " + computerScore; } 
      else if (playerScore < computerScore) { resultDisplay.innerHTML = "You lost the game. Score: " + playerScore + " - " + computerScore; } 
      else { resultDisplay.innerHTML = "The game was a draw. Score: " + playerScore + " - " + computerScore; } }

const playerSelection = "rock";
const computerSelection = getComputerChoice(); 
console.log(playRound(playerSelection, computerSelection));