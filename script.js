const apiKey = "2ac4487a467ebef4923a136313787d40";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?appid=2ac4487a467ebef4923a136313787d40&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + '&appid=${apiKey}');
    
    if(response.status == 404) {
        
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    } else {
        
        var data = await response.json()

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clear") {
            weatherIcon.src = "assets/Clear.png"
        } else if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "assets/Clouds.png"
        } else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "assets/Drizzle.png"
        } else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "assets/Mist.png"
        } else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "assets/Rain.png"
        } else if(data.weather[0].main == "Snow") {
            weatherIcon.src = "assets/Snow.png"
        }

        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
        
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})