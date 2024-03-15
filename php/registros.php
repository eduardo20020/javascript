<?php
    if(isset($_POST["usuario"])){
        $usuario = $_POST["usuario"];
        $password2 = $_POST["password"];

        require "conexion.php";
        try {
            // Crear la consulta SQL de inserción
            $sql = "INSERT INTO usuarios (usuario, password) VALUES (:usuario, :password)";
    
            // Preparar la consulta
            $stmt = $pdo->prepare($sql);
    
            // Bind de los parámetros
            $stmt->bindParam(':usuario', $usuario);
            $stmt->bindParam(':password', $password2);
    
            // Ejecutar la consulta
            $stmt->execute();
            header("Location: ../index.html");
        } catch (PDOException $e) {
            // En caso de error, mostrar el mensaje de error
            echo "<script>alert('Error, ese usuario ya esta en uso: ')</script>";
            echo "<script>window.location.href = '../registros.html'</script>";
        }
    


    }
?>
