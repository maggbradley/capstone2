import './App.css';
import Nav from './Nav';
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Reservations from "./Reservations";
import Menu from "./Menu";
import Order from "./Order";

function App() {
  return (
    <>
        <Nav />
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/reservations" element={<Reservations/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/order-online" element={<Order/>}/>
        </Routes>

    </>
  );
}

export default App;
