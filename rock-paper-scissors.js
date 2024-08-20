// 08 Create a div for displaying results
let newDiv = document.createElement('div');

// Add a class and ID
newDiv.className = 'results';
newDiv.id = 'logs';

//Create text node and add some initial text to the div
var newDivText = document.createTextNode('These are the results');
newDiv.appendChild(newDivText);

// Append the div to the body
const body = document.querySelector('body');
body.appendChild(newDiv);

// 01 Write the logic for getting the computer choice
function getComputerChoice() {
    const compChoices = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);  // Declare index with const
    const compChoice = compChoices[index];
    return compChoice;
};

// 09 Write the function to log and display the results on the webpage
function logResult(message) {
    const logMessage = document.createElement('p'); // Create a new paragraph element for each log
    logMessage.textContent = message; // Set the text content to the message passed to the function
    newDiv.appendChild(logMessage); // Append the paragraph to the results div
}

// 07 Wrap the game into a function that can run from a function call
let humanScore = 0;
let computerScore = 0;

function playGame() {
    // Clear previous results
    newDiv.innerHTML = '<p>These are the results</p>';
    humanScore = 0;
    computerScore = 0;
    
    // 04 Create a function that takes in human and computer choices
    // and compares these choices to ascertain the winner of a
    // particular round
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore += 1;
            logResult("You win this round! Rock beats Scissors");
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore += 1;
            logResult("You win this round! Scissors beats Paper");
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore += 1;
            logResult("You win this round! Paper beats Rock");
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore += 1;
            logResult("You lose this round! Rock beats Scissors");
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore += 1;
            logResult("You lose this round! Scissors beats Paper");
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore += 1;
            logResult("You lose this round! Paper beats Rock");
        } else if (humanChoice === computerChoice) {
            logResult("It's a tie for this round.");
        }

        // 05 Display the current scores
        logResult(`Current Scores: Human: ${humanScore}, Computer: ${computerScore}`);

        // 06 Check for number of rounds to stop at the first to reach five points
        if (humanScore >= 5 && computerScore < 5) {
            logResult(`Final Scores: Human: ${humanScore},Computer: ${computerScore}`);
            logResult("You finally win the game!");

            // Clear the display div after the game ends
            setTimeout(() => {
                newDiv.innerHTML = '<p>Game Over. Click any button to start a new game.</p>';
                playGame(); // Restart the game
            }, 2000);
            return;

        } else if (computerScore >= 5 && humanScore < 5 ) {
            logResult(`Final Scores: Computer: ${computerScore},Human: ${humanScore}`);
            logResult("You finally lost the game!");
            // Clear the display div after the game ends
            setTimeout(() => {
                newDiv.innerHTML = '<p>Game Over. Click any button to start a new game.</p>';
                playGame(); // Restart the game
            }, 2000);
        }
            return;
        
    }

    // 03 Function to handle button clicks
    function handleButtonClick(choice) {
        return () => {
            const computerChoice = getComputerChoice();
            playRound(choice, computerChoice);
        };
    }
    // Add event listeners to the buttons created
    document.querySelector("#rock").addEventListener("click", handleButtonClick("rock"));
    document.querySelector("#paper").addEventListener("click", handleButtonClick("paper"));
    document.querySelector("#scissors").addEventListener("click", handleButtonClick("scissors"));

};

playGame();



