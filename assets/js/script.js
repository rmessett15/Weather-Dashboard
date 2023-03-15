function getWeather(city) {
    console.log("weather");
    var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=011d8600955301988250a993be42df9e";
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
}




getWeather("Alabama");