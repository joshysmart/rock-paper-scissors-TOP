const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const remark = document.querySelector('.remark')

const userscore = document.querySelector('.userscore')
const compscore = document.querySelector('.compscore')

let compScore = 0
let userScore = 0


function game(e) {
 const compChoice = compTurn()
 const userChoice = e.target.className

 //  check draw
 if (compChoice === userChoice) {
  remark.innerHTML = `${userChoice} covers ${compChoice} <span style="color:silver">draw</span`
  e.target.style.border = "10px solid silver"   
 }

 // chec kwin
 const win = userChoice === "rock" && compChoice === "scissors"
 || userChoice === "paper" && compChoice === "rock"
 || userChoice === "scissors" && compChoice === "paper"

 if (win) {
  remark.innerHTML = `${userChoice} beats ${compChoice} <span style="color:green">win</span`
  userScore++

  userscore.innerHTML = `${userScore < 10 ? "0" : ''}${userScore}`
  e.target.style.border = "10px solid green"
 }

 // check loss
 const loss = userChoice === "rock" && compChoice === "paper"
 || userChoice === "paper" && compChoice === "scissors"
 || userChoice === "scissors" && compChoice === "rock"

 if (loss) {
  remark.innerHTML = `${compChoice} beats ${userChoice} <span style="color:red">loss</span`
  compScore++

  compscore.innerHTML = `${compScore < 10 ? "0" : ''}${compScore}`
  e.target.style.border = "10px solid red"
 }
 setTimeout(() => {
  e.target.style.border = "none"
 }, 500);
}

function compTurn() {
 const compChoices = ["rock", "paper", "scissors"] 
 const compChoice = Math.floor(Math.random() * 3)
 const result= compChoices[compChoice]
 return result
}

rock.addEventListener('click', game) 
paper.addEventListener('click', game)
scissors.addEventListener('click', game)
