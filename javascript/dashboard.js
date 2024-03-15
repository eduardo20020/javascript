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
 /////////////////////////////////////////////////////////////////



 //desplegable
 document.addEventListener("DOMContentLoaded", function() {
    var toggleMenu = document.getElementById("toggleMenu");
    var dropdownMenu = document.getElementById("navbarDropdown");

    toggleMenu.addEventListener("click", function() {
      dropdownMenu.classList.toggle("show");
    });
  });
  ///////////////////////////////////////////////


  ///cambia de color
    // Función para generar un color aleatorio en formato hexadecimal
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    // Obtener el enlace "Cambia colores"
    var changeColorLink = document.getElementById("colores");

    // Agregar un event listener para el clic en el enlace "Cambia colores"
    changeColorLink.addEventListener("click", function(event) {
      // Generar un color aleatorio
      var randomColor = getRandomColor();
      // Cambiar el color de fondo del body al color aleatorio
      document.body.style.backgroundColor = randomColor;
      // Evitar el comportamiento predeterminado del enlace
      event.preventDefault();
    });
