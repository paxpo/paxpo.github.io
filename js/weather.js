const API_KEY = "4e80c24fa77d232dded10e2f29207bde";

function getWeatherPositive(locationInfo) {
    const lat = locationInfo.coords.latitude;
    const lon = locationInfo.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather");
        const city = document.querySelector("#city");
        weather.classList.add("fade-in");
        city.classList.add("fade-in");
        weather.innerText = `${data.weather[0].main} ${data.main.temp}℃`
        city.innerText = data.name;
    });
}

function getWeatherNegative() {
    alert("Need your permission to show weather and city!");
}

navigator.geolocation.getCurrentPosition(getWeatherPositive, getWeatherNegative);
