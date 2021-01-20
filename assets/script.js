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

    })
}