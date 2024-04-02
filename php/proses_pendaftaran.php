<?php
include 'koneksi.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ambil nilai dari formulir
    $nama = $_POST["nama"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    $sql = "INSERT INTO users (nama, email, password) VALUES ('$nama', '$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "Pendaftaran berhasil!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
