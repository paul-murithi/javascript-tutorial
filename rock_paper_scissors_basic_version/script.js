//  const score = JSON.parse(localStorage.getItem('score'));
const btn1 = document.getElementById('js-rock-btn');
btn1.addEventListener('click', () => {
  playGame('rock');
});
const btn2 = document.getElementById('js-paper-btn');
btn2.addEventListener('click', () => {
  playGame('paper');
});
const btn3 = document.getElementById('js-scissors-btn');
btn3.addEventListener('click', () => {
  playGame('scissors');
})

const firstElement = document.body;
firstElement.addEventListener('keydown', (event) => {
    if(event.key === 'r'){
        playGame('rock');
    }
    else if (event.key === 'p'){
      playGame('paper');
    }
    else if(event.key === 's') {
      playGame('scissors');
    }
});


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
            let display_rslt = document.querySelector('#disp-par');

            display_rslt.innerHTML = `<b>You picked ${playerMove}. Computer picked ${computerMove}. ${result}</b>`;

        }

function resetScores() {
   //  score.wins = 0;
    //  score.losses = 0;
    //   score.ties = 0;
    //  localStorage.removeItem('score');

    let display_rslt = document.querySelector('#container');
    display_rslt.classList.add('disp-parr');

    display_rslt.innerHTML += "Are you sure you want to reset score?";

    let newButton = document.createElement('button');
    newButton.textContent = 'Yes';
    newButton.classList.add('cancel-btn');
    let newButton2 = document.createElement('button');
    newButton2.textContent = 'No';

    display_rslt.append(newButton);
    display_rslt.append(newButton2);

    let disp_par = document.getElementById('disp-par');

    newButton.addEventListener('click', () => {
      disp_par.innerHTML = "score reset";
      display_rslt.innerHTML = "";
    });

    newButton2.addEventListener('click', () => {
      display_rslt.innerHTML = "";
      disp_par.innerHTML = "";
    });

    }
/**
 * // Assume you have a 'score' object that holds the game data
var score = {
  wins: 0,
  losses: 0,
  ties: 0
};

// Function to load the game data from local storage
function loadGameData() {
  var savedScore = localStorage.getItem('score');
  if (savedScore) {
    score = JSON.parse(savedScore);
  }
}

// Function to save the game data to local storage
function saveGameData() {
  localStorage.setItem('score', JSON.stringify(score));
}

// Function to play the game
function playGame() {
  // Check if 'score' object exists and 'losses' property is not null
  if (score && score.losses !== null) {
    // Your game logic here
  } else {
    // Handle the case when the data is not available or not properly initialized
    // For example, you can reset the score to default values
    score = {
      wins: 0,
      losses: 0,
      ties: 0
    };
  }
  
  // Update the game data and save it to local storage
  // For example, increment the losses
  score.losses++;
  saveGameData();
}

 */

    