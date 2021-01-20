console.log("JS file loaded")
$("#searchButton").on("click", function(event){
    event.preventDefault();
    var cityName = $("#cityName").val();
    console.log(cityName,"City name entered");
    getCurrentForcast(cityName);
    fiveDayForecast(cityName);
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
        var lat = apiData.coord.lat;
        var lon = apiData.coord.lon;
        console.log(lat, lon);
        uvIndex(lat, lon)
    })
}
function fiveDayForecast (cityName){
    $.ajax({
        url:`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=29e66bd203ea7e7fb543299155a97662&units=imperial`,
        method:"GET"

    })
    .then(function(apiData){
        console.log(apiData);
        apiData = apiData.list
        console.log(apiData)
        var htmlString = ""
        for (let i =0;i<apiData.length;i=i+8){
             htmlString += `
                <div class="card">
                <p>Date: ${apiData[i].dt_txt}</p>
                <h6>Temp: ${apiData[i].main.temp}<span><img src="http://openweathermap.org/img/wn/${apiData[i].weather[0].icon}@2x.png" /><span></h6>
                <p>Wind Speed: ${apiData[i].wind.speed}</p>
                <p>Humidity: ${apiData[i].main.humidity}</p>
                </div>
             `

        }
        $("#fiveDayForecast").html(htmlString);
        // $("#forecast").html(`
        // <div class="container-fluid">
        // <h3>City: ${cityName}</h3>
        // <h6>Temp: ${apiData.main.temp}<span><img src="http://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png" /><span></h6>
        // <p>Wind Speed: ${apiData.wind.speed}</p>
        // <p>Humidity: ${apiData.main.humidity}</p>


        // `)
    })
}
function uvIndex (lat, lon){
    // http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid={API key}
    // http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid={API key}
    $.ajax({
        url:`https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=29e66bd203ea7e7fb543299155a97662`,
        method:"GET"

    })
    .then(function(apiData){
        console.log(apiData);
        $("#uvIndex").text("UV Index:" + apiData.value);
    })

}