const apikey = "8afd56b6849a39713f6ca314364a03a2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const changeImage = document.querySelector(".weather-icon");
//pass value to CheckWeather function from input section
searchBtn.addEventListener('click', function () {
    checkWeather(searchBox.value);
});
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    //check 404
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        document.querySelector(".error").style.display = "none";
    }
    var data = await response.json();
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humedity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";

    // Change Images according to Weather 
    if (data.weather[0].main == "Clouds") {
        changeImage.src = "asset/images/clouds.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        changeImage.src = "asset/images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        changeImage.src = "asset/images/mist.png";
    }
    else if (data.weather[0].main == "Rain") {
        changeImage.src = "asset/images/rain.png";
    }
    else if (data.weather[0].main == "Snow") {
        changeImage.src = "asset/images/snow.png";
    }
    document.querySelector('.weather').style.display = "block";
}
//function call
checkWeather();