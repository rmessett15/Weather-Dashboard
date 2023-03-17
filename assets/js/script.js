function getWeather(city) {
    var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=011d8600955301988250a993be42df9e";
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        localStorage.setItem("city", JSON.stringify(data));
        // localStorage.getItem("city", JSON.parse(data));????
    })
}

var searchForm = document.getElementById("search-form");
var city = document.getElementById("city");
searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var searchCity = city.value.trim()
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




