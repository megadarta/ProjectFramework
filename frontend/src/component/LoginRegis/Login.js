import React, { useState, useEffect } from 'react';
import '../../css/Regis.css';
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
        <body className="body12">
        <div className="container12" id="container12">
            <div className="form-container login log-in-container">
                <form className="form12" method="post" onSubmit={loginUser}>
                    <h1>Login</h1>

                    
                    <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="email" name="email" placeholder="Email"></input>
                    <input onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="password" name="password" placeholder="Password"></input>

                    <br></br>
                    <button className="btn btn-primary regis" type="submit" name="login">LOGIN</button>
                    <a href="/regis" className="btn btn-success regis">REGISTER</a>
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
        </body>
    );
}
export default Login;