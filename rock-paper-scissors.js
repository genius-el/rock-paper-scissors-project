// A PROJECT ON THE ROCK, PAPER, SCISSORS GAME
// Write the logic for the computer choice
function getComputerChoice() {
    const compChoices = ["rock", "paper", "scissors"];
    index = Math.floor(Math.random() * 3);
    const compChoice = compChoices[index];
    return compChoice;
}

// console.log(getComputerChoice());

// Write the logic for the user's choice
function getHumanChoice() {
    let humChoice = prompt("Which do you choose, rock, paper or scissors?");
    return humChoice;
}

// console.log(getHumanChoice());

// Declare the players score variable
// let humanScore = 0;
// let computerScore = 0;

// Write the logic to play a single round
// function playRound(humanChoice, computerChoice) {
//     if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors") {
//         humanScore += 1;
//         console.log("You win! Rock beats Scissors");
//     } else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper") {
//         humanScore += 1;
//         console.log("You win! Scissors beats Paper");
//     } else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock") {
//         humanScore += 1;
//         console.log("You win! Paper beats Rock");
//     } else if (computerChoice.toLowerCase() === "rock" && humanChoice.toLowerCase() === "scissors") {
//         computerScore += 1;
//         console.log("You lose! Rock beats Scissors");
//     } else if (computerChoice.toLowerCase() === "scissors" && humanChoice.toLowerCase() === "paper") {
//         computerScore += 1;
//         console.log("You lose! Scissors beats Paper");
//     } else if (computerChoice.toLowerCase() === "paper" && humanChoice.toLowerCase() === "rock") {
//         computerScore += 1;
//         console.log("You win! Paper beats Rock");
//     } else if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
//         console.log("It's a tie.")
//     }
//     // console.log(humanScore);
//     // console.log(computerScore);
// }

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

// console.log(playRound(humanSelection, computerSelection));


function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    console.log(humanSelection);
    console.log(computerSelection);

    function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "scissors") {
        humanScore += 1;
        console.log("You win this round! Rock beats Scissors");
    } else if (humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "paper") {
        humanScore += 1;
        console.log("You win this round! Scissors beats Paper");
    } else if (humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "rock") {
        humanScore += 1;
        console.log("You win round! Paper beats Rock");
    } else if (humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "rock") {
        computerScore += 1;
        console.log("You lose this round! Rock beats Scissors");
    } else if (humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "scissors") {
        computerScore += 1;
        console.log("You lose this round! Scissors beats Paper");
    } else if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "paper") {
        computerScore += 1;
        console.log("You lose this round! Paper beats Rock");
    } else if (humanChoice.toLowerCase() == computerChoice.toLowerCase()) {
        console.log("It's a tie for this round.")
    }
    // console.log(humanScore);
    // console.log(computerScore);
    }

    console.log(playRound(humanSelection, computerSelection));
    console.log(humanScore);
    console.log(computerScore);

    // getHumanChoice();
    // getComputerChoice();
    getChoices();

    console.log(playRound(humanSelection, computerSelection));
    console.log(humanScore);
    console.log(computerScore);

    // getHumanChoice();
    // getComputerChoice();
    getChoices();


    console.log(playRound(humanSelection, computerSelection));
    console.log(humanScore);
    console.log(computerScore);

    // getHumanChoice();
    // getComputerChoice();
    getChoices();


    console.log(playRound(humanSelection, computerSelection));
    console.log(humanScore);
    console.log(computerScore);

    // getHumanChoice();
    // getComputerChoice();
    getChoices();


    console.log(playRound(humanSelection, computerSelection));
    console.log(humanScore);
    console.log(computerScore);

    if (humanScore > computerScore) {
        console.log("You finally won!");
    } else if (humanScore < computerScore) {
        console.log("You finally lose!");
    } else if (humanScore == computerScore)
        console.log("This is the end and it's still a tie");

}

console.log(playGame())

function getChoices() {
    // getHumanChoice();
    // getComputerChoice();
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(humanSelection);
    console.log(computerSelection);

}

