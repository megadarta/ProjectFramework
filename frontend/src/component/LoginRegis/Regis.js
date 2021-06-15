import React, { useState } from 'react';
import '../../css/Regis.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faFacebook} from '@fortawesome/fontawesome-free-brands';

function Regis() {
    const [email, setEmail] = useState();
    const [nama, setNama] = useState();
    const [password, setPassword] = useState();

function user(e) {
    e.preventDefault();
    console.log(nama);
    console.log(email);
    console.log(password);
    fetch('http://localhost:3001/regis', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, nama, password })
    }).then(res => res.json()).then(data => console.log(data));
}


return (
	<div class="container" id="container">
		<div class="form-container regis log-in-container">
				<h1>Register</h1>
                <br/>
                <span>Please Register Your Identity</span>
                <hr/>
                <form method="post" onSubmit={user}>
				<div class="social-container">
				<h1>Register</h1>
                
                <span>Please Register Your Identity</span>
                <hr/>
					<a href="#" class="social"><FontAwesomeIcon className ='font-awesome' icon={faFacebook} /></a>
					<a href="#" class="social"><FontAwesomeIcon className ='font-awesome' icon={faInstagram} /></a>
				</div>

                
                <input onChange={e => setEmail(e.target.value)} type="text" class="form-control" id="email" name="email" placeholder="Email" />
                        
                <input onChange={e => setNama(e.target.value)} type="text" class="form-control" id="nama" name="nama" placeholder="Name" />
                
                <input onChange={e => setPassword(e.target.value)}  type="password" class="form-control" id="password" name="pasword" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
						<button type="submit" class="btn btn-primary regis" name="register">Register</button>
                        <a href="/login" class="btn btn-success regis">LOGIN</a>
                        
			</form>
		</div>
		<div class="overlay-container">
			<div class="overlay">
				<div class="overlay-panel overlay-right">
				<div className="boxT"><h1>Thrift-In</h1></div>
				</div>
			</div>
		</div>
	</div>
);
}

export default Regis;