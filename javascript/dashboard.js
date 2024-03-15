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

 // Utilizamos fetch para obtener los datos del servidor
 fetch('../php/datos.php')
 .then(response => response.json()) // Convertimos la respuesta a JSON
 .then(data => {
     // Manipulamos los datos recibidos
     let usuariosBody = document.getElementById('usuariosBody');
     data.forEach(usuario => {
         // Creamos una fila para cada usuario
         let row = usuariosBody.insertRow();
         // Insertamos celdas para el usuario y la contraseña
         let cellUsuario = row.insertCell(0);
         let cellPassword = row.insertCell(1);
         // Insertamos los datos del usuario en las celdas
         cellUsuario.textContent = usuario.usuario;
         cellPassword.textContent = usuario.password;
     });
 })
 .catch(error => console.error('Error:', error)); // Manejamos errores si los hay