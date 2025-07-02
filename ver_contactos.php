<?php
// Conexión a la base de datos (misma configuración que arriba)
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Consulta SQL
$sql = "SELECT id, nombre, email, mensaje, fecha_registro FROM contacto ORDER BY fecha_registro DESC";
$result = $conn->query($sql);

// Mostrar resultados
if ($result->num_rows > 0) {
    echo "<h2>Mensajes Recibidos</h2>";
    echo "<table border='1'><tr><th>ID</th><th>Nombre</th><th>Email</th><th>Mensaje</th><th>Fecha</th></tr>";
    
    while($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>".$row["id"]."</td>
                <td>".htmlspecialchars($row["nombre"])."</td>
                <td>".htmlspecialchars($row["email"])."</td>
                <td>".nl2br(htmlspecialchars($row["mensaje"]))."</td>
                <td>".$row["fecha_registro"]."</td>
              </tr>";
    }
    echo "</table>";
} else {
    echo "No hay mensajes aún.";
}

require_once 'config.php';

$conn->close();
?>