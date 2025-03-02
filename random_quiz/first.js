const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Venus", "Mars", "Jupiter"],
      correctAnswer: "Mars"
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Southern", "Pacific"],
      correctAnswer: "Pacific"
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
      correctAnswer: "William Shakespeare"
    },
    {
      question: "What is 7 multiplied by 8?",
      options: ["54", "56", "58", "60"],
      correctAnswer: "56"
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ["Oxygen", "Gold", "Osmium", "Iron"],
      correctAnswer: "Oxygen"
    },
    {
      question: "What year did the Titanic sink?",
      options: ["1910", "1912", "1915", "1918"],
      correctAnswer: "1912"
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "Japan", "South Korea", "Thailand"],
      correctAnswer: "Japan"
    },
    {
      question: "What is the square root of 64?",
      options: ["6", "7", "8", "9"],
      correctAnswer: "8"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
      correctAnswer: "Leonardo da Vinci"
    }
  ];
  

  const btn = document.querySelector("button");
  

  function Generate_randomNO(num){
  return Math.floor(Math.random()*num);
  }


  btn.addEventListener('click', ()=>{
    const input = document.querySelector("input").value;
    const form = document.querySelector("#form")
    
    if(input==='' || isNaN(input)){
        alert("Enter valid number")
        return;
    } 
    
    for(let i=0;i<input;i++){
        const j = Generate_randomNO(input);
        
        let quesbox = document.createElement("div");
        quesbox.classList.add('ques')
         quesbox.textContent=quizQuestions[j].question;
        form.appendChild(quesbox);

        let ul = document.createElement('ul');
        for(let i=0;i<4;i++){
            let li = document.createElement('li');
            let opt = document.createElement('input'); 
            opt.classList.add('option')
            opt.type='radio'
            opt.name='opt'+j;
            li.appendChild(opt)
            li.appendChild(document.createTextNode(quizQuestions[j].options[i]))
            ul.appendChild(li);
        }
        form.appendChild(ul) 
    }
  })

  let score=0;
  let submit_btn = document.getElementById('Submit_btn')
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let data = new FormData(form)
    console.log(data)
    for(let [key,val] of data.keys()){
     if()
    }
  })
  