// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
var number1 = document.getElementById('number1')
var number2 = document.getElementById('number2')
num1 = Math.round(Math.random() * 100)
num2 = Math.round(Math.random() * 100)
number1.innerHTML = num1
number2.innerHTML = num2
// Iteration 3: Creating variables required to make the game functional
var plus = document.getElementById('plus')
var minus = document.getElementById('minus')
var mul = document.getElementById('mul')
var divide = document.getElementById('divide')
var modulus = document.getElementById('modulus')
let score = 0;
// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
var number3 = document.getElementById('number3')
let num3
// Iteration 5: Creating a randomise function to make the game functional
function randomise() {
     num1 = Math.round(Math.random() * 100)
    num2 = Math.round(Math.random() * 100)
    if (num1 < num2){
    var temp = num1
    num1 = num2
    num2 = temp
    }
    let operator = Math.round(Math.random()*4)
    if(operator ===0){
        num3 = num1 + num2;
    }
    else if (operator === 1) {
        num3 = num1 - num2
    }
    else if(operator === 2){
        num3 = num1 * num2
    }
    else if (operator===3){
        num3 = Math.floor(num1/num2)
    }
    else if(operator === 4){
        num3 = num1%num2
    }
    number1.innerHTML = num1
    number2.innerHTML = num2
    number3.innerHTML = num3
    console.log(number3)
}
randomise()
// Iteration 6: Making the Operators (button) functional
const button = document.querySelector('#buttons')
button.addEventListener('click', function(event){
    let ans = false
    if(event.target.id === 'plus'){
        ans = num1 + num2 == num3
    }
    else if (event.target.id === 'minus'){
        ans = num1 - num2 == num3  
    }
    else if (event.target.id === 'mul'){
        ans = num1 * num2 == num3
    }
    else if (event.target.id === 'divide'){
    ans =  Math.floor(num1/num2)
    }
    else if (event.target.id === 'modulus'){
    ans =   num1%num2 ==num3 
    }
    if (ans){
        score++;
        reset();
        randomise();
    }
    else{
        location.href = 'gameover.html';
    }
})
// Iteration 7: Making Timer functional
let timer = document.getElementById('timer')
let time
let timerId

function timerGame(){
    time = 20
    timer.innerText = 20
    timerId=setInterval(function(){
        time --
        if(time == 0){
            location.href = "gameover.html"
        }
        timer.innerText = time

    }, 1000)
    localStorage.setItem("score", score)
}
function reset(){
    clearInterval()
    timerGame()
}
timerGame()
