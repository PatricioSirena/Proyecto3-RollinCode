import { useState } from 'react'
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from "./pages/Menu";
import './App.css';
import './styles/footer.css'
import Cartas from "./components/Cartas";
import Portada from "./components/Portada";
import TarjetasInfo from "./components/TarjetasInfo";
import MyNav from "./components/MyNav";
import Home from './pages/Home';
import ContextoCarrito from './context/ContextoCarrito';
import Administrador from './pages/Administrador';

const rutaUsuarios = import.meta.env.VITE_ENV_USERS;

function App() {
    const [users, setUsers] = useState([])
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
        <ContextoCarrito>
        <Router>
            <MyNav />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/Menu' element={<Menu />} />
            </Routes>
            </Router>
        </ContextoCarrito>
            <BrowserRouter>
                <MyNav />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        {/* <Route exact path="/admin" element={<Admin />} /> */}
                        <Route exact path="/admin" element={<Administrador />} />
                        {/* <Route exact path="/login" element={<Admin />} /> */}
                        {/* <Route exact path="/registro" element={<Admin />} /> */}
                    </Routes>
            </BrowserRouter>
        </>
    )
}

export default App