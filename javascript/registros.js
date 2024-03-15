//OBTENEMOS LOS DATOS DEL FORMULARIO
var formulario = document.getElementById("formulario");
var usuario = document.getElementById("campousuario");
var password = document.getElementById("campopassword");
var passwordConfirmada = document.getElementById("campoconfirmarpass");


//MANEJAMOS LOS DATOS DEL FORMULARIO CON JAVASCRIPT
formulario.addEventListener('submit', (event) => {

    // Evitar que el formulario se envíe por defecto
    event.preventDefault();

    //HAZEMOS LA VALIDACION DE DATOS PARA QUE NO SE MANDEN DATOS VACIOS
    if(usuario.value=="" || password.value=="" || passwordConfirmada.value==""){
        alert("rellena los campos")
    }else{
        //VALIDAMOS QUE LAS DOS CONTRASENAS COINCIDAN
        if(password.value != passwordConfirmada.value){
            alert("las contreasenas no coinciden")
        }else{
            //SI LAS CONTRASENAS CONINCIDEN INSERTAMOS LOS DATOS EN LA BD
            formulario.submit();
        }
    }
});
