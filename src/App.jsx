import ContextoCarrito from './context/ContextoCarrito'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Admin from "./pages/Administrador";
import MyNav from "./components/MyNav";
import Home from './pages/Home';
import Menu from './pages/Menu';
import Login from './pages/Login';
import Registro from './pages/Registro';

function App() {

    return (
        <>
            <ContextoCarrito>
            <Router>
                <MyNav />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/Menu" element={<Menu />} />
                        <Route exact path="/Admin" element={<Admin />} />
                        <Route exact path="/Login" element={<Login />} />
                        <Route exact path="/Registro" element={<Registro />} />
                    </Routes>
            </Router>
        </ContextoCarrito>
        </>
    )
}

export default App