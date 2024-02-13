let getComputerChoice = function() {
    return 'Paper'
};

let playRound = function(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            console.log('Paper beats rock, you win!.');
        } else if (computerSelection == 'scissors') {
            console.log('Scissors beat paper, you lose!');
        } else {
            console.log("It's a tie!")
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {
            console.log('Scissors beat paper, you win!.');
        } else if (computerSelection == 'rock') {
            console.log('Rock beats scissors, you lose!');
        } else {
            console.log("It's a tie!")
        }
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            console.log('Paper beats rock, you lose.');
        } else if (computerSelection == 'scissors') {
            console.log('Rock beats scissors, you win!');
        } else {
            console.log("It's a tie!")
        }
    } else {
        console.log("You choice wasn't in the options. Ending game");
    }
};

let playGame = function() {
    playerChoice = prompt("What is your choice [rock/paper/scissors]?");
    playRound(playerChoice, getComputerChoice());
};

playGame();