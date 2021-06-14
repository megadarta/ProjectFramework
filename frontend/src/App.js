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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
