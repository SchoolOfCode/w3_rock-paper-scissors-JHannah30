const startButton = document.querySelector(".startGameButton");
const rockButton = document.querySelector(".rockButton");
const paperButton = document.querySelector("paperButton");
const scissorsButton = document.querySelector(".scissorsButton");
const gameResult = document.querySelector(".gameResult")



let numberOfGamesPlayed = 0;
let myWins = 0;
let myLosses = 0;
let myDraws = 0;
let replayGame = true;

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
    // ** Study this code some more until you can write it yourself with no help ** //
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
                myWins++;
                return 1;
            }
            if (computerMove === "paper") {
                myLosses++;
                return -1;
            }
            myDraws++;
            return 0;
        }
        // Paper Possibilities
        if (playerMove === "paper") {
            if  (computerMove === "rock") {
                myWins++;
                return 1;
            }
            if (computerMove === "scissors") {
                myLosses++;
                return -1;
            }
            myDraws++;
            return 0;
        }
        // Scissors Possibilities
        if (playerMove === "scissors") {
            if  (computerMove === "paper") {
                myWins++;
                return 1;
            }
            if (computerMove === "rock") {
                myLosses++;
                return -1;
            }
            myDraws++;
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

    console.log("You have played " + numberOfGamesPlayed + "games, with " + myWins + " wins, " + myLosses + " losses and " + myDraws + " draws.");

    // Ask if the player wants to play again //
    let playAgain = confirm("Would you like to play again?");

    if (playAgain === true) {
        numberOfGamesPlayed++;
        alert("Great. Let's see how we do next turn.");
    }

    else {
        replayGame = false;
        alert("Thanks for playing. Let's see how you did...");
        alert("You have played " + numberOfGamesPlayed + " games, with " + myWins + " wins, " + myLosses + " losses and " + myDraws + " draws.");
    }
    
}

