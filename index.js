/*Gets User Input*/
let playerInput = window.prompt("Rock Paper Scissor Shoot!");

playerInput = capitalize(playerInput);

/*Changed Input Into Proper Capitalization*/
function capitalize(x) {
    let y = x.slice(1, x.length);
    y = y.toLowerCase();
    x = x.slice(0,1);
    x = x.toUpperCase();
    x += y;
    return x;
}

 /*Checks If Input Is Correct*/
 while(playerInput != "Rock" && playerInput != "Paper" && playerInput != "Sicssors"){
        console.log("Please Enter A Valid Input!");
        playerInput = window.prompt("Rock Paper Scissor Shoot!");
        playerInput = capitalize(playerInput);
    }

/*let computerChoices = ["Rock", "Paper", "Scissor"];

console.log(computerChoices[0]);*/