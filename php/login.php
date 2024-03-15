<?php
if(isset($_POST["usuario"])){
    $usuario = $_POST["usuario"];
    $password2 = $_POST["password"];

    require "conexion.php";
    try {
        // Crear la consulta SQL de inserción
        $sql = "SELECT * FROM usuarios WHERE usuario = ? AND password = ?";
        
        // Preparar la consulta
        $stmt = $pdo->prepare($sql);
        
        // Bind de los parámetros
        $stmt->bindValue(1, $usuario);
        $stmt->bindValue(2, $password2);
        
        // Ejecutar la consulta
        $stmt->execute();
        
        // Obtener el resultado de la consulta
        $resultado = $stmt->fetch(PDO::FETCH_ASSOC);
        
        // Verificar si se encontraron filas
        if($resultado) {
            // Usuario y contraseña válidos, redireccionar a la página de inicio
            header("Location: ../dashboard.html");
        } else {
            // Usuario o contraseña incorrectos, redireccionar a la página de inicio con mensaje de error
            echo "<script>alert('Usuario o contraseña incorrectos')</script>";
            echo "<script>window.location.href = '../index.html'</script>";
        }
    } catch (PDOException $e) {
        // En caso de error, mostrar el mensaje de error
        echo "<script>alert('Error al verificar datos: {$e->getMessage()}')</script>";
        echo "<script>window.location.href = '../index.html'</script>";
    }
}
?>
