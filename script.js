let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {

    const choices = ["rock", "paper", "scissors"];

    // Computer selects a random choice
    const computerChoice =
        choices[Math.floor(Math.random() * choices.length)];

    let result = "";

    // Compare player and computer choices
    if (playerChoice === computerChoice) {

        result = "It's a Draw!";

    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {

        result = "You Win! 🎉";
        playerScore++;

    } else {

        result = "Computer Wins! 🤖";
        computerScore++;
    }

    // Update scoreboard
    document.getElementById("playerScore").innerText = playerScore;

    document.getElementById("computerScore").innerText = computerScore;

    // Display result
    document.getElementById("result").innerText = result;

    document.getElementById("details").innerText =
        "You chose " + playerChoice +
        " | Computer chose " + computerChoice;
}

// Reset scores
function resetGame() {

    playerScore = 0;
    computerScore = 0;

    document.getElementById("playerScore").innerText = 0;

    document.getElementById("computerScore").innerText = 0;

    document.getElementById("result").innerText = "Let's Play!";

    document.getElementById("details").innerText =
        "Score reset. Select your choice!";
}