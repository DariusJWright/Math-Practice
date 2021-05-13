const firstNumberEl = document.querySelector('#first-number');
const secondNumberEl = document.querySelector('#second-number');
const answerEl = document.querySelector('#answer');
const checkButtonEl = document.querySelector('#btn');

let firstNum = Math.floor(Math.random() * 10);
let secondNum = Math.floor(Math.random() * 10);
let answer = firstNum * secondNum;

firstNumberEl.textContent = firstNum;
secondNumberEl.textContent = secondNum;

const checkAnswer = () => {
  if (answer == answerEl.value) {
    alert('You win this round!');
    window.location.reload();
  } else {
    console.log(answer);
    alert(`The correct answer was actually ${answer}.`);
    window.location.reload();
  }
};

checkButtonEl.addEventListener('click', checkAnswer);
answerEl.addEventListener('keyup', function(e) {
  if (e.keyCode === 13) {
    checkAnswer();
  }
});