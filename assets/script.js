console.log("JS file loaded")
$("#searchButton").on("click", function(event){
    event.preventDefault();
    var cityName = $("#cityName").val();
    console.log(cityName,"City name entered");
    getCurrentForcast(cityName);
});
function getCurrentForcast (cityName){
    $.ajax({
        url:`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=29e66bd203ea7e7fb543299155a97662&units=imperial`,
        method:"GET"

    })
    .then(function(apiData){
        console.log(apiData);
        $("#forecast").html(`
        <div class="container-fluid">
        <h3>City: ${cityName}</h3>
        <h6>Temp: ${apiData.main.temp}<span><img src="http://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png" /><span></h6>
        <p>Wind Speed: ${apiData.wind.speed}</p>
        <p>Humidity: ${apiData.main.humidity}</p>


        `)
    })
}
function fiveDayForecast (cityName){
    $.ajax({
        url:`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=29e66bd203ea7e7fb543299155a97662&units=imperial`,
        method:"GET"

    })
    .then(function(apiData){
        console.log(apiData);
        // $("#forecast").html(`
        // <div class="container-fluid">
        // <h3>City: ${cityName}</h3>
        // <h6>Temp: ${apiData.main.temp}<span><img src="http://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png" /><span></h6>
        // <p>Wind Speed: ${apiData.wind.speed}</p>
        // <p>Humidity: ${apiData.main.humidity}</p>


        // `)
    })
}