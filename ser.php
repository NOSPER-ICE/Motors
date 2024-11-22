<?php
$servername = "localhost";
$username = "tu_usuario";
$password = "tu_contraseña";
$dbname = "tu_base_de_datos";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $idProducto = $_POST["idProducto"];
    $cantidad = $_POST["cantidad"];

    $sql = "INSERT INTO carrito (idProducto, cantidad) VALUES ('$idProducto', '$cantidad')";

    if ($conn->query($sql) === TRUE) {
        echo "Producto agregado al carrito";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>