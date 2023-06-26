<?php
// Establish database connection
$host = "localhost";
$database = "your_database";

$conn = mysqli_connect($host, '', '', $database);
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Function to execute SQL queries
function executeQuery($query) {
  global $conn;
  $result = mysqli_query($conn, $query);
  return $result;
}
?>
