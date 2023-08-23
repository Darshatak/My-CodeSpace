<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Gather form data
    $firstname = $_POST["firstname"];
    $lastname = $_POST["lastname"];
    $email = $_POST["email"];
    $query = $_POST["query"];

    // Create a database connection
    $servername = "sql208.infinityfree.com";
    $username = "if0_34687197";
    $password = "E6W4pXnaDyP0ei";
    $dbname = "if0_34687197_darshatak";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }else{

    // Use prepared statement to insert data
    $stmt = $conn->prepare("insert INTO contact(firstname, lastname, email, query) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $firstname, $lastname, $email, $query);

    if ($stmt->execute()) {
        echo "Submission successful!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
    }

}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Contact Form</title>
</head>
<body>
    <div class="contact">
        <h1>Submitted</h1>
    </div>
</body>
</html>
