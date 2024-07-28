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

function getHumanChoice(choice) {
    choice = prompt("Please choose between rock, paper, and scissors.");
    return choice.toUpperCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let rounds = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
    
        if(humanChoice === computerChoice) {
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

    for (rounds = 1; rounds <= 5; rounds++) {
        playRound();
    }

    if (humanScore == computerScore) {
        alert("It's a DRAW! Your score: " + humanScore + "," + " Computer's score: " + computerScore + ".");
    } else if (humanScore > computerScore) {
        alert("You WIN the game! Your score is " + humanScore + "while Computer's score is " + computerScore + ".");
    } else alert("You LOSE! Computer's score " + computerScore + " beat your score " + humanScore + ".");
}