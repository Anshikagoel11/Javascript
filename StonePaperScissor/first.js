let arr =['stone' ,'paper','scissor']

const btn = document.querySelector("button");
const person1 = document.querySelector("#playerChoice");
const person2 = document.querySelector("#computerChoice");
const result = document.querySelector('.result');

function getRandomChoice(){
    const idx = Math.floor(Math.random()*arr.length);
    return arr[idx];
}

function checkWinner(x,y){
    if((x==='stone' && y==='scissor') || (x==='paper' && y==='stone') || (x==='scissor' && y==='paper')) return "You Wins!";
    if(x==y) return "OOPS! Math Draws";
    return "Computer wins!";
}

btn.addEventListener('click',()=>{
   let player1_get = getRandomChoice();
   let player2_get = getRandomChoice();

   person1.textContent=player1_get;
   person2.textContent=player2_get;

   let winner = checkWinner(player1_get,player2_get);

   result.textContent=winner;
});