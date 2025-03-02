let btn = document.getElementById('btn');
let input = document.getElementById('inputbox');
let list = document.getElementsByClassName('list')[0]

function markcheck(e){
    e.target.parentElement.classList.toggle('unchecked')
    // savedata();
}

function deletelist(e){
e.target.parentElement.remove();
// savedata();
}

function addTask(){
    if(input.value==''){
        alert('no task is given');
    }
    else{
    let li = document.createElement('li');
    let check = document.createElement('div');
    let done = document.createElement('div');
   let text = document.createElement('span');

    check.classList.add('check')
    done.classList.add('done')
    li.classList.add('tasklist')

    text.innerText=input.value;
    li.appendChild(check)
    li.appendChild(text)
    li.appendChild(done)
    list.appendChild(li);

    input.value ='';

    // savedata();
    
    }
}

list.addEventListener('click',function(e){
    if(e.target.classList.contains('check')){
        e.target.parentElement.classList.toggle('unchecked');
        // savedata();
    }else if(e.target.classList.contains('done')){
        e.target.parentElement.remove();
        // savedata();
    }
},false);




// showData();
btn.onclick=addTask;