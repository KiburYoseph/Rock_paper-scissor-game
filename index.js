/*Game Counters*/
let playerName = "Player"
let playerCounter = 0;
let computerCounter = 0;
let gameNumber = 1;
let input = document.getElementById("nameInput")
/*Changed Input Into Proper Capitalization*/
function capitalize(x) {
    let y = x.slice(1, x.length);
    y = y.toLowerCase();
    x = x.slice(0,1);
    x = x.toUpperCase();
    x += y;
    return x;
}

    /*Introduction*/
    /*document.getElementById("nameButton").onclick = function(){
        if (input.value = ""){
            document.getElementById("nameIntro").innerHTML = "You wrote nothing. Please Enter A Name:"
        }
        else{
            let playerName = input.value;
            document.getElementById("nameIntro").innerHTML = playerName;
            console.log(playerName)
        }
    }
    /*alert(`Hey ${playerName}! We're Playing Rock Paper Scissor. First To Five Points Wins!`)*/

while (computerCounter < 5 && playerCounter < 5){


    /*Gets User Input*/
    let playerInput = window.prompt(`Game Number ${gameNumber}! Rock Paper Scissor Shoot!`);

    playerInput = capitalize(playerInput);

    /*Checks If Input Is Correct*/
    while (playerInput == "") {
        console.log("You Wrote Nothing")
        playerInput = window.prompt("Rock Paper Scissor Shoot!");
        playerInput = capitalize(playerInput);
    } 
    while(playerInput != "Rock" && playerInput != "Paper" && playerInput != "Scissor"){
            console.log("Please Enter A Valid Input!");
            playerInput = window.prompt("Rock Paper Scissor Shoot!");
            playerInput = capitalize(playerInput);
        }

    /*Computer Options And A Function To Pick Randomly*/
    let computerOptions = ["Rock", "Paper", "Scissor"];

    computerChoice = computerOptions[Math.floor(Math.random() * 3)];

    /*Condition To Decide Game Outcome And Increase Counters*/
    if (computerChoice == playerInput) {
        console.log(`Computer Also Chose ${computerChoice}. That Was A Tie.`);
        gameNumber ++;
    }
    else if ((computerChoice == "Rock" && playerInput == "Scissor") || (computerChoice == "Scissor" && playerInput == "Paper") || (computerChoice == "Paper" && playerInput == "Rock")) {
        console.log(`Computer Chose ${computerChoice}! Computer Gets A Point!`);
        gameNumber ++;
        computerCounter ++;
    }

    else {
        console.log(`Computer Chose ${computerChoice}! You Get A Point!`);
        gameNumber ++;
        playerCounter ++;
    }
}
/*Final Game Decision*/
let differencePlayer = playerCounter - computerCounter;
let differenceComputer = computerCounter - playerCounter;
if (playerCounter == 5) {
    console.log(`Congratulations! YOU WON ${playerName}. You beat me by ${differencePlayer} points!`);
}

else {
    console.log(`Too Bad. You Lost by ${differenceComputer} points ${playerName}!`)
}