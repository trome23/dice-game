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
    console.log(randNum)
})