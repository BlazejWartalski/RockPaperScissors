let x = Math.random()*100;

function computerPlay(){
    if (x < 33) {
    return 'rock'
} else if (x < 66) {
    return 'scissors'
} else {
    return 'paper'
} }


function playRound() {
    if (playerSelection === computerSelection) {
        alert('draw');
    } else {
        alert('fuck you')
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));