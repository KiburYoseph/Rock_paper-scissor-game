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
/*Checks Game Outcome*/
function gameOutcome(playerInput) { 
    let computerOptions = ["Rock", "Paper", "Scissor"];
    computerChoice = computerOptions[Math.floor(Math.random() * 3)];

    if (computerChoice == playerInput) {
        return console.log(`Computer Also Chose ${computerChoice}. That Was A Tie.`),
            gameNumber ++;
    }
    else if ((computerChoice == "Rock" && playerInput == "Scissor") || (computerChoice == "Scissor" && playerInput == "Paper") || (computerChoice == "Paper" && playerInput == "Rock")) {
        return console.log(`Computer Chose ${computerChoice}! Computer Gets A Point!`),
            gameNumber ++,
            computerCounter ++;
    }
    else {
        return console.log(`Computer Chose ${computerChoice}! You Get A Point!`), 
            gameNumber ++, 
            layerCounter ++;
    }
}

    /*Introduction*/
    document.getElementById("nameButton").onclick = function(){
        if (input.value == ""){
            document.getElementById("nameIntro").textContent = "You wrote nothing. Please Enter A Name:"
        }
        else{
            let playerName = input.value;
            document.getElementById("nameIntro").value = playerName;
            document.getElementById("namingSection").style.display = "none";
            document.getElementById("introSection").style.display = "flex";
            document.getElementById("introduction").innerHTML = `Hey ${playerName}! We're Playing Rock Paper Scissor. First To Five Points Wins!`
            console.log(`Player's Name Is: ${playerName}`)
        }
    }

    document.getElementById("introButton").onclick = function(){
        document.getElementById("introSection").style.display = "none";
        document.getElementById("gameplaySection").style.display = "flex";  
    }
    while (computerCounter < 5 && playerCounter < 5){
        /*Gets User Input*/
        document.getElementById("rockButton").onclick = function(){
            gameOutcome("Rock");
        }
        document.getElementById("paperButton").onclick = function(){
            gameOutcome("Paper");
        }
        document.getElementById("scissorButton").onclick = function(){
            gameOutcome("Scissor");
        }
    }
/*Final Game Decision
let difference = playerCounter - computerCounter;

if (difference < 0) {
    difference = difference + 2(-1 * difference)
}

if (playerCounter == 5) {
    console.log(`Congratulations! YOU WON ${playerName}. You beat me by ${differencePlayer} points!`);
}

else {
    console.log(`Too Bad. You Lost by ${differenceComputer} points ${playerName}!`)
}*/