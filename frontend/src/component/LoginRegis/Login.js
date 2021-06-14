import React from 'react';
import '../../css/Login.css';
import bajuu from '../../asset/bajuu.jpg';

function Login() {
return (
    <div class="container" id="container">
		<div class="form-container log-in-container">
			<form action="#">
				<h1>Login</h1>
				<div class="social-container">
					<a href="#" class="social"><i class="fa fa-facebook fa-2x"></i></a>
					<a href="#" class="social"><i class="fab fa fa-twitter fa-2x"></i></a>
				</div>
				<span>or use your account</span>
				<input type="username" class="form-control" id="username" name="username" placeholder="Username"></input>
				<input type="password"  class="form-control" id="password" name="password" placeholder="Password"></input>
                <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" name="remember"></input>Remember Me
                    </label>
                </div>
                <br></br>
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
);
}

export default Login;