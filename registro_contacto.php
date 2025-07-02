<?php
// Configuración de la base de datos
$host = 'localhost';
$usuario = 'root';
$contrasena = ''; // en XAMPP normalmente está vacío
$base_datos = 'exploraconmigo_db';

// Crear conexión
$conn = new mysqli($host, $usuario, $contrasena, $base_datos);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener datos del formulario
$nombre = $_POST['nombre'] ?? '';
$email = $_POST['email'] ?? '';
$mensaje = $_POST['mensaje'] ?? '';

// Validación básica
if (empty($nombre) || empty($email) || empty($mensaje)) {
    http_response_code(400);
    echo "Todos los campos son obligatorios.";
    exit;
}

// Preparar la consulta
$sql = "INSERT INTO contactos (nombre, email, mensaje) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);

if ($stmt) {
    $stmt->bind_param("sss", $nombre, $email, $mensaje);
    $stmt->execute();
    $stmt->close();
    http_response_code(200);
} else {
    http_response_code(500);
    echo "Error al preparar la consulta.";
}

// Cerrar la conexión
$conn->close();
?>
