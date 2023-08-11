const toDoForm = document.querySelector("toDo-form");
const toDoImput = document.querySelector("toDo-form input");
const toDoList = document.querySelector("toDo-list");

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    span.ineerText = newTodo;
    span.innerText = 'X';
    button.addEventListener('click', deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}



function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value ='';
    paintToDo(newTodo);
}

toDoForm.addEventListener('submit',handleTodoSubmit);
handleTodoSubmit()
