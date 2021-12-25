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
        document.getElementById("status-area-box").innerHTML = `人間は${translate(humanAnswer)}。コンピュータは${translate(computerAnswer)}。<br>今回は引き分け`;
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
        document.getElementById("status-area-box").innerHTML = `人間は${translate(humanAnswer)}。コンピュータは${translate(computerAnswer)}。<br>今回は人間が勝った`;
    }

    //Computer Win
    else {
        roundWinner = "computer";
        computerScore ++;
        document.getElementById("computer-score-number").innerHTML = computerScore;
        document.getElementById("status-area-box").innerHTML = `人間は${translate(humanAnswer)}。コンピュータは${translate(computerAnswer)}。<br>今回はコンピュータが勝った`;
    }
    
    scoreCounter();
    updateImage(humanAnswer, computerAnswer);

    return console.log(`You chose ${humanAnswer} and the computer chose ${computerAnswer}.  ${roundWinner} the winner.  Your score is ${humanScore} and the computer's score is ${computerScore}.`);
    

}

//trigger to end the game
function scoreCounter() {
    if (humanScore >= 3) {
        winner = "human";
        document.getElementById("status-area-box").innerHTML = `人間は成功です！`;
        document.getElementById("user-selection").innerHTML = `<div class="col-sm-4 text-center"><button onClick="bringBackSelection()" class="btn btn-secondary btn-lg">もう一回？</button></div>`
        return ;
    }

    if (computerScore >= 3) {
        winner = "computer";
        document.getElementById("status-area-box").innerHTML = `人間は失敗です！`;
        document.getElementById("user-selection").innerHTML = `<div class="col-sm-4 text-center"><button onClick="bringBackSelection()" class="btn btn-secondary btn-lg">もう一回？</button></div>`
        return;
    }

    else {
        return;
    }
}

function updateImage (humanAnswer, computerAnswer) {
    document.getElementById("selection-image-space-human").innerHTML = '<img src="media/' + humanAnswer + '.png" alt="' + humanAnswer + '">';

    document.getElementById("selection-image-space-computer").innerHTML = '<img src="media/computer' + computerAnswer + '.png" alt="' + computerAnswer + '">';
    console.log("test");
    return
} 


function bringBackSelection () {
    document.getElementById("user-selection").innerHTML = `
    <div class="col-sm-3 text-center">
        <button class="btn btn-secondary btn-lg" onclick="playRound('Rock')">石</button>
    </div>
    <div class="col-sm-3 text-center">
        <button class="btn btn-secondary btn-lg" onClick="playRound('Paper')">紙</button>
    </div>
    <div class="col-sm-3 text-center">
        <button class="btn btn-secondary btn-lg" onclick="playRound('Scissors')">鋏</button>
    </div>
    `;
    reset();
    return;
}

function reset () {
    humanScore = 0;
    computerScore = 0;
    document.getElementById("computer-score-number").innerHTML = "0";
    document.getElementById("human-score-number").innerHTML = "0";
    document.getElementById("status-area-box").innerHTML = `では、開始しましょう`;
    document.getElementById("selection-image-space-human").innerHTML = `
    <div class="image-container">
        <img src="media/無い.png" alt="this is where the human hand goes">
    </div>
    `;
    document.getElementById("selection-image-space-computer").innerHTML = `
    <div class="image-container">
        <img src="media/無い.png" alt="this is where the human hand goes">
    </div>
    `;
    return;
}

function translate(text) {
    let translatedText;
    if (text == "Rock") {
        translatedText = "石";
    }
    else if (text == "Paper") {
        translatedText = "紙";
    }
    else if (text == "Scissors") {
        translatedText = "鋏";
    }
    else {
        translatedText = "error"
    }
    return translatedText;
} 