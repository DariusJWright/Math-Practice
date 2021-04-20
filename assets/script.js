const topEl = document.querySelector(".top");
const bottomEl = document.querySelector(".bottom");
const answerEl = document.querySelector(".answer");
console.dir(answerEl);
const createProblems = () => {
  let problems = {};
  for (let i = 1; i < 10; i++) {
    for(let j = 1; j < 10; j++) {
      let problem = `${i} * ${j}`;
      problems[problem] = i * j;
    }
  }
  return problems;
}

const oneProblem = () => {
  const problemsArr = Object.keys(createProblems());
  let index = Math.floor(Math.random() * problemsArr.length);

  const topNumber = problemsArr[index].split(' ')[0];
  const bottomNumber = problemsArr[index].split(' ')[2];
  
  topEl.innerHTML = topNumber; 
  bottomEl.innerHTML = bottomNumber;
  answerEl.value = topNumber * bottomNumber;
}

setInterval(() => oneProblem(), 1500);
