let playerScore = 0
let computerScore = 0
let winner = ''

function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        playerScore++
        winner = 'player'    
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {
        computerScore++
        winner = 'computer'
    } else if (playerSelection === computerSelection) { winner = 'tie' }
}

function computerPlay() {
    const choice = ['rock', 'paper', 'scissors']
    return choice[Math.floor(Math.random() * choice.length)]
}

function gameOver() {
    return playerScore === 5 || computerScore === 5
}

const body = document.querySelector('body')
const playerChose = document.getElementById('playerChose')
const computerChose = document.getElementById('computerChose')
const playerScoreDisplay = document.getElementById('playerScoreDisplay')
const computerScoreDisplay = document.getElementById('computerScoreDisplay')
const gameResult = document.getElementById('gameResult')

const rockButton = document.getElementById('rockButton')
const paperButton = document.getElementById('paperButton')
const scissorsButton = document.getElementById('scissorsButton')
const resetButton = document.getElementById('resetButton')

rockButton.addEventListener('click', () => clickImage('rock'))
paperButton.addEventListener('click', () => clickImage('paper'))
scissorsButton.addEventListener('click', () => clickImage('scissors'))
resetButton.addEventListener('click', restartGame)

function clickImage(playerSelection) {
    // body.style.backgroundColor = "white";
    if (gameOver()) {
        return
    }

    const computerSelection = computerPlay()
    playRound(playerSelection, computerSelection)
    updateChoices(playerSelection, computerSelection)
    updateScore()

    if (gameOver()) {
        whoWon()
    }
}

function updateChoices(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'rock':
            playerChose.src = "images/rock.jpeg"
            break
        case 'paper':
            playerChose.src = "images/paper.jpg"
            break
        case 'scissors':
            playerChose.src = "images/scissors.jpeg"
    }

    switch (computerSelection) {
    case 'rock':
        computerChose.src = "images/rock.jpeg"
        break
    case 'paper':
        computerChose.src = "images/paper.jpg"
        break
    case 'scissors':
        computerChose.src = "images/scissors.jpeg"
    }
}

function updateScore() {
    playerScoreDisplay.textContent = `You: ${playerScore}`
    computerScoreDisplay.textContent = `Computer: ${computerScore}`
}

function whoWon() {
    return playerScore > computerScore
    ? (gameResult.style.display = "inline", gameResult.textContent = 'You won! :D')
    : (gameResult.style.display = "inline", gameResult.textContent = 'You lost. :(')
}

function restartGame() {
    playerScore = 0
    computerScore = 0
    playerChose.src = "images/questionmark.png"
    computerChose.src = "images/questionmark.png"
    playerScoreDisplay.textContent = 'You: 0'
    computerScoreDisplay.textContent = 'Computer: 0'
    gameResult.style.display = "none"
}