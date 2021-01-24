# weatherdashboard

# purpose
- the purpose of this program is to allow the user to input a city of their desire and have a uv index, 5 day forecast, and current forecast for that city be pulled from an api and appear on the screen
- the program also must display the last inputted city's data that was stored in localStorage

# index.html walkthrough
- user input defining the cityName variable used throughout the script.js file
- div tag displaying the uv index
- div tag displaying the five day forecast
- div tag displaying the results of the previous inputted city that was stored in localStorage

# script.js walkthrough
- function displaying the previously searched city's data
- created cityName variable defined by user input
- calling the getCurrentForecast and fiveDayForecast functions in order to display their data
- storing cityName in localStorage
- pulling from api
- displaying the data from the current forecast
- creating variables for lat and lon for the uv index
- calling uvIndex function
- pulling from the api to get information for the fiveDayForecast funciton
- pulling from api for uv index data
- function to retrieve data from localStorage

# style.css walthrough
- made the heading bigger and italicized
- made the search button pink
- made the font asking for user input larger

# working link 
# https://jourdangundersen.github.io/weatherdashboard/

# screenshot
![](assets/images/weather-dashboard-screenshot.png)