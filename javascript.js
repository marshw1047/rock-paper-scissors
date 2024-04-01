function getComputerChoice() {
    let compChoice =  Math.floor(Math.random() * (4 - 1) + 1);
    let result = "Something bad happened, try again"
    console.log(compChoice)
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