//This program will play Rock Paper Scissors between the user and computer//

//Computer makes a random choice for rock-paper-scissors//
function computerPlay() {
    //Get a random number and turn that into a RPS selection//
    let randomNumber = Math.random()*100;
    if (randomNumber <33) {
        return "rock";
    }  else if (randomNumber<66){
        return "paper";
    }  else {
        return "scissors";
    }
}

// console.log(computerPlay);//

//Get user input for choice of rock, paper, or scissors//
function playerSelection(){
    let userInput = prompt("Rock, Paper or Scissors?")
    return userInput.toLowerCase()
}

let playerScore = 0;
let computerScore = 0;

//Play a round of rock, paper, scissors.  Compare computerSelection with playerSelection to determine who won.//
function playRound(playerSelection, computerSelection){
    // console.log(playerSelection); //
    // console.log(computerSelection); //
    if (playerSelection == "rock"){
        if (computerSelection =="rock"){
            return "Tie!  You both chose Rock"
        }
        if (computerSelection == "paper"){
            computerScore = computerScore +1;
            return "You lose!  Paper beats Rock"
        }
        if (computerSelection == "scissors"){
            playerScore = playerScore + 1;
            return "You win!  Rock beats Paper"
        }
    }
    if (playerSelection == "paper"){
        if (computerSelection =="paper"){
            return "Tie!  You both chose Paper"
        }
        if (computerSelection == "rock"){
            playerScore = playerScore + 1;
            return "You Win!  Paper beats Rock"
        }
        if (computerSelection == "scissors"){
            computerScore = computerScore +1;
            return "You lose!  Scissors beats Paper"
        }
    }  else {
        if (computerSelection =="scissors"){
            return "Tie!  You both chose Scissors"
        }
        if (computerSelection == "paper"){
            playerScore = computerScore +1;
            return "You Win!  Scissors beats Paper"
        }
        if (computerSelection == "rock"){
            ComputerScore = playerScore + 1;
            return "You lose!  Rock beats Scissors"
        }
    }
}

// playRound(playerSelection(), computerPlay()); //
// console.log(playRound(playerSelection(), computerPlay())); //
// console.log(playerScore); //
// console.log(computerScore); //

function game(){
    for (let i = 0; i < 5; i++){
        console.log(playRound(playerSelection(), computerPlay()));
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore);
    }
}

game();
