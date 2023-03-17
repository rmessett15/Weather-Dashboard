// tries to grab values from local storage and if there is no data there JSON parse will fail, and it will use an empty list instead as backup
var recentSearches = JSON.parse(localStorage.getItem("searches")) || [];
console.log(recentSearches);

function getWeather(city) {
    var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=011d8600955301988250a993be42df9e";
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        localStorage.setItem("city", JSON.stringify(data));
        setCurrentWeather(data.list[0]);
        setForecast(data.list);
        // localStorage.getItem("city", JSON.parse(data));????
    })
}

function setCurrentWeather(weather) {
    console.log(weather.main.temp);
    var currentTemperature = document.getElementById("current-temperature")
    currentTemperature.textContent = "Temperature: " + weather.main.temp;
    console.log(weather.main.humidity);
}

function setForecast(forecast) {
    for (var i = 0; i < forecast.length; i += 8) {
        console.log(forecast[i]);
        setForecastDay(forecast[i], (i/8) + 1);
    }
}

function setForecastDay(weather, dayNumber) {
    // 1. Get the div element for the day (using ID)
    // 2. Create an array for the new elements that you will add to the day
    // 3. For each part of the weather, create a new element for it. This involves creating the element, and setting the text
    // 4. Replace the existing children in the day element with the new children
    var day = document.getElementById("day-" + dayNumber)
    var dayList = [];
    var titleParagraph = document.createElement("p");
    titleParagraph.textContent = "Day" + dayNumber;
    dayList.push(titleParagraph);
    var tempParagraph = document.createElement("p");
    tempParagraph.textContent = "Temperature: " + weather.main.temp;
    dayList.push(tempParagraph);
    day.replaceChildren(...dayList);
}

var searchForm = document.getElementById("search-form");
var city = document.getElementById("city");
searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var searchCity = city.value.trim()
    recentSearches.push(searchCity);
    localStorage.setItem("searches", JSON.stringify(recentSearches));
    getWeather(searchCity);
});

// function init() {
//     var storedData = JSON.parse(localStorage.getItem("city"));
// }

// function storeDataToLocalStorage() {
    // var searchCity = city.value.trim();
    // var localStorageValue = getWeather(searchCity);
    // console.log(localStorageValue);
    // localStorage.setItem("city", JSON.stringify());
// }


// var city = document.getElementById("#city");
// console.log(city, "city");
// var button = document.getElementById("#click").addEventListener("click", getWeather(city))
// console.log("clicked")

// getWeather("Colorado Springs");



// function setCurrentCity() {
//     var 
// }



// Questions so far:
// Now that I have the object saved to local data as a string, where and how can i parse the information so i can render it in on my page.
// How do I get multiple cities saved into local storage and link the key name to each different city (so the key is equal to the city name, not just "city")
// Make a button element each time a city is searched so it can be added to the list of recent searches and can be clicked again to reopen already stored data




