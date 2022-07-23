import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { Home } from './component/Home.jsx/Home';
import {Routes , Route} from "react-router-dom"
import { Footer } from './component/Footer/Footer';
import { Login } from './component/login/Login';
import { Main } from './component/Main';
import { Register } from './component/register/Register';

function App() {
  return (
    <div className="App">
   {/* <Navbar /> */}
   <Routes>
    <Route path='/' element={<Main />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
   </Routes>
   
   {/* <hr/>

   <Footer /> */}
   
    </div>
  );
}

export default App;
