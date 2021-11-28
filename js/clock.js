const clock = document.querySelector("#clock");
const weekindDay = document.querySelector("#days");

const days = ["Sun","Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
const daysH = ["日", "月", "火", "水", "木", "金", "土"]

function getClock() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    const day = daysH[date.getDay()];
    clock.innerText = `${hour}:${minute}:${second}`;
}

getClock();
setInterval(getClock, 1000);