const City = document.querySelector('.city');
const Temperature = document.querySelector('.temp');
const Conditions = document.querySelector('.conditions');

export function displayWeatherInfo(data) {
    City.textContent = data.city;
    Temperature.textContent = `${data.temp}°C`;
    Conditions.textContent = data.condition;
}
