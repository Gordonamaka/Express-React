import './App.css';
import Users from './components/Users';
import Home from './components/Home';
import Login from './components/login';
import About from './components/About';
import Watchlist from './components/Watchlist';
import Register from './components/Register';
import Hotlist from './components/Hotlist';
import Stockscreen from './components/Stockscreen';
import StockPredict from './components/Stockpredict';
import MyForm from './MyForm';

function App() {
  return (
    <div className="App">
    <h1> React HERE!</h1>
    <Users/>
    <Home />
    <Login />
    <About />
    <Watchlist />
    <Register />
    <Hotlist />
    <Stockscreen />
    <StockPredict />
    <h2>How to Add Custom Validatin with Forms in React</h2>
    <MyForm />
    </div>
  );
}

export default App;
