<?php
// Datos de conexión a la base de datos
$host = 'localhost';
$dbname = 'brandon14marzo';
$username = 'root';
$password = '';

try {
    // Establecer la conexión utilizando PDO
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    // Configurar el modo de error de PDO para lanzar excepciones
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // En caso de error, mostrar el mensaje de error
    echo "<script>alert('Error de conexion: ')</script>";
    echo "<script>window.location.href = '../index.html'</script>";
}
?>
