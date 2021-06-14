import logo from './logo.svg';
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

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
              <Home />
          </Route>
          <Route path="/detail-produk">
              <DetailProduk />
          </Route>
          <Route path="/chekout">
              <Chekhout />
          </Route>
          <Route path="/konfirmasi">
              <Konfirmasi />
          </Route>
          <Route path="/pembayaran">
              <Pembayaran />
          </Route>
          <Route path="/admin">
              <Admin />
          </Route>
          <Route path="/create-produk">
              <CreateProduk />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
