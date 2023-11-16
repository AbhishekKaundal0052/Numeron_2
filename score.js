// Iteration 8: Making scoreboard functional
const scoreBoard  = document.getElementById('score-box')
const realScore= document.getElementById('score-board')
const playAgain = document.getElementById('play-again-button')
let score = localStorage.getItem('score')

realScore.innerText += score;
playAgain.onclick = () => {
    location.href = 'game.html'
}