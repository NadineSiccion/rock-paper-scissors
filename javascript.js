const body = document.querySelector('body');
let getComputerChoice = function() {
    CHOICES = ['Rock', 'Paper', 'Scissors']
    randomIndex = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[randomIndex]
};

// point system
let playerScore = 0;
let computerScore = 0;
let addPlayerScore = function() {
    playerScore += 1;
}
let addComputerScore = function() {
    computerScore += 1;
}

const announcementP = document.createElement('p');

let announceWinner = function(winner) {
    if (winner.toLowerCase() == 'player') {
        announcementP.textContent = 'YOU are the winner!'
        body.appendChild(announcementP);
    } else if (winner.toLowerCase() == 'computer') {
        announcementP.textContent = 'Computer wins!'
        body.appendChild(announcementP);
    }
}

let removeButtonEventListeners = function() {
    choiceBtns.forEach((button) => {button.removeEventListener('click', buttonClick)});
}

let checkForWinner = function(max=5) {
    if (playerScore >= max) {
        console.log('player wins')
        announceWinner('player');
        removeButtonEventListeners();
    } else if (computerScore >= max) {
        console.log('computer wins')
        announceWinner('computer');
        removeButtonEventListeners();
    }
}


// game logic
let playRound = function(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            winnerP.textContent = 'Paper beats rock, you win!.';
            addPlayerScore();
        } else if (computerSelection == 'scissors') {
            winnerP.textContent = 'Scissors beat paper, you lose!';
            addComputerScore()
        } else {
            winnerP.textContent = "It's a tie!"
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {
            winnerP.textContent = 'Scissors beat paper, you win!.';
            addPlayerScore();
        } else if (computerSelection == 'rock') {
            winnerP.textContent = 'Rock beats scissors, you lose!';
            addComputerScore();
        } else {
            winnerP.textContent = "It's a tie!"
        }
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            winnerP.textContent = 'Paper beats rock, you lose.';
            addComputerScore();
        } else if (computerSelection == 'scissors') {
            winnerP.textContent = 'Rock beats scissors, you win!';
            addPlayerScore();
        } else {
            winnerP.textContent = "It's a tie!"
        }
    } else {
        winnerP.textContent = "You choice wasn't in the options. Ending game";
    }
};

// dynamic webpage
const buttonDiv = document.querySelector('.buttons');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

const resultsDiv = document.createElement('div');
resultsDiv.classList.add('results');

const choicesP = document.createElement('p');
choicesP.setAttribute('name', 'choices');

const winnerP = document.createElement('p');
choicesP.setAttribute('name',"winner");

const pointsP = document.createElement('p');
choicesP.setAttribute('name', "points");

// button functionality
let buttonClick = function(e) {
    playerChoice = (e.target.textContent);
    computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice)

    choicesP.innerHTML = `Player chose: ${playerChoice}.<br />
    Computer chose: ${computerChoice}.`

    pointsP.innerHTML = `Player score: ${playerScore} <br />Computer score: ${computerScore}`

    resultsDiv.appendChild(choicesP);
    resultsDiv.appendChild(winnerP);
    resultsDiv.appendChild(pointsP);

    body.appendChild(resultsDiv);
    checkForWinner();
}

const choiceBtns = document.querySelectorAll('.choice');
choiceBtns.forEach(button => {button.addEventListener('click', buttonClick);
    
});