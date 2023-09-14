import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Axios from "axios"; import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Admin from "./pages/Admin";
import MyNav from "./components/MyNav";
import Home from './pages/Home';
import Login from './pages/Login';
import Registro from './pages/Registro';
import { methGet } from './helpers/index'
import Productos from './pages/Productos';


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
    useEffect(() => {
        methGet().then(data => setProducts(data.data.data))

        return () => {

        }
    }, [])

    return (
        <>
            <BrowserRouter>
                <MyNav />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registro" element={<Registro />} />
                    <Route path="/productos" element={<Productos products={products} />} />

                </Routes>
            </BrowserRouter>
            {/* <Home /> */}
        </>
    )
}

export default App