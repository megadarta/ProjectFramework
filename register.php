<?php 
include_once('db_connect.php');
$database = new database();
if(isset($_POST['register']))
{
    $username = $_POST['username'];
    $password = password_hash($_POST['password'],PASSWORD_DEFAULT);
    $nama = $_POST['nama'];
    if($database->register($username,$password,$nama))
    {
      header('location:login.php');
    }
}
 
?>
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="register.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
 <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Jekyll v3.8.5">	
<title>Login</title>
</head>
<body>
	<div class="container" id="container">
		<div class="form-container log-in-container">
			
                
				<h1>Register</h1>
                <br>
                <span>Please Register Your Identity</span>
                <hr/>
                <form method="post" action="">
				<div class="social-container">
				<h1>Register</h1>
                
                <span>Please Register Your Identity</span>
                <hr>
					<a href="#" class="social"><i class="fa fa-facebook fa-2x"></i></a>
					<a href="#" class="social"><i class="fab fa fa-twitter fa-2x"></i></a>
				</div>
		 <label for="username" class="col-sm-2 col-form-label"></label>
		<input type="text" class="form-control" id="username" name="username" placeholder="Username" />
                  <label for="nama" class="col-sm-2 col-form-label"></label>
		<input type="text" class="form-control" id="nama" name="nama" placeholder="Name" />
		<label for="password" class="col-sm-2 col-form-label"></label>
		<input type="password" class="form-control" id="password" name="pasword" placeholder="Password" />
				<a href="#">Forgot your password?</a>
                <a href="login.php" class="btn btn-success">Login</a>
                <button type="submit" class="btn btn-primary" name="register">Register</button>
               
              
                
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