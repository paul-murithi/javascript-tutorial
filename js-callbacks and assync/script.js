let isAutoPlay = false;
let intervalID;

function autoPlay() {
    if(!isAutoPlay){
        intervalID = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
        isAutoPlay = true;
    }   else{
        clearInterval(intervalID);
        isAutoPlay = false;
    }
}

function pickComputerMove() {
    let computerMove = '';
    const randomNumber = Math.random();

        if (randomNumber > 0 && randomNumber < 1/3) {
            computerMove = 'rock';
        }
        else if (randomNumber >= 1/3 && randomNumber < 2/3) {
            computerMove = 'paper';
        }
        else if (randomNumber >= 2/3 && randomNumber < 1) {
            computerMove = 'scissors';
        }
        
        return computerMove;
    }

function playGame(playerMove) {
    const computerMove = pickComputerMove()

    let result = '';
        if (playerMove === 'scissors'){
                    if (computerMove === 'rock') {
                            result = 'You lose';
                        }
                    else if (computerMove === 'paper') {
                            result = 'You win';
                        }
                    else {
                            result = 'Tie';
                        }
        }  
        else if(playerMove === 'paper') {
                    if (computerMove === 'rock') {
                        result = 'You win';
                    }
                    else if (computerMove === 'paper') {
                        result = 'Tie';
                    }
                    else {
                        result = 'You lose';
                    }
        }
        else if(playerMove === 'rock') {
                    if (computerMove === 'rock') {
                        result = 'Tie';
                    }
                    else if (computerMove === 'paper') {
                        result = 'You lose';
                    }
                    else {
                        result = 'You win';
                    }
        }

        //  if(result === 'You win'){
        //      score.wins += 1;
        //  }
        //  else if(result === 'You lose'){
        //      score.losses += 1;
        // }
        //  else if(result === 'Tie') {
        //      score.ties += 1;
        //  }

        // localStorage.setItem('score', JSON.stringify(score));
        let display_rslt = document.querySelector('#display-rslt');

        display_rslt.innerHTML = `<b>You picked ${playerMove}. Computer picked ${computerMove}. ${result}</b>`;

    }

function resetScores() {
//  score.wins = 0;
//  score.losses = 0;
//   score.ties = 0;
//  localStorage.removeItem('score');
let display_rslt = document.querySelector('#display-rslt');
display_rslt.innerHTML = "<b>Score reset!</b>";
}