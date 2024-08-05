options = ["rock", "paper", "scissors"]

function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)]
}

function getHumanChoice() {
    let answer = ""
    while (answer !== "rock" || answer !== "paper" || answer !== "scissors") {
        answer = prompt("Choose rock, paper or scissors.").toLowerCase()
    }
}

function playGame() {
    let humanScore = 0
    let computerScore = 0
    function playRound(humanChoice, computerChoice) {
        humanChoice[0] = humanChoice[0].toUpperCase()
        computerChoice[0] = computerChoice[0].toUpperCase()
        if (humanChoice === computerChoice) {
            console.log("It's a tie!")
        }
        else if ((humanChoice === "Rock" && computerChoice === "Scissors")
            || (humanChoice === "Paper" && computerChoice === "Rock")
            || (humanChoice === "Scissors" && computerChoice === "Paper")) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
            humanScore++
        }
        else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
            computerScore++
        }
    }
    NUM_ROUNDS = 5;
    for (let i = 0; i < NUM_ROUNDS; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }
    if (humanScore > computerScore) {
        console.log("You win the game!")
    }
    else if (humanScore === computerScore) {
        console.log("You tied the game!")
    }
    else {
        console.log("You lost the game!")
    }
}