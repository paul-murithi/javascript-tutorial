let result = '';

const score = JSON.parse(localStorage.getItem('score'));

function playGame(guess) {
    const computerMove = chooseComputerMove();

    if (computerMove === 'heads' && guess === 'heads'){
        result = 'You won';
    }
    else if(computerMove === 'Tails' && guess === 'heads') {
        result = 'You lose';
    }

    else if(computerMove === 'heads' && guess === 'tails'){
        result = 'You lose';
    }      
    else if(computerMove === 'Tails' && guess === 'tails') {
        result = 'You win';
    }

    if(result === 'You won'){
        score.wins += 1;
    }
    else if(result === 'You lose') {
        score.losses += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    alert(`${result}!, You chose ${guess} Correct guess is:${computerMove}
    Wins: ${score.wins}, Losses: ${score.losses}
    `);
}
function chooseComputerMove() {
    const randomNumber = Math.random();
    if (randomNumber > 0 && randomNumber <= 1/2){
        computerMove = 'heads';
    }
    else if(randomNumber > 1/2) {
        computerMove = 'Tails';
    }

    return computerMove;
}
