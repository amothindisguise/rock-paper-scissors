//create a function named getComputerChoice()
//that will randomly return rock, paper, or scissors
//Hint: use Math.random()
//create a new function called getHumanChoice() that takes
//valid choices [rock, paper, scissors]
//Track scores using variables: humanScore and computerScore
//initialized to 0
//create a new function called playRound() that
//accepts 2 parameters, humanChoice and computerChoice
//humanChoice parameter is case-insensitive
//on playRound, prompt who won
//five rounds
//new function named playGame(), playRound()
//and scores are declared inside playGame()

//Press the button to start
//Ask the user for an input (rock, paper, scissors)
//validate the input
//if input === rock || paper || scissors proceed
//generate computerChoice
//compare computerChoice to humanChoice
//if === draw
//else proceed to checking
//else ask to input a valid answer

function humanChoice(str) {
    str = prompt("Please choose between rock, paper, and scissors");
    alert(str);
}