const buttons = document.querySelectorAll("button")
buttons.forEach(button => {
    button.addEventListener('click', e => {
        playRound(e)
        gameOver()
    })
})
const resultsDiv = document.querySelector("#results")
const humanScoreDiv = document.querySelector("#human-score")
const computerScoreDiv = document.querySelector("#computer-score")

let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"]
    return options[Math.floor(Math.random() * 3)]
}

function getHumanChoice(e) {
    return e.target.value
}

function playRound(e) {
    let humanChoice = getHumanChoice(e)
    let computerChoice = getComputerChoice()
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
    computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
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
    updateScore()
}

function gameOver() {
    humanHasWon = humanScore >= 5
    computerHasWon = computerScore >= 5
    if (humanHasWon || computerHasWon) {
        humanScore = 0
        computerScore = 0
        updateScore()
        const winner = humanHasWon ? "You have won!" : "The computer has won!"
        resultsDiv.textContent = winner
    }
}

function updateScore() {
    humanScoreDiv.textContent = "Score: " + humanScore
    computerScoreDiv.textContent = "Score: " + computerScore
}