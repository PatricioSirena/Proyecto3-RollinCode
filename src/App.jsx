import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import MyNav from "./components/MyNav";
import Home from './pages/Home';
import Login from './pages/Login';
import Registro from './pages/Registro';


function App() {

    return (
        <>
            <Router>
                <MyNav />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        {/* <Route exact path="/admin" element={<Admin />} /> */}
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/registro" element={<Registro />} />
                    </Routes>
            </Router>
        </>
    )
}

export default App