let computerAnswer;
let humanAnswer;
let roundWinner;
let humanScore = 0;
let computerScore = 0;
let winner

function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3) +1;
    if (randomNumber == 3) {
        computerAnswer = "Rock";
    }
    else if (randomNumber == 2) {
        computerAnswer = "Paper";
    }
    else {
        computerAnswer = "Scissors";
    }
    return computerAnswer;
}

function playRound(humanAnswer) {
    computerPlay();
    
    //Tie
    if (humanAnswer == computerAnswer) {
        roundWinner = "Noone is"
    }

    //Human Win
    else if (
        (humanAnswer == "Rock" && computerAnswer == "Scissors") ||
        (humanAnswer == "Scissors" && computerAnswer == "Paper") ||
        (humanAnswer == "Paper" && computerAnswer == "Rock")
    ) { 
        roundWinner = "You are";
        humanScore ++;
    }

    //Computer Winß
    else {
        roundWinner = "The computer";
        computerScore ++;
    }
    
    return alert(`You chose ${humanAnswer} and the computer chose ${computerAnswer}.  ${roundWinner} the winner.  Your score is ${humanScore} and the computer's score is ${computerScore}.`);

}

function endOfGame(winner) {
    return alert(`The winner is ${winner}`)
}
