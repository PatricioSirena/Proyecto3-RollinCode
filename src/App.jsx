// import { useEffect, useState } from 'react'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from "./pages/Menu";
import './App.css';
import MyNav from "./components/MyNav";
import Home from './pages/Home';
import ContextoCarrito from './context/ContextoCarrito';


function App() {

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
        </>
    )
}

export default App