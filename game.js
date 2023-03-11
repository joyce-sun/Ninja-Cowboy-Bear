let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore'); 
const results = document.querySelector('.results');


rockBtn.addEventListener('click', () => playRound('Rock', getComputerChoice()));
paperBtn.addEventListener('click', () => playRound('Paper', getComputerChoice()));
scissorsBtn.addEventListener('click', () => playRound('Scissors', getComputerChoice()));

function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    let rand = Math.random() * 2;
    return choice[Math.round(rand)];
}

function playRound(playerSelection, computerSelection) { 
    if (isGameOver()) {
        switch(isWin(playerScore, computerScore)) {
            case true:
                results.textContent = 'You have won!';
                break;
            case false:
                results.textContent = 'You have lost!';
                break;
            default:
                results.textContent = "It's a tie!";
                break;
        }
    }

    if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || 
    (playerSelection === 'Paper' && computerSelection ===  'Rock') || 
    (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        playerScore++;
        console.log(playerSelection + ":" + computerSelection)
        roundWinner = 'Player';
        playerPoints.textContent = playerScore;
        computerPoints.textContent = computerScore;
    }
    else if ((playerSelection === 'Rock' && computerSelection === 'Paper') || 
    (playerSelection === 'Paper' && computerSelection ===  'Scissors') || 
    (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
        computerScore++
        console.log(playerSelection + ":" + computerSelection)
        roundWinner = 'Computer';
        playerPoints.textContent = playerScore;
        computerPoints.textContent = computerScore;
    }
    else {
        console.log(playerSelection + ":" + computerSelection)
        roundWinner = 'Tie';
        playerPoints.textContent = playerScore;
        computerPoints.textContent = playerScore;
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

function isWin() {
    if (playerScore > computerScore) {
        return true;
    }
    else if (playerScore < computerScore) {
        return false;
    }
}





