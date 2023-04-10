const getComputerChoice = () => {
    let random = Math.floor(Math.random() * 3) + 1;
    switch(random) {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        default:
            return 'Scissors';
    };
};

const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
       return 'It\'s a tie!'
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You Lose! Paper beats Rock';
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Win! Rock beats Scissors';
    }
    else if (playerSelection === 'scissors' && computerSelection == 'rock') {
        return 'You Lose! Rock beats Scissors';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Win! Scissors beats Paper';
    }
    else if(computerSelection === 'rock') {
        return 'You Win! Paper beats Rock'
    }
    else {
        return 'You Lose! Scissors beats Paper'
    }
};

const game = (playerSelection) => {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound(playerSelection, getComputerChoice);
        if (result.includes('You Lose')) {
            computerScore++;
        }
        else if (result.includes('You Win')) {
            playerScore++;
        }
        else {
            // Do nothing
        }
    }
};

let playerSelection = prompt('Enter Rock Paper or Scissors');
game(playerSelection);