import "./style.css";
import { getWeather } from "./weather";
import { displayWeatherInfo } from "./dom";

const searchInput = document.querySelector('#location-input');
const searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click', async () => {
    const city = searchInput.value;
    
    if (city) {
        // A. Call the API (Wait for it!)
        const weatherData = await getWeather(city);
        
        // B. If we got data back, update the screen
        if (weatherData) {
            displayWeatherInfo(weatherData);
            searchInput.value = "";
        }
    }
});

getWeather("London").then(data => displayWeatherInfo(data));