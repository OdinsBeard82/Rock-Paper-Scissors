//function getComputerChoice() {
   // return (Math.floor(Math.random) * choice);
//}
const resultDisplay = document.querySelector('#result')
// this grabs the result id from index.html
const choicesDisplay = document.querySelector('#choices')
//This grabs the choices id from index.ht;l

const handleClick = (e) => {
    //this asignes an action for the handleClick
    getResults(e.target.innerHTML, choices[Math.floor(Match.random() * choices.length)])
    //result of what user clicks and result of computers random choice using math random
}
const choices = ["rock, paper, sicissors"];
//Asigns choices as rock, paper and scissors
choices.forEach(choice => {
    const button = document.createElement('button')
    //this creates a button for the choices
    button.innerHTML = choice
    //grab the button and you html to asign it the choice
    button.addEventListener('click', handleClick)
    //grab the button and add an eventListener to listen 
    //out for a click and then call the handleClick functcion
    choicesDisplay.appendChild(button)
    //grab choices display and use appendChild button
})

const getResults = (userChoice, computerChoice) => {
   switch(userChoice + computerChoice ) {
       case 'scissorspaper':
       case 'rockscissors':
       case 'paperrock':
       resultDisplay.innerHTML = 'You chose' + userChoice + 'the computer chose ' + computerChoice + ' , you win';
       break

// you chose computer choice and computer chose computer choice which means you win
   }
}
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




