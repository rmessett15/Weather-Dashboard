// Tries to grab values from local storage and if there is no data, JSON parse will fail, and it will use an empty list instead as backup
// Want to parse data so data persists across multiple page loads
var recentSearches = JSON.parse(localStorage.getItem("searches")) || [];
console.log(recentSearches);
// My attempt to add to recently viewed
var searchHistory = document.getElementById("recently-viewed");
getWeather("Austin")

// Function which fetches data from the open weather API
function getWeather(city) {
    var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=011d8600955301988250a993be42df9e&units=imperial";
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
      console.log(data);
      localStorage.setItem("city", JSON.stringify(data));
      console.log(data);
      // Set current city
      var currentCity = document.getElementById("current-city");
      currentCity.textContent = city;
      setCurrentWeather(data.list[0]);
      setForecast(data.list);
    })
}

// Function to convert kelvin to fahrenheit
function convertToFahrenheit(kelvin) {
    var kTemp = kelvin;
    var kToFar = (kTemp - 273.15) * 1.8 + 32;
    var message = kToFar + " \xB0F";
    return message;
}

console.log(convertToFahrenheit(279.45));

// Function to set current day forecast
function setCurrentWeather(weather) {
    // To set current date
    var forecastDate = weather.dt;
    console.log(forecastDate);
    var convertTimeMilli = forecastDate * 1000;
    var dateTime = new Date(convertTimeMilli);
    var newDate = dateTime.toLocaleDateString("en-US", { dateStyle: "short" });
    console.log(newDate);
    var currentDate = document.getElementById("current-date");
    currentDate.innerHTML = newDate;
    // To set current icon
    var iconParagraphId = weather.weather[0].icon;
    var iconLink =
      "https://openweathermap.org/img/wn/" + iconParagraphId + ".png";
    console.log(iconLink);
    var iconHTML = '<img src="' + iconLink + '">';
    console.log(iconHTML);
    var currentIcon = document.getElementById("current-icon");
    currentIcon.innerHTML = iconHTML;
    // To set current temp
    console.log(weather.main.temp);
    var currentTemperature = document.getElementById("current-temperature");
    var convert = convertToFahrenheit(weather.main.temp);
    console.log(convert);
    currentTemperature.textContent = "Temperature: " + weather.main.temp + " \xB0F";
    // To set current wind
    var currentWind = document.getElementById("current-wind");
    currentWind.textContent = "Wind: " + weather.wind.speed + " MPH";
    // To set current humidity
    var currentHumidity = document.getElementById("current-humidity");
    currentHumidity.textContent = "Humidity: " + weather.main.humidity + " %";
    }

// Loop made so I can iterate over the entire weeks worth of data but only grab every 8th index from my list array
function setForecast(forecast) {
    for (var i = 0; i < forecast.length; i += 8) {
        console.log(forecast[i]);
        setForecastDay(forecast[i], (i/8) + 1);
    }
}

// Function to set 5 day forecast
function setForecastDay(weather, dayNumber) {
  // 1. Get the div element for the day (using ID)
  // 2. Create an array for the new elements that you will add to the day
  // 3. For each part of the weather, create a new element for it. This involves creating the element, and setting the text
  // 4. Replace the existing children in the day element with the new children

  // Icon
  var iconParagraph = document.createElement("p");
  var iconParagraphId = weather.weather[0].icon;
  var iconLink = "https://openweathermap.org/img/wn/" + iconParagraphId + ".png";
  console.log(iconLink);
  var iconHTML = '<img src="' + iconLink + '">';
  console.log(iconHTML);
  // Date conversion from unix timestamp
  var forecastParagraph = document.createElement("p");
  var forecastDate = weather.dt;
  console.log(forecastDate);
  var convertTimeMilli = forecastDate * 1000;
  var dateTime = new Date(convertTimeMilli);
  var newDate = dateTime.toLocaleDateString("en-US", { dateStyle: "short" });
  console.log(newDate);
  // Converted date appended to page
  var day = document.getElementById("day-" + dayNumber);
  var dayList = [];
  var titleParagraph = document.createElement("p");
  console.log(iconHTML);
  titleParagraph.innerHTML = newDate + iconHTML;
  dayList.push(titleParagraph);
  // Temperature
  var tempParagraph = document.createElement("p");
  tempParagraph.textContent = "Temp: " + weather.main.temp + " \xB0F";
  dayList.push(tempParagraph);
  day.replaceChildren(...dayList);
  // Wind
  var windParagraph = document.createElement("p");
  windParagraph.textContent = "Wind: " + weather.wind.speed + " MPH";
  dayList.push(windParagraph);
  day.replaceChildren(...dayList);
  // Humidity
  var humidityParagraph = document.createElement("p");
  humidityParagraph.textContent = "Humidity: " + weather.main.humidity + " %";
  dayList.push(humidityParagraph);
  day.replaceChildren(...dayList);
}

// Adds event listener on submit button 
var searchForm = document.getElementById("search-form");
var city = document.getElementById("city");
searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var searchCity = city.value.trim()
    // Adds searched city to local storage
    executeSearch(searchCity);
    // Creates a button element with the most recently searched city and when clicked pulls the data of that city from local storage
    addRecentSearch(searchCity);
});

// Adds recently searched cities to button elements and when buttons are clicked, cities specific data is re-loaded to the page 
function addRecentSearch(city) {
    // 1. Create a function for appending to recently viewed, which is run when a search is run
    // 2. In that function create a button element with the text of the search and append it to the recent searches list. Store this button in a variable
    // 3. Add an event listener for when that button is clicked. When it's clicked perform the search for that city
    // 4. Append that button to the recent searches
    var recentButton = document.createElement("button");
    recentButton.textContent = city;
    recentButton.addEventListener("click", function() {
        executeSearch(city);
    });
    searchHistory.appendChild(recentButton);
}

// Adds searched city to local storage
function executeSearch(searchCity) {
    recentSearches.push(searchCity);
    localStorage.setItem("searches", JSON.stringify(recentSearches));
    getWeather(searchCity);
}













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

// Need to convert temp to fahrenheit
// Need to add icons, date to 5 day forecast section
// Need to add current city name and date to currently displayed section
// Need to figure out recent search history (need buttons and a click event reloading that cities information)
// Need to mess with the page responsiveness
// Need to style page
// Need to format all docs
// Need to complete README.md

// Why do I stringify and parse in regards to putting in and pulling out of local storage
// Why do my buttons keep adding more buttons when clicked
// Page responsiveness






