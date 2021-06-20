import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import DetailProduk from './component/DetailProduk/DetailProduk';
import Home from './component/home/Home';
import Chekhout from './component/Checkout/Chekhout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Konfirmasi from './component/Konfirmasi';
import Pembayaran from './component/Pembayaran/Pembayaran';
import Admin from './component/admin/Admin';
import CreateProduk from './component/admin/CreateProduk';
import Login from './component/LoginRegis/Login';
import Regis from './component/LoginRegis/Regis';

import Home2 from './component/home/Home2';

import NavbarPage2 from './component/NavbarPage2';

function App() {
  // const [auth, setAuth] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem("user")))
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
              <Home setUser={setUser} user={user} />            
          </Route>
          <Route path="/home">
              <Home2 />
          </Route>
          <Route path="/detail-produk">
            <DetailProduk setUser={setUser} user={user} />
          </Route>
          <Route path="/chekout">
            <Chekhout setUser={setUser} user={user} />
          </Route>
          <Route path="/konfirmasi">
            <Konfirmasi />
          </Route>
          <Route path="/pembayaran">
            <Pembayaran setUser={setUser} user={user} />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/create-produk">
            <CreateProduk />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/regis">
            <Regis />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
