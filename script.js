// It should discover the location of a computer automatically
// see https://www.wunderground.com/weather/api/d/docs?d=data/conditions#examples
// It should display the location on screen

// It should display the current temperature at the computer's location
function displayTemp(currentTemp) {
  console.log('Current temperature: ' + currentTemp.toFixed(0));
}

// It should have a toggle for Celsius and Fahrenheit
function fahrenheitToCelsius(currentTemp) {
  currentTemp = (currentTemp - 32) * (5/9);
  displayTemp(currentTemp);  
}
function celsiusToFahrenheit(currentTemp) {
  currentTemp = currentTemp * (9/5) + 32;
  displayTemp(currentTemp);
}
//It should have an object that stores the current data
var currentWeather = {
  currentTempData: [{
    currentTemp: 45,
    isFahrenheit: true
  }],
  displayTemp: function() {
    console.log('Current temperature: ' + this.currentTempData[0].currentTemp);
  },
  updateTemp: function(currentTemp) {
    this.currentTempData[0].currentTemp = currentTemp;
    this.displayTemp();
  },
  toggleFahrenheit: function() {
    var switchTemp = this.currentTemp[0].isFahrenheit;
    switchTemp = !switchTemp;
    this.displayTemp();
  }
};
// It should show a different icon or background that corresponds with the temperature/weather
