<?php
    require "conexion.php";
    try {
        // Crear la consulta SQL de selección
        $sql = "SELECT * FROM usuarios";
        
        // Preparar la consulta
        $stmt = $pdo->prepare($sql);
    
        // Ejecutar la consulta
        $stmt->execute();
        
        // Obtener el resultado de la consulta como un array asociativo
        $resultados = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Convertir los resultados a JSON y mostrarlos
        echo json_encode($resultados);

    } catch (PDOException $e) {
        // En caso de error, mostrar el mensaje de error
        echo json_encode(array('error' => 'Error al verificar datos: ' . $e->getMessage()));
    }
?>
