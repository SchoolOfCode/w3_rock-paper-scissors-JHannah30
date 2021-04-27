const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");
const gameResult = document.querySelector("#gameResult");
const gameDescription = document.querySelector("#gameDescription");
const wins = document.querySelector("#wins");
const losses = document.querySelector("#losses");
const draws = document.querySelector("#draws");
const gamesPlayed = document.querySelector("#gamesPlayed");
const usernameAlert = document.querySelector("#usernameAlert");
const playerStats = document.querySelector("#playerStats");

// Declaring variables for game stats //
let totalGamesPlayed = 0;
let totalWins = 0;
let totalLosses = 0;
let totalDraws = 0;

// Gathering user's name //
function getPlayerName() {
    let playerName = document.getElementById("playerName").value;
    if (playerName.length > 10) {
        usernameAlert.innerText = "Your name must be less than 10 characters."
    } else {
        usernameAlert.innerText = "";
        playerStats.innerText = "Take a look at your stats, " + playerName + ".";
    }
}

// Function for computer's choice //
function getComputerMove() {
    const computerChoices = ["rock", "paper", "scissors"];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

// Checking & announcing game result based on player choosing rock //
function playerChoosesRock() {
    let computerMove = getComputerMove();
    gameDescription.innerText = "The computer chose " + computerMove + ".";

    if (computerMove === "paper") {
        gameResult.innerText = "You lose.";
        totalLosses++;
        losses.innerText = totalLosses;
    } else if (computerMove === "scissors") {
        gameResult.innerText = "You win.";
        totalWins++;
        wins.innerText = totalWins;
    } else {
        gameResult.innerText = "Its a tie."
        totalDraws++;
        draws.innerText = totalDraws;
    }
    totalGamesPlayed++;
    gamesPlayed.innerText = totalGamesPlayed;
}
rockButton.addEventListener("click", playerChoosesRock);


// Checking & announcing game result based on player choosing paper //
function playerChoosesPaper() {
    let computerMove = getComputerMove();
    gameDescription.innerText = "The computer chose " + computerMove + ".";

    if (computerMove === "scissors") {
        gameResult.innerText = "You lose.";
        totalLosses++;
        losses.innerText = totalLosses;
    } else if (computerMove === "rock") {
        gameResult.innerText = "You win.";
        totalWins++;
        wins.innerText = totalWins;
    } else {
        gameResult.innerText = "Its a tie."
        totalDraws++;
        draws.innerText = totalDraws;
    }
    totalGamesPlayed++;
    gamesPlayed.innerText = totalGamesPlayed;
}
paperButton.addEventListener("click", playerChoosesPaper);

// Checking & announcing game result based on player choosing scissors //
function playerChoosesScissors() {
    let computerMove = getComputerMove();
    gameDescription.innerText = "The computer chose " + computerMove + ".";

    if (computerMove === "rock") {
        gameResult.innerText = "You lose.";
        totalLosses++;
        losses.innerText = totalLosses;
    } else if (computerMove === "paper") {
        gameResult.innerText = "You win.";
        totalWins++;
        wins.innerText = totalWins;
    } else {
        gameResult.innerText = "Its a tie."
        totalDraws++;
        draws.innerText = totalDraws;
    }
    totalGamesPlayed++;
    gamesPlayed.innerText = totalGamesPlayed;
}
scissorsButton.addEventListener("click", playerChoosesScissors);

/*
// While loop so user can keep playing //
while (replayGame === true) {

     // Get user input. Convert to lowercase and store it as 'playerMove' //
    let userInput = prompt("Do you choose rock, paper or scissors?");
    let playerMove = userInput.toLowerCase();


    // Ensure that user input is valid //
    while (playerMove !== "rock" && playerMove !== "paper" && playerMove !== "scissors") {
        alert("That wasn't a valid move. Try again using 'rock', 'paper' or 'scissors'");
        userInput = prompt("Do you choose rock, paper or scissors?");
        playerMove = userInput.toLowerCase();
    }

    // Function to generate random computer move from an array //
    const computerChoices = ["rock", "paper", "scissors"];

    function getComputerMove(computerChoices) {
        return computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }

    const computerMove = getComputerMove(computerChoices);
    console.log("Computer chose " + computerMove + " and you chose " + playerMove + ".");

    // Function to check winner //
    function getWinner(playerMove, computerMove) {

        // Rock Possibilities
        if (playerMove === "rock") {
            if  (computerMove === "scissors") {
                totalWins++;
                return 1;
            }
            if (computerMove === "paper") {
                totalLosses++;
                return -1;
            }
            totalDraws++;
            return 0;
        }
        // Paper Possibilities
        if (playerMove === "paper") {
            if  (computerMove === "rock") {
                totalWins++;
                return 1;
            }
            if (computerMove === "scissors") {
                totalLosses++;
                return -1;
            }
            totalDraws++;
            return 0;
        }
        // Scissors Possibilities
        if (playerMove === "scissors") {
            if  (computerMove === "paper") {
                totalWins++;
                return 1;
            }
            if (computerMove === "rock") {
                totalLosses++;
                return -1;
            }
            totalDraws++;
            return 0;
        }
    }

    // Comparing player and computer moves //
    let result = getWinner(playerMove, computerMove);
    alert("Your score = " + result + ".");

    // Announcing win, loss or draw //
    if (result === 0) {
        console.log("It's a draw.");
    }
    if (result === 1) {
        console.log("You win.");
    }
    if (result === -1) {
        console.log("You lose.");
    }

    // Ask if the player wants to play again //
    let playAgain = confirm("Would you like to play again?");

    if (playAgain === true) {
        totalGamesPlayed++;
        alert("Great. Let's see how we do next turn.");
    }

    else {
        replayGame = false;
        alert("Thanks for playing. Let's see how you did...");
        alert("You have played " + totalGamesPlayed + " games, with " + totalWins + " wins, " + totalLosses + " losses and " + totalDraws + " draws.");
    }
    
}
*/
