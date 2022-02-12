function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"]
    const randomNum = Math.floor(Math.random() * choices.length);
    return choices[randomNum];
    }


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    switch (true) {
        case (playerSelection === "rock" && computerSelection === "scissors"):
        case (playerSelection === "paper" && computerSelection === "rock"):
        case (playerSelection === "scissors" && computerSelection === "paper"):
            return "You win!";

        case (playerSelection === "rock" && computerSelection === "paper"):
        case (playerSelection === "paper" && computerSelection === "scissors"):
        case (playerSelection === "scissors" && computerSelection === "rock"): 
            return "You lose!"

        case (playerSelection ===  computerSelection):
            return "It's a tie!"
    } 
}

function game() {
    let playerScore = 0
    let computerScore = 0

    // round 1
    
    for (let i = 1; i < 6; i++) {
        let playerSelection = prompt(`Round ${i} of 5: Rock, Paper, Scissors?`)
        let computerSelection = computerPlay();
    
        playRound(playerSelection, computerSelection);
        if(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
            return alert("You must enter one of the 3 choices to play the game! Click play again!");
        }
        if (playRound(playerSelection, computerSelection) === "You win!"){
            alert(`You won!\nScore:\nYou ${playerScore + 1} - ${computerScore} Computer`);
            playerScore++;
        } else if (playRound(playerSelection, computerSelection) === "You lose!") {
            alert(`Computer won!\nScore:\nYou ${playerScore} - ${computerScore + 1} Computer`)
            computerScore++;
        } else {
            alert(`It's a tie!\nScore:\nYou ${playerScore} - ${computerScore} Computer`)
        }
        
        if (i>=5) {
            if (playerScore > computerScore) {
                alert("You won the game of 5!");
            } else if (computerScore > playerScore) {
                alert("Computer won the game of 5!");
            } else {
                alert("The game of 5 is a tie!"); 
            }
        } 

       console.log(playerScore);
        console.log(computerScore);
        console.log(playerSelection);
        console.log(computerSelection);
    }

}


