'use-strict'
const toDo = document.querySelector('.to-do');
const create = document.querySelector('.createBtn');
let body = document.querySelector('.body');
const inputs = document.querySelector('.inputs');
const clearAll = document.querySelector('.clear');

 


create.addEventListener('click', function(){
    console.log(toDo.value);
    if (toDo.value === ''){
        toDo.textContent = 'Please Enter Text';
    } else {
    let newToDo = document.createElement('button');
    let deletebtn = document.createElement('button');
    let editbtn = document.createElement('button');
    let doneBtn = document.createElement('button');
    doneBtn.textContent = 'Complete';
    newToDo.classList.add('newBtn');
      let createBtn;
    editbtn.textContent = 'Edit';
    doneBtn.style.marginLeft = '5px'
    deletebtn.textContent = '❌';
    deletebtn.style.width = '3%';
    newToDo.textContent = toDo.value;
    console.log(newToDo.style.placeContent);
    console.log(toDo.value);
    console.log(newToDo);
    inputs.appendChild(newToDo);  
    inputs.appendChild(doneBtn);
    // inputs.appendChild(editbtn);
    inputs.appendChild(deletebtn);
    toDo.value = '';
    deletebtn.classList.add('deleteBtn');
//    newToDo.classList.add('spacer');
   deletebtn.classList.add('spacer');
    deletebtn.addEventListener('click', function (){
        inputs.removeChild(newToDo);
        inputs.removeChild(deletebtn);
        inputs.removeChild(doneBtn);
    })

    doneBtn.addEventListener('click', function(){
        // inputs.removeChild(editbtn);
        inputs.removeChild(deletebtn);
        doneBtn.textContent = 'Completed ✅';
        doneBtn.classList.add('spacer');
        doneBtn.style.fontWeight = 'bolder';
        doneBtn.style.marginTop = '10px';
        newToDo.style.backgroundColor ='rgb(40, 243, 47)';
    })

    clearAll.addEventListener('click', function(){
        inputs.removeChild(newToDo);
        inputs.removeChild(doneBtn);
        inputs.removeChild(deletebtn);
    })
    
}
});
