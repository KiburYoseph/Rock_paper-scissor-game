let playerInput = window.prompt("Rock Paper Scissor Shoot!");

function capitalize(string) {
    let y = string.slice(1, string.length);
    y = y.toLowerCase();
    string = string.slice(0,1);
    string = string.toUpperCase();
    string += y;
    return string;
}
 capitalize(playerInput);

 if (playerInput != "Rock" && playerInput != "Paper" && playerInput != "Sicssors") {
    console.log("Please Enter A Valid Input!")
    playerInput = window.prompt("Rock Paper Scissor Shoot!");
    capitalize(playerInput);
 }