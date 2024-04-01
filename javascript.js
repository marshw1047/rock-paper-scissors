function getComputerChoice() {
    let compChoice =  Math.floor(Math.random() * (4 - 1) + 1);
    let result = "Something bad happened, try again"

    switch (compChoice) {
        case 1:
            return result = "rock";
        case 2:
            return result = "paper";
        case 3:
            return result = "scissors";
    }
    return result;
}

function playRound(playerChoice, compChoice) {
    let pChoice = playerChoice.toLowerCase();
    let cChoice = compChoice;
    let result = "Something didn't work";

    if (pChoice === cChoice) {
        result = "It's a tie! Y'all both chose " + compChoice;
    }

    if ((pChoice === "rock" && cChoice === "scissors") ||
        (pChoice === "paper" && cChoice === "rock") ||
        (pChoice === "scissors" && cChoice === "paper")) {
            result = "You won! " + pChoice + " beats " + cChoice + "!";
        }

    else if ((cChoice === "rock" && pChoice === "scissors") ||
             (cChoice === "paper" && pChoice === "rock") ||
             (cChoice === "scissors" && pChoice === "paper")) {
                result = "You lost. " + cChoice + " beats " + pChoice;
            }

    return result;
}

function playGame() {
    let pScore = 0;
    let cScore = 0
    while ((pScore < 5) && (cScore < 5)) {
        let playerChoice = prompt("Please enter your choice of arms");
        let result = playRound(playerChoice, getComputerChoice());
        
        if (result.includes("won")) {
            pScore++;
        }
        else if (result.includes("lost")) {
            cScore++;
        }

        console.log(result);
        console.log("Player: " + pScore + " Computer: " + cScore);        
    }
    console.log("Game complete! Final Score: Player: " + pScore + " Computer: " + cScore);
}