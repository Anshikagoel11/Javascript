const box = document.getElementById("box");
const btn = document.getElementById("btn");

function changeColor(){
    const letters = "0123456789ABCDEF";
    let color = "#";
    for(let i=0;i<6;i++){
      color += letters[Math.floor(Math.random()*16)] ;
    }
    return color;
}

function changeRadius(){
    let r = Math.floor(Math.random()*100);
    return r;
}

function changeBorderWidth(){
let w = Math.floor(Math.random()*12);
return w;
}


let borders = ['solid','dashed','double','groove','ridge','inset','outset','none','hidden']
function ShowColor(){
    box.style.backgroundColor = changeColor();
    box.style.borderRadius=changeRadius()+"px";
    box.style.border=changeBorderWidth()+"px " + borders[Math.floor(Math.random()*borders.length)] +" "+changeColor();
    box.innerText = "WOW! my border radius change to " + changeRadius();
}
btn.onclick = ShowColor;
