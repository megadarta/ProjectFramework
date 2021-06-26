import React, { useState } from 'react';
import '../../css/Regis.css';

import swal from 'sweetalert';
import { useHistory } from 'react-router';

function Regis() {
    const [email, setEmail] = useState();
    const [nama, setNama] = useState();
    const [password, setPassword] = useState();
    
    const history = useHistory();

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
    }).then(res => res.json()).then(data => {
            console.log(data);
            history.push("/login");
            swal("Success!", "Anda bisa login sekarang", "success");
        }
    );
}


return (
    <body className="body12">
	<div class="container12" id="container12">
		<div class="form-container regis log-in-container">
				<h1>Register</h1>
                <br/>
                <span>Please Register Your Identity</span>
                <hr/>
                <form className="form12" method="post" onSubmit={user}>
				<div class="social-container">
				<h1>Register</h1>
                
                <span>Please Register Your Identity</span>
                <hr/>

				</div>

                
                <input onChange={e => setEmail(e.target.value)} type="text" class="form-control" id="email" name="email" placeholder="Email" />
                        
                <input onChange={e => setNama(e.target.value)} type="text" class="form-control" id="nama" name="nama" placeholder="Name" />
                
                <input onChange={e => setPassword(e.target.value)}  type="password" class="form-control" id="password" name="pasword" placeholder="Password" />
                        {/* <a href="#">Forgot your password?</a> */}
						<button type="submit" class="btn btn-primary regis" name="register">Register</button>
                        <a href="/login" class="">LOGIN</a>
                        
			</form>
		</div>
		<div class="overlay-container">
			<div class="overlay">
				<div class="overlay-panel overlay-right">
				<div className="boxT"><h1>NgeThrift</h1></div>
				</div>
			</div>
		</div>
	</div>
    </body>
);
}

export default Regis;