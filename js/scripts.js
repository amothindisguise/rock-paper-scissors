//Computer randomly chooses between rock, paper, and scissors using Math.random().
//The generated number will be multiplied by 3 and round down using Math.floor()
function getComputerChoice(choice) {
    choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return choice = "ROCK"; 
    } else if (choice == 1) {
        return choice = "PAPER";
    } else {
        return choice = "SCISSORS";
    }
}

//Human choice if not cancelled, returns coverted to upper case input and trimmed whitespaces
function getHumanChoice(choice) {
    choice = prompt("Please choose between rock, paper, and scissors.");
    
    //Only triggers when the cancel button is clicked
    if(choice == null) {
        throw alert("Game is cancelled.");
    } else return choice.toUpperCase().trim();
}

//Called when the button Start Game is clicked
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let rounds = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
    
        if(humanChoice != "ROCK" && humanChoice != "PAPER" && humanChoice != "SCISSORS") {
            humanChoice = alert("Invalid input! Please choose between ROCK, PAPER, and SCISSORS.");
            playRound();
        } else if(humanChoice === computerChoice) {
            alert("Round " + rounds + "\nDraw! You both chose " + humanChoice );
            alert("Your score: " + humanScore + "\nComputer's score: " + computerScore);
        } else if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
            alert("Round " + rounds + "\nYou win! Your " + humanChoice + " beats Computer's " + computerChoice + ".");
            humanScore++;
            alert("Your score: " + humanScore + "\nComputer's score: " + computerScore);
        } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
            alert("Round " + rounds + "\nYou win! Your " + humanChoice + " beats Computer's " + computerChoice + ".");
            humanScore++;
            alert("Your score: " + humanScore + "\nComputer's score: " + computerScore);
        } else if(humanChoice === "SCISSORS" && computerChoice === "PAPER") {
            alert("Round " + rounds + "\nYou win! Your " + humanChoice + " beats Computer's " + computerChoice + ".");
            humanScore++;
            alert("Round " + rounds + "\nYour score: " + humanScore + "\nComputer's score: " + computerScore);
        } else {
            alert("Round " + rounds + "\nYou lose! Computer's " + computerChoice + " beat your " + humanChoice + ".");
            computerScore++;
            alert("Your score: " + humanScore + "\nComputer's score: " + computerScore);
        }
    }

    //5 rounds
    for (rounds = 1; rounds <= 5; rounds++) {
        playRound();
    }

    //Summary of scores
    if (humanScore == computerScore) {
        alert("It's a DRAW! Your score: " + humanScore + "," + " Computer's score: " + computerScore + ".");
    } else if (humanScore > computerScore) {
        alert("You WIN the game! Your score is " + humanScore + " while Computer's score is " + computerScore + ".");
    } else alert("You LOSE! Computer's score " + computerScore + " beat your score " + humanScore + ".");
}