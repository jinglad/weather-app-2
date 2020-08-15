let apiKey = "c8fba1dcfad05712a793d086393991d2";
let unit = "metric"

function searchWeather(searchItem) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchItem}&appid=${apiKey}&units=${unit}`)
        .then(res => res.json())
        .then(data => {
            displayInfo(data);
        });
}


function displayInfo(responseFromServer) {
    // console.log(responseFromServer.weather.icon);
    document.getElementById('weatherDescription').style.visibility = "visible";
    let weatherDescriptionHeader = document.getElementById('weatherDescriptionHeader');
    weatherDescriptionHeader.innerHTML = responseFromServer.weather[0].main;
    let temperature = document.getElementById('temperature');
    temperature.innerHTML = responseFromServer.main.temp + "&#176" + "c";
    let humidity = document.getElementById('humidity');
    humidity.innerHTML = "Humidity at " + responseFromServer.main.humidity + "%";
    let windSpeed = document.getElementById('windSpeed');
    windSpeed.innerHTML = "Windspeed at " + responseFromServer.wind.speed + " m/s";
    let weatherIcon = document.getElementById('icon');
    weatherIcon.src = 'https://openweathermap.org/img/wn/' + responseFromServer.weather[0].icon + '.png';
    let cityName = document.getElementById('cityName');
    cityName.innerHTML = responseFromServer.name;

    switch (responseFromServer.weather[0].main) {
        case "Clear":
            document.body.style.background = "url(img/clear.jpg)";
            break;
        case 'Rain':
        case 'Drizzle':
        case 'Mist':
            document.body.style.background = "url(img/rain.jpg)";;
            break;
        case "Thunderstorm":
            document.body.style.background = "url(img/thunder.jpg)";
            break;
        case "Snow":
            document.body.style.background = "url(img/snow.jpg)";
            break;
        case "Clouds":
            document.body.style.background = "url(img/clouds.jpg)";
            break;
        default:
            break;
    }
}

document.getElementById('searchBtn').addEventListener('click', function () {
    let serachItem = document.getElementById('searchCity').value;
    searchWeather(serachItem);
})


