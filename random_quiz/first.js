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
        const j = Generate_randomNO(quizQuestions.length);
        
        let quesbox = document.createElement("div");
        quesbox.classList.add('ques')
         quesbox.textContent=quizQuestions[j].question;
        form.appendChild(quesbox);

        let ul = document.createElement('ul');
        for(let k=0;k<4;k++){
            let li = document.createElement('li');
            let opt = document.createElement('input'); 
            opt.classList.add('option')
            opt.type='radio'
            opt.name='opt'+i;
            opt.value = quizQuestions[j].options[k];
            li.appendChild(opt)
            li.appendChild(document.createTextNode(quizQuestions[j].options[k]))
            ul.appendChild(li);
        }
        form.appendChild(ul) 
    }
  })

  function check(val){
    for(let i=0;i<quizQuestions.length;i++){
      if(val === quizQuestions[i].correctAnswer) return true;
    }
    return false;
  }

  form.addEventListener('submit', (e) => {
    // console.log(e.target);
    e.preventDefault();
    score = 0;  
    let data = new FormData(form)

    // for(let a of Array.from(data.values())){
    //   console.log(a)
    // }

    // for(let a of data.entries()){  //data.entries return itself a array of key,value
    //   console.log(a);  // a denoting to 1 complete entry means 1 array of pair [key,value]
    // }

    //to get one , we destructure the array 
    for(let [key,val] of data.entries()){
        if(check(val)) score++;
    }
// rather than checking for match the answer , we can store the ans of ques that we are selecting , ques ko phale hi set me store kra lenge toh unquie ques bhe ayenge

    let result = document.createElement('div')
    result.classList.add('result');
    result.textContent=score;
    form.appendChild(result)
    }
    
  );
  