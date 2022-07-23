import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { Home } from './component/Home.jsx/Home';

function App() {
  return (
    <div className="App">
   <Navbar />
   
   <Home />
    </div>
  );
}

export default App;
