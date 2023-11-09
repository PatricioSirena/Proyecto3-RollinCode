import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import MyNav from "./components/MyNav";
import Home from './pages/Home';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Menu from './pages/Menu';
import { useEffect, useState } from 'react';
import {PrivateRoute} from './components/PrivateRoute';


function App() {

    const [admin, setAdmin] = useState(false);
    const [user, setUser] = useState({});
    const [isLogueado, setIslogueado] = useState(false);

    const recuperoUser = () => {
        const usuario = JSON.parse(window.localStorage.getItem("user"));
        if (usuario != null) {
            setUser(usuario)
            setAdmin(usuario.admin)
            setIslogueado(true)
        }
    }

    useEffect(() => {
        recuperoUser()
    }, [])

    return (
        <>
            <Router>
                <MyNav
                    isLogueado={isLogueado}
                    admin={admin}
                    setIslogueado={setIslogueado}
                    setAdmin={setAdmin}
                    setUser={setUser}
                />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu
                        isLogueado={isLogueado}
                    />} />
                    <Route element={<PrivateRoute admin={admin}/>}>
                    </Route>
                    <Route path="/login" element=
                        {<Login
                            setUser={setUser}
                            setAdmin={setAdmin}
                            setIslogueado={setIslogueado}
                            isLogueado={isLogueado}
                        />} />
                    <Route path="/registro" element={<Registro />} />
                </Routes>
            </Router>
        </>
    )
}

export default App