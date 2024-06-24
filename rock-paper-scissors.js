// A PROJECT ON THE ROCK, PAPER, SCISSORS GAME
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    index = Math.floor(Math.random() * 3);
    const choice = choices[index];
    return choice;
}

console.log(getComputerChoice())