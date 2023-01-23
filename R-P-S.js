function getComputerChoice() {
    return (Math.floor(Math.random) * Choice);
}
const Choice("rock, paper, sicissors");
console.log(choice);

//Your game is going to play against the computer, so begin 
//with a function called getComputerChoice that will randomly 
//return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this 
//function in the game to make the computer’s play. Tip: use 
//the console to make sure this is returning the expected 
//output before moving to the next step!



























const choices = ["rock", "paper", "scissors"];

 function game() {
    playRound();
 }

function playRound() {
   const playerSelection = playerChoice();
   const computerSelection = ComputerChoice();
  }

  function PlayerChoice() {
   let input = prompt("Tyoe Rock, Paper, or Scissors");
   while (input == null) {
    input = prompt("Type Rock, Paper, or Scissors");
  }
   input = input.toLowerCase();
   let check = ValidateInput(input);
   while (check == false {
       prompt("Type Rock, Paper, or Scissors. Spelling needs to be exact, but capitilization doesn't matter")
   } 
  }

  function ComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)]
  }

  function ValidateInput(choice) {
    return choices.includes(choice);
    }