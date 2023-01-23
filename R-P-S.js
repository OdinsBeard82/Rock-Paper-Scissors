
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
   input = input.toLowerCase();
  }

  function ComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)]
  }