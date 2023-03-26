/*Game Counters*/
let playerName;
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
        return document.getElementById("outcomeInfo").innerHTML = `Computer Also Chose ${computerChoice}. That Was A Tie.`,
            gameNumber ++, 
            document.getElementById("outcomeInfo").style.display = "flex";
    }
    else if ((computerChoice == "Rock" && playerInput == "Scissor") || (computerChoice == "Scissor" && playerInput == "Paper") || (computerChoice == "Paper" && playerInput == "Rock")) {
        return document.getElementById("outcomeInfo").innerHTML = `Computer Chose ${computerChoice}! Computer Gets A Point!`,
            gameNumber ++,
            computerCounter ++, 
            document.getElementById("outcomeInfo").style.display = "flex";
    }
    else {
        return document.getElementById("outcomeInfo").innerHTML = `Computer Chose ${computerChoice}! You Get A Point!`, 
            gameNumber ++, 
            playerCounter ++, 
            document.getElementById("outcomeInfo").style.display = "flex";
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
            document.getElementById("playerName").innerHTML = `${playerName}`;
        }
    }

    document.getElementById("introButton").onclick = function(){
        document.getElementById("introSection").style.display = "none";
        document.getElementById("gameplaySection").style.display = "flex";  
    }

        /*Gets User Input*/
        document.getElementById("rockButton").onclick = function(){
            gameOutcome("Rock");
            document.getElementById("gameInfo").innerHTML = `Game Number:${gameNumber}. Rock Paper Scissor Shoot`
            if (playerCounter == 5 || computerCounter == 5){
                finalDecision();
            }
        }
        document.getElementById("paperButton").onclick = function(){
            gameOutcome("Paper");
            document.getElementById("gameInfo").innerHTML = `Game Number:${gameNumber}. Rock Paper Scissor Shoot`
            if (playerCounter == 5 || computerCounter == 5){
            finalDecision();
            }
        }
        document.getElementById("scissorButton").onclick = function(){
            gameOutcome("Scissor");
            document.getElementById("gameInfo").innerHTML = `Game Number:${gameNumber}. Rock Paper Scissor Shoot`
            if (playerCounter == 5 || computerCounter == 5){
                finalDecision();
            }
        }

/*Final Game Decision*/
function finalDecision(){
    let difference = playerCounter - computerCounter;

    if (playerCounter == 5) {
        return document.getElementById("gameplaySection").style.display = "none",
        playerName = input.value,
        document.getElementById("finalResult").style.display = "flex", 
        document.getElementById("playerName2").innerHTML = `${playerName}`,
        document.getElementById("resultInfo").innerHTML = `Congratulations! YOU'VE WON ${playerName}.<br> You beat me by ${difference} points!`;  
    }

    else if (computerCounter == 5) {
        return document.getElementById("gameplaySection").style.display = "none", 
            playerName = input.value,
            document.getElementById("finalResult").style.display = "flex", 
            difference = difference + 2*(-1 * difference), 
            document.getElementById("playerName2").innerHTML = `${playerName}`,
            document.getElementById("resultInfo").innerHTML = `Too Bad. You Lost by ${difference} points ${playerName}!`;
    }
}



    


