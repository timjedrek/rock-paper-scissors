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
        roundWinner = "tie"
        document.getElementById("status-area-box").innerHTML = `You chose ${humanAnswer} and the computer chose ${computerAnswer}. <h5>It's a tie<h5>`;
    }

    //Human Win
    else if (
        (humanAnswer == "Rock" && computerAnswer == "Scissors") ||
        (humanAnswer == "Scissors" && computerAnswer == "Paper") ||
        (humanAnswer == "Paper" && computerAnswer == "Rock")
        ) { 
        roundWinner = "human";
        humanScore ++;
        document.getElementById("human-score-number").innerHTML = humanScore;
        document.getElementById("status-area-box").innerHTML = `You chose ${humanAnswer} and the computer chose ${computerAnswer}. <h5>Human wins this round<h5>`;
    }

    //Computer Win
    else {
        roundWinner = "computer";
        computerScore ++;
        document.getElementById("computer-score-number").innerHTML = computerScore;
        document.getElementById("status-area-box").innerHTML = `You chose ${humanAnswer} and the computer chose ${computerAnswer}. <h5>Computer wins this round<h5>`;
    }
    
    scoreCounter();
    updateImage();

    return console.log(`You chose ${humanAnswer} and the computer chose ${computerAnswer}.  ${roundWinner} the winner.  Your score is ${humanScore} and the computer's score is ${computerScore}.`);
    

}

//trigger to end the game
function scoreCounter() {
    if (humanScore >= 3) {
        winner = "human";
        document.getElementById("status-area-box").innerHTML = `Human is the winner of the game. play again?`;
        document.getElementById("user-selection").innerHTML = `<button onClick="bringBackSelection()">もう一回？</button>`
        return ;
    }

    if (computerScore >= 3) {
        winner = "computer";
        document.getElementById("status-area-box").innerHTML = `Computer is the winner of the game. Play again?`;
        document.getElementById("user-selection").innerHTML = `<button onClick="bringBackSelection()">もう一回？</button>`
        return;
    }

    else {
        return;
    }
}

function updateImage () {
 /*   document.getElementById("selection-image-space-human").innerHTML = `<img src="media/${humanAnswer}.png" alt="${humanAnswer}">`;
    
    document.getElementById("selection-image-space-computer").innerHTML = `<img src="media/${computerAnswer}.png" alt="${humanAnswer}">`;*/
    return
} 

function bringBackSelection () {
    document.getElementById("user-selection").innerHTML = `
    <button onclick="playRound('Rock')">石</button>
    <button onClick="playRound('Paper')">紙</button>
    <button onclick="playRound('Scissors')">鋏</button>
    `;
    reset();
    return;
}

function reset () {
    humanScore = 0;
    computerScore = 0;
    document.getElementById("computer-score-number").innerHTML = "0";
    document.getElementById("human-score-number").innerHTML = "0";
    document.getElementById("status-area-box").innerHTML = `では、開始しましょう`
    return
}