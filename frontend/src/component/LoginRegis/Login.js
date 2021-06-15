import React, { useState, useEffect } from 'react';
// import '../../css/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/fontawesome-free-brands';
import bajuu from '../../asset/bajuu.jpg';
import { useHistory } from 'react-router';


function Login(kirim) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const history = useHistory();

    function loginUser(e) {
        e.preventDefault();
        // console.log(email);
        // console.log(password);
        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        }).then(res => res.json()).then(data => {
            console.log(data)
            if (data.success == true) {
                if (data.results[0].role == 2) {
                    sessionStorage.setItem("user", JSON.stringify(data.results[0]))
                    kirim.setUser(JSON.parse(sessionStorage.getItem("user")));
                    console.log(JSON.parse(sessionStorage.getItem("user")));
                    // kirim.setAuth(data.success);
                    // console.log(user);
                    history.push('/');
                }
                else {
                    sessionStorage.setItem("user", JSON.stringify(data.results[0]))
                    kirim.setUser(JSON.parse(sessionStorage.getItem("user")));
                    console.log(JSON.parse(sessionStorage.getItem("user")));
                    history.push('/admin');
                }
            }
        });

    }

    useEffect(() => {
        fetch('http://localhost:3001/login').then(res => res.json()).then(data => {
            console.log(data.results);

        }
            //console.log(data.results)
        );
    })

    return (
        <div className="container" id="container">
            <div className="form-container login log-in-container">
                <form method="post" onSubmit={loginUser}>
                    <h1>Login</h1>
                    <div className="social-container">
                        <a href="#" className="social"><FontAwesomeIcon className='font-awesome' icon={faFacebook} /></a>
                        <a href="#" className="social"><FontAwesomeIcon className='font-awesome' icon={faInstagram} /></a>
                    </div>
                    <span>or use your account</span>
                    <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="email" name="email" placeholder="Email"></input>
                    <input onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="password" name="password" placeholder="Password"></input>
                    <div className="remember">
                        <input type="checkbox" value="remember-me" name="remember"></input><label>Remember Me</label>
                    </div>
                    <br></br>
                    <button className="btn btn-lg btn-primary btn-block" type="submit" name="login">Login</button>
                    <a href="/regis" className="btn btn-lg btn-success btn-block">REGISTER</a>
                    {/* <p>{kirim.user.email}</p> */}
                </form>
            </div>

            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-right">
                        <div className="boxT"><h1>Thrift-In</h1></div>

                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;