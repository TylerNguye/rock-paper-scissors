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
const roundResultDiv = document.querySelector("#round-result")

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
    if (humanScore === 0 && computerScore === 0) {
        resultsDiv.textContent = ''
        resultsDiv.style.backgroundColor = 'white'
    }
    let humanChoice = getHumanChoice(e)
    let computerChoice = getComputerChoice()
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
    computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    let roundResultText
    if (humanChoice === computerChoice) {
        roundResultText = "It's a tie!"
        roundResultDiv.style.backgroundColor = "yellow"
    }
    else if ((humanChoice === "Rock" && computerChoice === "Scissors")
        || (humanChoice === "Paper" && computerChoice === "Rock")
        || (humanChoice === "Scissors" && computerChoice === "Paper")) {
        roundResultText = `You win! ${humanChoice} beats ${computerChoice}.`
        roundResultDiv.style.backgroundColor = "green"
        humanScore++
    }
    else {
        roundResultText = `You lose! ${computerChoice} beats ${humanChoice}.`
        roundResultDiv.style.backgroundColor = "red"
        computerScore++
    }
    roundResultDiv.textContent = roundResultText
    roundResultDiv.classList.toggle("dotted-border")
    roundResultDiv.classList.toggle("solid-border")
    updateScore()
}

function gameOver() {
    humanHasWon = humanScore >= 5
    computerHasWon = computerScore >= 5
    if (humanHasWon || computerHasWon) {
        humanScore = 0
        computerScore = 0
        updateScore()
        resultsDiv.textContent = humanHasWon ? "You have won!" : "The computer has won!"
        resultsDiv.style.backgroundColor = humanHasWon ? "green" : "red"
        roundResultDiv.textContent = 'PLAY AGAIN?'
        roundResultDiv.style.backgroundColor = "white"
    }
}

function updateScore() {
    humanScoreDiv.textContent = "Score: " + humanScore
    computerScoreDiv.textContent = "Score: " + computerScore
}