// import { useEffect, useState } from 'react'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from "./pages/Menu";
import './App.css';
import MyNav from "./components/MyNav";
import Home from './pages/Home';
import Carrito from "./pages/Carrito";


function App() {

    return (
        <>
        <BrowserRouter>
            <MyNav />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/Menu' element={<Menu />} />
                <Route exact path='/Carrito' element={<Carrito/>} />
            </Routes>
            </BrowserRouter>
        </>
    )
}

export default App