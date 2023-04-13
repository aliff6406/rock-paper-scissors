let playerScore = 0;
let computerScore = 0;

let playerSelection;
let computerSelection;

const buttons = document.querySelectorAll('.btn');
const resultsDiv = document.querySelector('#results');
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
const winner = document.querySelector('#winner');

const displayResults = (result) => {
    resultsDiv.textContent = result;
};

const getComputerChoice = () => {
    let random = Math.floor(Math.random() * 3) + 1;
    switch(random) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        default:
            return 'scissors';
    };
};

const playRound = () => {
    if (playerSelection === computerSelection) {
        displayResults('It\'s a tie!');
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        displayResults('You Lose! Paper beats Rock');
        computerScore++;
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        displayResults('You Win! Rock beats Scissors');
        playerScore++;
    }
    else if (playerSelection === 'scissors' && computerSelection == 'rock') {
        displayResults('You Lose! Rock beats Scissors');
        computerScore++;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        displayResults('You Win! Scissors beats Paper');
        playerScore++;
    }
    else if(computerSelection === 'rock') {
        displayResults('You Win! Paper beats Rock');
        playerScore++;
    }
    else {
        displayResults('You Lose! Scissors beats Paper');
        computerScore++;
    }
};

const game = () => {
    playRound();
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;

    if(playerScore === 5) {
        winner.textContent = 'You win!';
        playerScore = 0;
        computerScore = 0;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
    }
    else if(computerScore === 5) {
        winner.textContent = 'You lose!';
        playerScore = 0;
        computerScore = 0;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
    }

    
};

buttons.forEach(button => {button.addEventListener('click', () => {
    playerSelection = button.id;
    computerSelection = getComputerChoice();
    
    game();
})})
