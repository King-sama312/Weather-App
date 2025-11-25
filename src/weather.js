import { displayWeatherInfo } from "./dom";

export async function getWeather(location) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=F52LXNSZXEGARRQD67MHDXCY2`, { mode: 'cors' });
        if (!response.ok) {
            throw new Error(`City ${location} not found`);
        }
        const raw = await response.json();
        const weatherData = processedData(raw)
        console.log(weatherData);
        displayWeatherInfo(weatherData)
        return weatherData;
    }
    catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

function processedData(data) {
    return {
        condition: data.currentConditions.conditions,
        temp: data.currentConditions.temp,
        city: data.resolvedAddress
    };
}