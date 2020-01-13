
// Start All the Variables //
var user;
var Computer;

var counter = document.getElementById("counter");
var gamePlayed = document.getElementById("gamePlayed");
var gamePlay = 0;
var userWonCounter = 0;
var computerWonCounter = 0;
var tieCounter = 0;
var randomNum;

var win = " You Win ";
var lose = " You Lose ";
var tie = " It's a Tie ";

var fire = document.getElementById("fire"); // fire button el
var water = document.getElementById("water"); // water button el
var grass = document.getElementById("grass"); // grass button el

//instantiating color for computer's choices
document.getElementById("water1").style.backgroundColor = '#BEBEBE';
document.getElementById("fire1").style.backgroundColor = '#BEBEBE';
document.getElementById("grass1").style.backgroundColor = '#BEBEBE';

var myChoice = document.getElementById("myChoice"); // user choice el
var computersChoice = document.getElementById("computersChoice"); // Computer choice el
var finalResult = document.getElementById("finalResult"); // finalResult el

// USER'S CHOICE
fire.addEventListener("click", function() {
    //if fire, set value equals to 0
    user = 0;
    myChoice.innerHTML = "You chose: fire";
    //computer generates its choice
    checkComputer();
    //comparing and making a final decision
    getResult();
});
water.addEventListener("click", function() {
    user = 1;
    myChoice.innerHTML = "You chose: water";
    checkComputer();
    getResult();
});
grass.addEventListener("click", function() {
    user = 2;
    myChoice.innerHTML = "You chose: grass";
    checkComputer();
    getResult();
});

// computer's CHOICE
function checkComputer() {

    // computer's choice
    randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) {
        document.getElementById("water1").style.backgroundColor = '#BEBEBE';
        document.getElementById("grass1").style.backgroundColor = '#BEBEBE';
        Computer = "fire";
        document.getElementById("fire1").style.backgroundColor = '#99C262';
    } else if (randomNum === 1) {
        document.getElementById("grass1").style.backgroundColor = '#BEBEBE';
        document.getElementById("fire1").style.backgroundColor = '#BEBEBE';
        Computer = "water";
        document.getElementById("water1").style.backgroundColor = '#99C262';
    } else {
        document.getElementById("water1").style.backgroundColor = '#BEBEBE';
        document.getElementById("fire1").style.backgroundColor = '#BEBEBE';
        Computer = "grass";
        document.getElementById("grass1").style.backgroundColor = '#99C262';
    }
    computersChoice.innerHTML = "Computer chose: " + Computer;

}


//this function compares the user's input and computer's choice
function getResult() {

    gamePlay++;

    // user's choice == FIRE (0)
    if (user ===  randomNum) {
        finalResult.innerHTML = tie;
        tieCounter++;
    }
    else if (user === 0 && randomNum === 1) {
        finalResult.innerHTML = lose;
        computerWonCounter++;
    }
    else if (user === 0 && randomNum === 2) {
        finalResult.innerHTML = win;
        userWonCounter++;
    }

    // user's choice == WATER (1)
    if (user === 1 && randomNum === 0) {
        finalResult.innerHTML = win;
        userWonCounter++;
    }
    else if (user === 1 && randomNum === 2) {
        finalResult.innerHTML = lose;
        computerWonCounter++;
    }

    // user's choice == GRASS (2)
    if (user === 2 && randomNum === 0) {
        finalResult.innerHTML = lose;
        computerWonCounter++;
    }

    else if (user === 2 && randomNum === 1) {
        finalResult.innerHTML = win;
        userWonCounter++;
    }
//display the score and counter
    counter.innerHTML = "User: " + userWonCounter + " Computer: " + computerWonCounter + " Tie: " + tieCounter;
    gamePlayed.innerHTML = "The game has been played " + gamePlay + " time(s)";
}
