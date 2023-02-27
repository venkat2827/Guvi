<?php
session_start();

if(isset($_POST['email']) && isset($_POST['password'])) {
  $email = $_POST['email'];
  $password = $_POST['password'];

  // Validate email and password using database
  // Connect to MySQL database
  $conn = mysqli_connect('localhost', 'username', 'password', 'database_name');
  if(mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    exit();
  }

  // Prepare and execute query using prepared statements
  $stmt = mysqli_prepare($conn, "SELECT * FROM users WHERE email = ?");
  mysqli_stmt_bind_param($stmt, "s", $email);
  mysqli_stmt_execute($stmt);
  $result = mysqli_stmt_get_result($stmt);

  // Fetch user from database
  $user = mysqli_fetch_assoc($result);

  // Verify password
  if(password_verify($password, $user['password'])) {
    // Login successful
    // Store user information in session and redirect to profile page
    $_SESSION['user_id'] = $user['id'];
    header('Location: profile.php');
    exit();
  } else {
    // Login failed
    echo "Invalid email or password.";
  }
}
?>
