import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from "./components/MyNav";
import Home from './pages/Home';
import Administrador from './pages/Administrador';

function App() {

    return (
        <>
            <BrowserRouter>
                <MyNav />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/admin" element={<Administrador />} />
                    </Routes>
            </BrowserRouter>
        </>
    )
}

export default App