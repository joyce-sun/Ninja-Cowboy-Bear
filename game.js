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
const roundResults = document.querySelector('.roundResults');


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
        roundWinner = 'You have tied this round!';
    }

    if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || 
    (playerSelection === 'Paper' && computerSelection ===  'Rock') || 
    (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        playerScore++;
        roundWinner = 'You have won this round!';
    }
    
    if ((playerSelection === 'Rock' && computerSelection === 'Paper') || 
    (playerSelection === 'Paper' && computerSelection ===  'Scissors') || 
    (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
        computerScore++;
        roundWinner = 'You have lost this round!';
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
    playerPoints.textContent = "Your Score: " + playerScore;
    computerPoints.textContent = "Computer Score: " + computerScore;
    roundResults.textContent = roundWinner;

    if (isGameOver()) {
        return playerScore > computerScore 
            ? (results.textContent = 'Congrats! You have won the game.')
            : (results.textContent = 'Sorry, you have lost the game.')
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundWinner = 0;

    playerPoints.textContent = "Your Score: " + playerScore;
    computerPoints.textContent = "Computer Score: " + computerScore; 
    results.textContent = '';
}




