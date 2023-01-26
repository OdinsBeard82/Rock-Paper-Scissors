const resultDisplay = document.querySelector('#result')
const choicesDisplay = document.querySelector('#choices')
const choices = ["rock, paper, scissors"];

const handleClick = (e) => {
    getResults(e.target.innerHTML, choices[Math.floor(Math.random() * choices.length)])

}

choices.forEach(choice => {
    const button = document.createElement('button')
    button.innerHTML= choice
    button.addEventListener('click', handleClick)
    choicesDisplay.appendChild(button)
})

const getResults = (userChoice, computerChoice) => {
   switch (userChoice + computerChoice) {
   case 'scissorspaper':
   case 'rockscissors':
   case 'paperrock':
      resultDisplay.innerHTML = 'You chose' + userChoice + 'the computer chose ' + computerChoice + ' , you win'
      break
   case 'paperscissors':
   case 'scissorsrock':
   case 'rockpaper':
      resultDisplay.innerHTML = 'You chose' + userChoice + 'the computer chose ' + computerChoice + ' , you lose'
      break
   case 'scissorsscissors':
   case 'rockrock':
   case 'paperpaper':
      resultDisplay.innerHTML = 'You chose' + userChoice + 'the computer chose ' + computerChoice + ' , draw'
      break
   }   
}


// this grabs the result id from index.html
//This grabs the choices id from index.html
//Asigns choices as rock, paper and scissors

//this asignes an action for the handleClick
//result of what user clicks and result of computers random choice using math random
//Asigns choices as rock, paper and scissors

 //this creates a button for the choices
 //grab the button and you html to asign it the choice

//grab the button and add an eventListener to listen 
//out for a click and then call the handleClick functcion
//grab choices display and use appendChild button
// you chose computer choice and computer chose computer choice which means you win