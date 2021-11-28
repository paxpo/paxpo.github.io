const todoForm = document.querySelector("#todoForm");
const todoList = document.querySelector("#todoList");
const todoInput = document.querySelector("#todoInput");

let todos = [];
let isSavedTodo = false;
const savedTodo = localStorage.getItem("todo");

function handleTodoSubmit(event) {
    event.preventDefault();
    const todoSubmit = todoInput.value;
    todoInput.value = "";
    const todoSubmitObj = {
        text: todoSubmit,
        id: Date.now()
    };
    todos.push(todoSubmitObj);
    paintTodo(todoSubmitObj);
    saveTodo();
}

function paintTodo(todoSubmitObj) {
    const p = document.createElement("p");
    p.id = todoSubmitObj.id;
    if(!isSavedTodo) {
        p.classList.add("fade-in");
    }
    const span = document.createElement("span")
    span.innerText = todoSubmitObj.text;
    const button = document.createElement("button");
    button.innerText = "⨉";
    button.addEventListener("click", deleteTodo);
    p.appendChild(button);
    p.appendChild(span);
    todoList.appendChild(p);
}

function saveTodo() {
    localStorage.setItem("todo", JSON.stringify(todos));
}

function deleteTodo(event) {
    const parent = event.target.parentElement;
    parent.classList.add("fade-out");
    setTimeout(() => {
        parent.remove();
        todos = todos.filter((todo) => todo.id !== parseInt(parent.id));
    saveTodo();
    }, 350);
}

todoForm.addEventListener("submit", handleTodoSubmit);

if(savedTodo !==null) {
    isSavedTodo = true;
    const parsedTodos = JSON.parse(savedTodo);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
    isSavedTodo = false;
}