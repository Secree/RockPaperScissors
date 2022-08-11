const opponentChoiceEl = document.querySelector("#opponent-choice")
const yourChoiceEl = document.querySelector("#your-choice")
const pickBtn = document.getElementsByClassName("pick-btn")
const pickRock = document.querySelector("#pick-rock")
const pickPaper = document.querySelector("#pick-paper")
const pickScissors = document.querySelector("#pick-scissors")
const result = document.querySelector("#result")
const scoreEl = document.querySelector("#score-el")
const style = document.createElement("style")
let score = 0

let youRock = false
let youPaper = false
let youScissors = false
let opponentRock = false
let opponentPaper = false
let opponentScissors = false
let youWin = false
let youLose = false
let youDraw = false

scoreEl.textContent = score
// when rock is clicked

pickRock.addEventListener("click", () => {
    yourChoiceEl.textContent = "Rock"
    youRock = true
    getOpponentChoice()
    gameResult()
    gameScoring()
    gameReset()
    scoreEl.textContent = score
})

// when paper is clicked

pickPaper.addEventListener("click", () => {
    yourChoiceEl.textContent = "Paper"
    youPaper = true
    getOpponentChoice()
    gameResult()
    gameScoring()
    gameReset()
    scoreEl.textContent = score
})

// when scissors is clicked

pickScissors.addEventListener("click", () => {
    yourChoiceEl.textContent = "Scissors"
    youScissors = true
    getOpponentChoice()
    gameResult()
    gameScoring()
    gameReset()
    scoreEl.textContent = score
}) 

function getOpponentChoice() {
    let randomNumber = Math.floor( Math.random() * 3 ) + 1
    if (randomNumber === 1) {
        opponentChoiceEl.textContent = "Rock"
        opponentRock = true
    } else if (randomNumber === 2) {
        opponentChoiceEl.textContent = "Paper"
        opponentPaper = true
    } else if (randomNumber === 3) {
        opponentChoiceEl.textContent = "Scissors"
        opponentScissors = true
    }
}

function gameResult() {
    if ( youRock === true && opponentPaper === true || youPaper === true && opponentScissors === true || youScissors === true && opponentRock === true ) {
        result.textContent = "You Lose"
        youLose = true
    } else if ( youRock === true && opponentScissors === true || youPaper === true && opponentRock=== true || youScissors === true && opponentPaper === true ) {
        result.textContent = "You Win"
        youWin = true
    } else {
        result.textContent = "Draw"
        youDraw = true
    }

    if (youWin === true) {
        style.innerHTML = `
            #result {
                color: #00ff87;
            }
        `
    } else if (youLose === true) {
        style.innerHTML = `
            #result {
                color: red;
            }
        `
    } else if (youDraw === true) {
        style.innerHTML = `
            #result {
                color: cyan;
            }
        `
    }

    document.head.appendChild(style)
}

function gameScoring() {
    if ( youWin === true) {
        score++
    }
}

function gameReset() {
    youRock = false 
    youPaper = false 
    youScissors = false 
    opponentRock = false 
    opponentPaper = false 
    opponentScissors = false
    youWin = false
    youLose = false
    youDraw = false
}