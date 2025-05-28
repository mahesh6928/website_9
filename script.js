function inputchange(){
    console.log('Someting Enter');
    
}

const taskinput =document.getElementById('taskinput');
const addtask=document.getElementById('addtask');
const tasklist=document.getElementById('tasklist');

addtask.addEventListener('click',()=>{
    const tasktext=taskinput.value;
    console.log('tasktext:',tasktext);

    if(tasktext ===''){
        alert('plase enter a task');
        return;
    }
    const listitem=document.createElement('li');

    const span=document.createElement('span');
    span.textContent=tasktext;

    const deletebtn=document.createElement('button');
    deletebtn.textContent='Delete Task';
    deletebtn.style.color='black';

    deletebtn.addEventListener('click',()=>{
        tasklist.removeChild(listitem);
    });

    listitem.appendChild(span);
    listitem.appendChild(deletebtn);

    tasklist.appendChild(listitem);

    taskinput.value=''

});