let computerPlay = (possibleMoves) => {

return possibleMoves[Math.floor(Math.random()*possibleMoves.length)]
}
const possibleMoves = (["rock", "paper","scissors"])

var computerSelection = computerPlay(possibleMoves)

var playerSelection = "";

function chooseYourMove () {
    let playerChoice = prompt("Rock, paper or scissors?");
        if (playerChoice.toLowerCase() == "rock") {
            playerSelection = "rock";
        } else if (playerChoice.toLowerCase() == "paper") {
            playerSelection = "paper";
        } else if (playerChoice.toLowerCase() == "scissors") {
            playerSelection = "scissors"
        } else {
            alert ("Incorrect input. This field only accepts rock paper scissors. Please try again.");
            return chooseYourMove();
        }
}

var playerScore = 0;
var computerScore = 0;



function playRound(playerSelection, computerSelection) {

    console.log(playerSelection);
    console.log(computerSelection);

    if (playerSelection == computerSelection) {
         return 'its a draw';
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore ++ ;
        return 'you win' 
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore ++ ;
        return 'you win' 
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore ++ ;
        return 'you win' 
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore ++ ;
        return 'you lose'
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore ++ ;
        return 'you lose'
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore ++ ;
        return 'you lose'
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        chooseYourMove();
        console.log(playRound(playerSelection, computerPlay(possibleMoves)))
    }
    if (computerScore > playerScore) {
        return "The machine wins. Try again!"
    } else if (computerScore < playerScore) {
        return "You win! Congratulations!"
    } else {
        return "The game ended in a draw. So close!"
    }
}


console.log(game())