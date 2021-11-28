const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginInput");
const loginButton = document.querySelector("#loginButton");
const greeting = document.querySelector("#greeting")

const savedLocalStorage = localStorage.getItem("userSubmit");

const time = new Date();
const hour = time.getHours();

const HIDDEN_KEY = "hidden";
const FADE_IN = "fade-in";
const FADE_OUT = "fade-out";

function handleLoginSubmit(event) {
    event.preventDefault();
    const userSubmit = loginInput.value;
    localStorage.setItem("userSubmit", userSubmit);
    loginInput.classList.add(FADE_OUT);
    loginButton.classList.add(FADE_OUT);
    setTimeout(() => {
        loginInput.classList.add(HIDDEN_KEY);
        loginButton.classList.add(HIDDEN_KEY);
        greeting.classList.add(FADE_IN);
        todoInput.classList.add(FADE_IN);
        paintGreeting(userSubmit);
        showTodoInput();
    }, 300);
}

function paintGreeting(userSubmit) {
    greeting.classList.remove(HIDDEN_KEY);
    showTodoInput();
    if(6 <= hour && hour < 12) {
        greeting.innerText = `Good morning, ${userSubmit}!`;
    } else if(12 <= hour && hour < 18) {
        greeting.innerText = `Good afternoon, ${userSubmit}!`;
    } else if(18 <= hour && hour < 22) {
        greeting.innerText = `Good evening, ${userSubmit}!`;
    } else if(22 <= hour || hour < 6) {
        greeting.innerText = `Good night, ${userSubmit}!`;
    }
}

function showTodoInput() {
    todoInput.classList.remove(HIDDEN_KEY);
}

if(savedLocalStorage === null) {
    loginForm.addEventListener("submit", handleLoginSubmit);
} else {
    loginInput.classList.add(HIDDEN_KEY);
    loginButton.classList.add(HIDDEN_KEY);
    paintGreeting(savedLocalStorage);
}