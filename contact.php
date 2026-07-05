<?php

$conn = mysqli_connect("localhost", "root", "", "student_db");

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$sql = "INSERT INTO contact (name, email, phone, message)
        VALUES ('$name', '$email', '$phone', '$message')";

if (mysqli_query($conn, $sql)) {
    echo "Message Sent Successfully!";
} else {
    echo "Error: " . mysqli_error($conn);
}

mysqli_close($conn);

?>