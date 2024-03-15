//OBTENEMOS LOS DATOS DEL FORMULARIO
var formulario = document.getElementById("formulario");
var usuario = document.getElementById("campousuario");
var password = document.getElementById("campopassword");

//MANEJAMOS LOS DATOS DEL FORMULARIO CON JAVASCRIPT
formulario.addEventListener('submit', (event) => {

    // Evitar que el formulario se envíe por defecto
    event.preventDefault();

    //HAZEMOS LA VALIDACION DE DATOS PARA QUE NO SE MANDEN DATOS VACIOS
    if(usuario.value=="" || password.value==""){
        alert("rellena los campos")
    }else{
        formulario.submit();
    }
});