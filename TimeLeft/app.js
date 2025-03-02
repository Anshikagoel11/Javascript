
let boxes = ['box2','box3','box4','box5','box6'].map((id)=>{
    return document.getElementById(id);
})
// console.log(boxes);
const targetDate = new Date('2025-02-26');
const name = ['days','hrs','mins','sec','ms'];
function showTimeLeft(){
    const now = new Date();
const timeLeft = targetDate-now; //milisecond
const days =  Math.floor(timeLeft/(1000*60*60*24));
const hours =  Math.floor((timeLeft%(1000*60*60*24))/(1000*60*60));
const minutes =  Math.floor((timeLeft%(1000*60*60))/(1000*60));
const  seconds =  Math.floor((timeLeft%(1000*60))/1000);
const milisecond = timeLeft % 1000;
[days,hours,minutes,seconds,milisecond].forEach((val,i) => boxes[i].innerText=val + "  "+ name[i]);

}
showTimeLeft();
setInterval(showTimeLeft,1000);

