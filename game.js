function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    let rand = Math.random() * 2;
    return choice[Math.round(rand)];
}

function playRound(playerSelection, computerSelection) { 
    let ps = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if ((ps === 'Rock' && computerSelection === 'Scissors') || (ps === 'Paper' && computerSelection ===  'Rock') || (ps === 'Scissors' && computerSelection === 'Paper')) {
        return 'Win';
    }
    else if ((ps === 'Rock' && computerSelection === 'Paper') || (ps === 'Paper' && computerSelection ===  'Scissors') || (ps === 'Scissors' && computerSelection === 'Rock')) {
        return 'Lose';
    }
    else {
        return 'Tie';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Make your selection of Rock, Paper or Scissors:");
        if (playRound(playerSelection, getComputerChoice()) === 'Win') {
            playerScore++;
        }
        else if (playRound(playerSelection, getComputerChoice()) === 'Lose') {
            computerScore++;
        }
        console.log(playerScore + ":" + computerScore);
    }
    switch(isWin(playerScore, computerScore)) {
        case true:
            return 'You have won!';
            break;
        case false:
            return 'You have lost!';
            break;
        default:
            return "You have tied!";
            break;
    }
}

function isWin(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return true;
    }
    else if (playerScore < computerScore) {
        return false;
    }
}

// function isValidInput(ps) {
//     if ((ps === 'Rock') || (ps === 'Paper') || (ps === 'Scissors')) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

console.log(game());

