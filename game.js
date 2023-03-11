let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    let rand = Math.random() * 2;
    return choice[Math.round(rand)];
}

function playRound(playerSelection, computerSelection) { 
    if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || 
    (playerSelection === 'Paper' && computerSelection ===  'Rock') || 
    (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        playerScore++;
        console.log(playerScore + ":" + computerScore)
        return 'Player';
    }
    else if ((playerSelection === 'Rock' && computerSelection === 'Paper') || 
    (playerSelection === 'Paper' && computerSelection ===  'Scissors') || 
    (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
        computerScore++
        console.log(playerScore + ":" + computerScore)
        return 'Computer';
    }
    else {
        console.log(playerScore + ":" + computerScore)
        return 'Tie';
    }
}

function isGameOver() {
    return playerScore == 5 || computerScore == 5;
}

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     for (let i = 0; i < 5; i++) {
//         let playerSelection = prompt("Make your selection of Rock, Paper or Scissors:");
//         if (playRound(playerSelection, getComputerChoice()) === 'Player') {
//             playerScore++;
//         }
//         else if (playRound(playerSelection, getComputerChoice()) === 'Computer') {
//             computerScore++;
//         }
//         console.log(playerScore + ":" + computerScore);
//     }
//     switch(isWin(playerScore, computerScore)) {
//         case true:
//             return 'You have won!';
//             break;
//         case false:
//             return 'You have lost!';
//             break;
//         default:
//             return "It's a tie!";
//             break;
//     }
// }

function isWin(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return true;
    }
    else if (playerScore < computerScore) {
        return false;
    }
}

// UI

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');


rockBtn.addEventListener('click', () => playRound('Rock', getComputerChoice()));
paperBtn.addEventListener('click', () => playRound('Paper', getComputerChoice()));
scissorsBtn.addEventListener('click', () => playRound('Scissors', getComputerChoice()));



