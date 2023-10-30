import { useEffect, useState } from 'react'
import ContextoCarrito from './context/ContextoCarrito'
import Axios from "axios";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Admin from "./pages/Administrador";
import MyNav from "./components/MyNav";
import Home from './pages/Home';
import Menu from './pages/Menu';
import Login from './pages/Login';
import Registro from './pages/Registro';
import AboutUs from './pages/AboutUs';


const rutaUsuarios = import.meta.env.VITE_ENV_URL_USERS;

function App() {

    const [users, setUsers] = useState([])
    const [products, setProducts] = useState([])

    const backEnd = async () => {
        try {
            const result = await Axios.get(rutaUsuarios + '/getUsers');
            setUsers(result.data.usuarios);
        } catch (err) {
            return
        }
    }

    return (
        <>
        {/* <ContextoCarrito>
        <Router>
            <MyNav />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/Menu' element={<Menu />} />
            </Routes>
            </Router> */}
            <ContextoCarrito>
            <Router>
                <MyNav />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/Menu" element={<Menu />} />
                        <Route exact path="/Admin" element={<Admin />} />
                        <Route exact path="/Login" element={<Login />} />
                        <Route exact path="/Registro" element={<Registro />} />
                        <Route exact path="/AboutUs" element={<AboutUs />} />
                    </Routes>
            </Router>
        </ContextoCarrito>
        </>
    )
}

export default App