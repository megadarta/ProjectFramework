<?php 
session_start();
include_once('db_connect.php');
$database = new database();
 
if(isset($_SESSION['is_login']))
{
    header('location:home.php');
}
 
if(isset($_COOKIE['username']))
{
  $database->relogin($_COOKIE['username']);
  header('location:home.php');
}
 
if(isset($_POST['login']))
{
    $username = $_POST['username'];
    $password = $_POST['password'];
    if(isset($_POST['remember']))
    {
      $remember = TRUE;
    }
    else
    {
      $remember = FALSE;
    }
 
    if($database->login($username,$password,$remember))
    {
      header('location:home.php');
    }
}
?>
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="Style.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<title>Login</title>
</head>
<body>
	<div class="container" id="container">
		<div class="form-container log-in-container">
			<form action="#">
				<h1>Login</h1>
				<div class="social-container">
					<a href="#" class="social"><i class="fa fa-facebook fa-2x"></i></a>
					<a href="#" class="social"><i class="fab fa fa-twitter fa-2x"></i></a>
				</div>
                
				<span>or use your account</span>
				<input type="username" class="form-control" id="username" name="username" placeholder="Username" />
				<input type="password"  class="form-control" id="password" name="password" placeholder="Password" />
                <div class="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me" name="remember">Remember Me
    </label>
  </div>
  <br>

                <button class="btn btn-lg btn-primary btn-block" type="submit" name="login">Login</button>
                <a href="register.php" class="btn btn-lg btn-success btn-block">Register</a>
               
                
			</form>
		</div>
		<div class="overlay-container">
			<div class="overlay">
				<div class="overlay-panel overlay-right">
					<h1>Thrift-In</h1>
					<p></p>
				</div>
			</div>
		</div>

	</div>
</body>
</html>