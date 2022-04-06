let computerPlay = (possibleMoves) => {

return possibleMoves[Math.floor(Math.random()*possibleMoves.length)]
}
const possibleMoves = (["rock", "paper","scissors"])

var computerSelection = computerPlay(possibleMoves)

// var playerSelection = "";
// function chooseYourMove () {
//     let playerChoice = prompt("Rock, paper or scissors?");
//         if (playerChoice.toLowerCase() == "rock") {
//             playerSelection = "rock";
//         } else if (playerChoice.toLowerCase() == "paper") {
//             playerSelection = "paper";
//         } else if (playerChoice.toLowerCase() == "scissors") {
//             playerSelection = "scissors"
//         } else {
//             alert ("Incorrect input. This field only accepts rock paper scissors. Please try again.");
//             return chooseYourMove();
//         }
// }

var playerScore = 0;
var computerScore = 0;



function playRound(playerSelection, computerSelection) {

    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playerScore)
    console.log(computerScore)
    if (playerScore == 5) {
        alert('Youre the winner!!! Refresh the page to play again.')
    } else if (computerScore == 5) {
        alert('Computer wins. Refresh the page to play again.')
    }
    else if (playerSelection == computerSelection) {
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


const btn = document.querySelector('#rock');
btn.addEventListener('click', () => {
    playerSelection = "rock";
    content.textContent = playRound(playerSelection, computerPlay(possibleMoves));

    score.textContent = "Your score:" + playerScore;
    pcscore.textContent = "Computer score" + computerScore;
    winner
  });

const btn2 = document.querySelector('#paper');
btn2.addEventListener('click', () => {
    playerSelection = "paper";
    content.textContent = playRound(playerSelection, computerPlay(possibleMoves));

    score.textContent = "Your score:" + playerScore;
    pcscore.textContent = "Computer score" + computerScore;
    winner
  });

const btn3 = document.querySelector('#scissors');
btn3.addEventListener('click', () => {
    playerSelection = "scissors";
    content.textContent = playRound(playerSelection, computerPlay(possibleMoves));

    score.textContent = "Your score:" + playerScore;
    pcscore.textContent = "Computer score" + computerScore;
    winner
  });

const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');

const score = document.createElement('div');
score.classList.add('score');

const pcscore = document.createElement('div');
pcscore.classList.add('pcscore');

const winner = document.createElement('div');
winner.classList.add('winner');

container.appendChild(content);
container.appendChild(score);
container.appendChild(pcscore);
container.appendChild(winner);