const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
const correctAnswer = num1 * num2;

const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");

// score uses local storage to save the value
// since local storage in browser can only store String, must parse/stringify back and forth when pulling/saving

let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score = 0;
}

questionEl.innerText = `What is ${num1} multiplied by ${num2}?`;
scoreEl.innerText = `score: ${score}`


formEl.addEventListener("submit", ()=>{
    const userAnswer = +inputEl.value;
    if(userAnswer == correctAnswer) {
        score++;
        updateLocalStorage();
    } else {
        score--;
        updateLocalStorage();
    }
})

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}
