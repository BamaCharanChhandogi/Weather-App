const apikey="8afd56b6849a39713f6ca314364a03a2";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=kolkata";
async function checkWeather(){
    const response= await fetch(apiUrl+ `&appid=${apikey}`);
    var data= await response.json();
    console.log(data);

    document.querySelector('temp').innerHTML=data.main.temp + "°C";
    document.querySelector('city').innerHTML=data.name;
    document.querySelector('humedity').innerHTML=data.main.humidity + "%";
    document.querySelector('wind').innerHTML=data.wind.speed + "km/h";

}