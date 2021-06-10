import logo from './logo.svg';
import './App.css';
import DetailProduk from './component/DetailProduk';
import Home from './component/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
              <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
