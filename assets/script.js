$(document).ready(function() {
    // calling function to display the last searched city's data
    displayLastSearched();
console.log("JS file loaded");
$(document).on("click", "#searchButton", function(event){
    event.preventDefault();
    // creating cityName variable from user input
    var cityName = $("#cityName").val();
    console.log(cityName,"city name entered");
    // calling the getCurrentForecast and fiveDayForecast functions to display their data
    getCurrentForcast(cityName);
    fiveDayForecast(cityName);
    // storing the cityName in localStorage
    localStorage.setItem("lastSearched", JSON.stringify(cityName));
});
function getCurrentForcast (cityName){
    $.ajax({
        // pulling from api
        url:`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=29e66bd203ea7e7fb543299155a97662&units=imperial`,
        method:"GET"
        
    })
    // displaying the data from the current forecast
    .then(function(apiData){
        console.log(apiData);
        $("#forecast").html(`
        <div class="container-fluid">
        <h3>City: ${cityName}</h3>
        <h6>Temp: ${apiData.main.temp}<span><img src="https://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png" /><span></h6>
        <p>Wind Speed: ${apiData.wind.speed}</p>
        <p>Humidity: ${apiData.main.humidity}</p>


        `);
        // creating lat and lon variables
        var lat = apiData.coord.lat;
        var lon = apiData.coord.lon;
        console.log(lat, lon);
        // calling uvIndex function
        uvIndex(lat, lon);
    });
}
function fiveDayForecast (cityName){
    $.ajax({
        // pulling from api for the five day forecast
        url:`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=29e66bd203ea7e7fb543299155a97662&units=imperial`,
        method:"GET"

    })
    .then(function(apiData){
        console.log(apiData);
        apiData = apiData.list;
        console.log(apiData);
        var htmlString = "";
        // displaying the data
        for (let i =0;i<apiData.length;i=i+8){
             htmlString += `
                <div class="card">
                <p>Date: ${apiData[i].dt_txt}</p>
                <h6>Temp: ${apiData[i].main.temp}<span><img src="https://openweathermap.org/img/wn/${apiData[i].weather[0].icon}@2x.png" /><span></h6>
                <p>Wind Speed: ${apiData[i].wind.speed}</p>
                <p>Humidity: ${apiData[i].main.humidity}</p>
                </div>
             `;

        }
        $("#fiveDayForecast").html(htmlString);
        // $("#forecast").html(`
        // <div class="container-fluid">
        // <h3>City: ${cityName}</h3>
        // <h6>Temp: ${apiData.main.temp}<span><img src="http://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png" /><span></h6>
        // <p>Wind Speed: ${apiData.wind.speed}</p>
        // <p>Humidity: ${apiData.main.humidity}</p>


        // `)
    });
}
function uvIndex (lat, lon){
    // http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid={API key}
    // http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid={API key}
    $.ajax({
        // pulling from api for uv index data
        url:`https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=29e66bd203ea7e7fb543299155a97662`,
        method:"GET"

    })
    .then(function(apiData){
        console.log(apiData);
        $("#uvIndex").text("UV Index:" + apiData.value);
    });

}
// function to retrieve data from localStorage
function displayLastSearched (){
    var lastSearchedCity = JSON.parse(localStorage.getItem("lastSearched"));
    var data = "";
    getCurrentForcast(lastSearchedCity);
    fiveDayForecast(lastSearchedCity);
}
});