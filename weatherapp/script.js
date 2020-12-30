/**
 * Weather App
 * DONE: Complete getWeatherData() to return json response Promise
 * DONE: Complete searchCity() to get user input and get data using getWeatherData()
 * DONE: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key
    const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  //CODE GOES HERE
  //fetch(FULL_URL).then(response => response.json()).then(data => console.log(data));
  const weatherPromise = fetch(FULL_URL);
  return weatherPromise.then((response)=>{
      return response.json();
  });
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  getWeatherData(city).then((response)=>{
      showWeatherData(response);
  }).catch((error)=>{
      console.log(error)
  })
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
  //CODE GOES HERE
  console.log(weatherData);
  document.getElementById('city-name').innerHTML = weatherData.name;
  document.getElementById('weather-type').innerHTML = weatherData.weather[0].main;
  document.getElementById('temp').innerHTML = weatherData.main.temp;
  document.getElementById('min-temp').innerHTML = weatherData.main.temp_min;
  document.getElementById('max-temp').innerHTML = weatherData.main.temp_max;
}

