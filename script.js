'use-strict'
const toDo = document.querySelector('.to-do');
const create = document.querySelector('.createBtn');
let body = document.querySelector('.body');
const inputs = document.querySelector('.inputs');
const bigBody = document.querySelector('.container');
const clearAll = document.querySelector('.inputs');
const checkMark =  document.querySelector('.checkmark')
const deleteMark = document.querySelector('.deletemark')

 
create.addEventListener('click', function(){
    console.log(toDo.value);
    let newToDo = document.createElement('button');
    let deletebtn = document.createElement('button');
    let editbtn = document.createElement('button');
    let doneBtn = document.createElement('button');
    if (toDo.value === ''){
        toDo.textContent = 'Please Enter Text';
    } else {
    doneBtn.textContent = checkMark.textContent;
    newToDo.classList.add('newBtn');
      let createBtn;
    editbtn.textContent = '🖊';
    editbtn.classList.add('editbtn');
    doneBtn.classList.add('doneBtn')
    deletebtn.textContent = deleteMark.textContent;
    newToDo.style.width = '40%';
    newToDo.style.marginLeft = '25.7%'
    newToDo.textContent = toDo.value;
    bigBody.appendChild(newToDo);  
    bigBody.appendChild(doneBtn);
    bigBody.appendChild(editbtn);
    bigBody.appendChild(deletebtn);
    toDo.value = '';
    deletebtn.classList.add('deleteBtn');
   deletebtn.classList.add('spacer');
    deletebtn.addEventListener('click', function (){
        bigBody.removeChild(newToDo);
        bigBody.removeChild(deletebtn);
        bigBody.removeChild(doneBtn);
        bigBody.removeChild(editbtn);
    })

    doneBtn.addEventListener('click', function(){
        bigBody.removeChild(editbtn);
        bigBody.removeChild(deletebtn);
        doneBtn.textContent = '✅';
        doneBtn.classList.add('spacer');
        doneBtn.style.fontWeight = 'bolder';
        newToDo.style.textDecoration = 'line-through';
        newToDo.style.fontStyle = 'italic';
    })
    editbtn.addEventListener('click', function (){
        bigBody.removeChild(newToDo);
        bigBody.removeChild(deletebtn);
        bigBody.removeChild(doneBtn);
        bigBody.removeChild(editbtn);
        toDo.value = newToDo.textContent;
    })
    
}
clearAll.addEventListener('click', function(){
    bigBody.removeChild(newToDo);
    bigBody.removeChild(doneBtn);
    bigBody.removeChild(deletebtn);
    bigBody.removeChild(editbtn);
})
});
