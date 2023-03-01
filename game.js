function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    let rand = Math.random() * 2;
    return choice[Math.round(rand)];
}

function playRound(playerSelection, computerSelection) { 
    let ps = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if ((ps === 'Rock' && computerSelection === 'Scissors') || (ps === 'Paper' && computerSelection ===  'Rock') || (ps === 'Scissors' && computerSelection === 'Paper')) {
        return true;
    }
    else if ((ps === 'Rock' && computerSelection === 'Paper') || (ps === 'Paper' && computerSelection ===  'Scissors') || (ps === 'Scissors' && computerSelection === 'Rock')) {
        return false;
    }
    else {
        return 'You Tie!'
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Make your selection of Rock, Paper or Scissors:");
        if (playRound(playerSelection, getComputerChoice()) === true) {
            playerScore++;
        }
        else if (playRound(playerSelection, getComputerChoice()) === false) {
            computerScore++;
        }
        // console.log(playerScore + ":" + computerScore);
    }

    if 
}

function whoWon(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return true;
    }
    else {
        return false;
    }
}


