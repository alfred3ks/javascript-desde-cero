<?php

$conn = NULL;
try {
    $con = new PDO(
        'mysql:host=localhost;
        dbname=marvel;',
        'root',
        'root'
    );
    if (isset($_GET['id'])) {
        $id = $_GET['id'];
        $sql = "SELECT * FROM characters WHERE id = $id";
    } else {
        $sql = "SELECT * FROM characters";
    }
    // Preparamos la consulta:
    $stm = $con->prepare($sql);
    // Ejecutamos la consulta
    $stm->execute();
    // Guardamos el resultado en un array asociativo:
    $resultSet = $stm->fetchAll(PDO::FETCH_ASSOC);
    // El array asociativo lo paso a JSON:
    echo json_encode($resultSet);
} catch (PDOException $e) {
    echo "Error " . $e->getMessage();
}
