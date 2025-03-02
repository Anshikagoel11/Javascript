const quizData = [
  {
    ques: "What does HTML stand for?",
    option: [
      "Hyper Text Markup Language",
      "High Text Markup Language",
      "Hyper Tabular Markup Language",
      "Hyperlinks and Text Markup Language",
    ],
    correct: 1,
  },
  {
    ques: "Which tag is used to define a hyperlink in HTML?",
    option: ["<link>", "<a>", "<href>", "<hyperlink>"],
    correct: 2,
  },
  {
    ques: "What is the correct way to add a background color in HTML?",
    option: [
      '<body style="background-color:blue;">',
      '<body bg="blue">',
      "<background>blue</background>",
      "<bgcolor>blue</bgcolor>",
    ],
    correct: 1,
  },
  {
    ques: "Which HTML tag is used to create an ordered list?",
    option: ["<ul>", "<ol>", "<li>", "<list>"],
    correct: 2,
  },
  {
    ques: "What is the purpose of the <head> tag in HTML?",
    option: [
      "To display content on the webpage",
      "To contain meta-information about the document",
      "To create headings",
      "To add footnotes",
    ],
    correct: 2,
  },
];




let q = document.getElementById("ques");
let options = ["l1", "l2", "l3", "l4"].map((l) => {
  return document.getElementById(l);
});
let btn = document.getElementById("btn");
let answers = document.getElementsByClassName("answer");
let scorebox = document.getElementById("score");
// console.log(answers)
let quesNo = 0,
  score = 0;


function showQues() {
  const { ques, option } = quizData[quesNo];
  q.innerText = ques;

  for (let i = 0; i < 4; i++) {
    options[i].innerText = option[i];
    //   console.log(option[i])
  }
}


function getSelectOption() {
  for (let i = 0; i < 4; i++) {
    if (answers[i].checked) return i;
  }
  return -1;
}


function clearSelection() {
  for (let i = 0; i < 4; i++) answers[i].checked = false;
}


//timeing function
let timer;
let timeLeft = 10;
let timerDisplay = document.getElementById("timer");

function startTimer() {
  timeLeft = 10;
  timerDisplay.innerText = `Time left : ${timeLeft}s`;
  clearInterval(timer);

  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.innerText = `Time left : ${timeLeft}s`;
    if (timeLeft < 0) {
      clearInterval(timer);
      autoSubmit();
    }
  }, 1000);
}



function autoSubmit() {
  quesNo++;
  if (quesNo < quizData.length) {
    clearSelection();
    showQues();
    clearInterval(timer);
    startTimer();
  } else {
    endQuiz();
  }
}


btn.addEventListener("click", () => {
  clearInterval();
  const selectopt = getSelectOption();

  if (selectopt === -1) {
    alert("Please Select an option");
    return;
  }

  if (selectopt == quizData[quesNo].correct - 1) {
    // console.log('yeh')
    score++;
  }
  // console.log(selectopt)
  // else console.log('sad')

  quesNo++;
  scorebox.innerText = `Score: ${score}`;

  if (quesNo < quizData.length) {
    showQues();
    clearSelection();
    startTimer();
  } else {
    endQuiz();
  }
});



function endQuiz() {
  clearInterval(timer);
  let result = document.createElement("div");
  result.classList.add("result");
  result.innerText = `Quiz over! Your Score is ${score}/${quizData.length}`;
  let quizbox = document.getElementsByClassName("quizbox")[0];
  quizbox.innerHTML = "";
  quizbox.appendChild(result);
}



showQues();
startTimer();
