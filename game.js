let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const replayBtn = document.getElementById('replay');
const scissorsBtn = document.getElementById('scissors');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore'); 
const results = document.querySelector('.results');


rockBtn.addEventListener('click', () => handleClick('Rock'));
paperBtn.addEventListener('click', () => handleClick('Paper'));
scissorsBtn.addEventListener('click', () => handleClick('Scissors'));

replayBtn.addEventListener('click', () => resetGame());

function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    let rand = Math.random() * 2;
    return choice[Math.round(rand)];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        roundWinner = 'Tie';
    }

    if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || 
    (playerSelection === 'Paper' && computerSelection ===  'Rock') || 
    (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        playerScore++;
        roundWinner = 'Player';
    }
    
    if ((playerSelection === 'Rock' && computerSelection === 'Paper') || 
    (playerSelection === 'Paper' && computerSelection ===  'Scissors') || 
    (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
        computerScore++;
        roundWinner = 'Computer';
    }
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5;
}


function handleClick(playerSelection) {
    if (isGameOver()) {
        return;
    }

    let computerChoice = getComputerChoice();
    playRound(playerSelection, computerChoice);
    playerPoints.textContent = playerScore;
    computerPoints.textContent = computerScore; 

    if (isGameOver()) {
        return playerScore > computerScore 
            ? (results.textContent = 'You have won!')
            : (results.textContent = 'You have lost!')
    }

    console.log(playerSelection + ":" + computerChoice)
    console.log(playerScore + ":" + computerScore)
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundWinner = 0;

    playerPoints.textContent = playerScore;
    computerPoints.textContent = computerScore; 
    results.textContent = '';
}




