let player1Score = 0
let player2Score = 0
let player1Turn = false
const player1Dice = document.querySelector("#player1Dice")
const player2Dice = document.querySelector("#player2Dice")
const player1ScoreBoard = document.querySelector("#player1Scoreboard")
const player2ScoreBoard = document.querySelector("#player2Scoreboard")
const rollBtn = document.querySelector("#rollBtn")
const resetBtn = document.querySelector("#resetBtn")
const message = document.querySelector("#message")

rollBtn.addEventListener('click', function() {
    const randNum = Math.floor(Math.random() * 6) + 1

    if(player1Turn) {
        player1Dice.textContent = randNum
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
        player1ScoreBoard.textContent = player1Score += randNum
    } else {
        player2Dice.textContent = randNum
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
        player2ScoreBoard.textContent = player2Score += randNum    
    }

    if (player1Score >= 20) {
        message.textContent = "Player 1 has won!"
        reset()
    } else if (player2Score >= 20) {
        message.textContent = "Player 2 has won!" 
        reset()       
    }

    player1Turn = !player1Turn
})

function reset() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}