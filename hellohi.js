const toDoForm = document.querySelector("toDo-form");
const toDoImput = document.querySelector("toDo-form input");
const toDoList = document.querySelector("toDo-list");

function deleteToDo() {
    console.log('delete function');
}

function paintToDo(newTodo) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    span.innerText = 'X';
    button.addEventListener('click', deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}



function handleTodoSubmit(event) {
    console.log(event.target.parentElement);
    const li = event.target.parentElement;
    li.remove();
    event.preventDefault();
    const newtodo = toDoinput.value;
    toDoInput.value ='';
    paintToDo(newTodo);
}

toDoForm.addEventListener('submit',handleTodoSubmit);
handleTodoSubmit()
