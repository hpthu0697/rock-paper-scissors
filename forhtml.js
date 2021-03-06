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

function playGame() {
    

    
        let playerSelection = this.textContent;
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        if(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
            document.getElementById("messageBox").textContent = "You must enter one of the 3 choices to play the game! Click play again!";
        }
        if (playRound(playerSelection, computerSelection) === "You win!"){
            document.getElementById("messageBox").textContent =`You won the round!`;
            playerScore++;
            document.getElementById("playerScoreBox").textContent = `${playerSelection}\r\nYour score: ${playerScore}`
            document.getElementById("computerScoreBox").textContent = `${computerSelection}\r\nComputer Score: ${computerScore}`
        } else if (playRound(playerSelection, computerSelection) === "You lose!") {
            document.getElementById("messageBox").textContent = `You lost the round!!` 
            computerScore++;
            document.getElementById("playerScoreBox").textContent = `${playerSelection}\r\nYour score: ${playerScore}`
            document.getElementById("computerScoreBox").textContent = `${computerSelection}\r\nComputer Score: ${computerScore}`
        } else {
            document.getElementById("messageBox").textContent =`It's a tie!`;
            document.getElementById("playerScoreBox").textContent = `${playerSelection}\r\nYour score: ${playerScore}`
            document.getElementById("computerScoreBox").textContent = `${computerSelection}\r\nComputer Score: ${computerScore}`
        }
    
        if (playerScore === 5 && playerScore > computerScore) {
            document.getElementById("messageBox").textContent = `You won the game!`;
            document.getElementById("playerScoreBox").textContent = `${playerSelection}\r\nYour Final score: ${playerScore}`
            document.getElementById("computerScoreBox").textContent = `${computerSelection}\r\nComputer Final Score: ${computerScore}`
            playerScore = 0;
            computerScore = 0;
        }

        if (computerScore === 5 && computerScore > playerScore) {
            document.getElementById("messageBox").textContent = `You lost the game!`;
            document.getElementById("playerScoreBox").textContent = `${playerSelection}\r\nYour Final Score: ${playerScore}`
            document.getElementById("computerScoreBox").textContent = `${computerSelection}\r\nComputer Final Score: ${computerScore}`
            playerScore = 0;
            computerScore = 0;
        }
        
        console.log(playerScore);
        console.log(computerScore);
        console.log(playerSelection);
        console.log(computerSelection);
    
    
}
let playerScore = 0
let computerScore = 0

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", playGame)
});
/*
const body = document.querySelector(".body");
const messageBox = document.createElement("div");
messageBox.setAttribute("id", "messageBox");
messageBox.style.height = "50px";
messageBox.style.border = "thick";
messageBox.style.borderColor = "red";

body.appendChild(messageBox); */
