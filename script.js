'use-strict'
const toDo = document.querySelector('.to-do');
const create = document.querySelector('.create');
let body = document.querySelector('.body');
const inputs = document.querySelector('.inputs');
const clearAll = document.querySelector('.clear');


create.addEventListener('click', function(){
    console.log(toDo.value);
    if (toDo.value === ''){
        toDo.textContent = 'Please Enter Text';
    } else {
        // inputs.classList.add('border');
    let newToDo = document.createElement('button');
    let deletebtn = document.createElement('button');
    let editbtn = document.createElement('button');
    let doneBtn = document.createElement('button');
    doneBtn.textContent = 'Complete';
    newToDo.classList.add('newBtn');
      let createBtn;
    editbtn.textContent = 'Edit';
    doneBtn.style.marginLeft = '5px'
    deletebtn.textContent = 'X';
    deletebtn.style.width = '2%';
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
        // inputs.removeChild(editbtn);
        inputs.removeChild(doneBtn);
    })

    // editbtn.addEventListener('click', function(){
    //     let editInp = document.createElement('input');
    //     createBtn = document.createElement('button');
    //     deletebtn.classList.add('hidden');
    //     doneBtn.classList.add('hidden');
    //     inputs.appendChild(newToDo);  
    //     inputs.replaceChild(editInp, newToDo);
    //     createBtn = editbtn;
    //     editInp.style.width = '62%'
    //     createBtn.textContent = 'Create';
        
        
    //         if ( deletebtn.classList.contains('hidden') && doneBtn.classList.contains('hidden')){
    //             newToDo.classList.remove('hidden');
    //             deletebtn.classList.remove('hidden');
    //         doneBtn.classList.remove('hidden');
    //         inputs.replaceChild(newToDo, editInp);
    //         } else{
    //             inputs.appendChild(newToDo);  
    //             inputs.appendChild(editInp);
    //             inputs.replaceChild(newToDo, editInp);
    //             editInp.style.width = '62%';
    //             deletebtn.classList.add('hidden');
    //             doneBtn.classList.add('hidden');
    //         }  
    // })
    doneBtn.addEventListener('click', function(){
        // inputs.removeChild(editbtn);
        inputs.removeChild(deletebtn);
        doneBtn.textContent = 'Completed';
        doneBtn.style.fontWeight = 'bolder';
        doneBtn.style.marginTop = '10px';
        newToDo.style.backgroundColor ='green';
    })
    clearAll.addEventListener('click', function(){
        inputs.removeChild(newToDo);
        inputs.removeChild(doneBtn);
        inputs.removeChild(deletebtn);
    })
    
}
});

