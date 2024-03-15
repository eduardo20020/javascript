// Llave de la API de OpenWeatherMap
const apiKey = '68081fb23788e63a071b135514309856';

// URL de la API de OpenWeatherMap
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=García,MX&appid=${apiKey}`;

// Obtener los datos del clima
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Mostrar los datos del clima en la página
        const weatherInfo = document.getElementById('weather-info');
        const cityName = data.name;
        const temperature = Math.round(data.main.temp - 273.15); // Convertir de Kelvin a Celsius
        const weatherDescription = data.weather[0].description;
        weatherInfo.innerHTML = `<p>Ciudad: ${cityName}</p>
                                    <p>Temperatura: ${temperature}°C</p>
                                    <p>Descripción: ${weatherDescription}</p>`;
    })
    .catch(error => {
        console.error('Hubo un error al obtener los datos del clima:', error);
    });
//////////////////////////////////////////////////////////////////
