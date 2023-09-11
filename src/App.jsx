// import { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from "./components/MyNav";
import Home from './pages/Home';


function App() {

    return (
        <>
            <BrowserRouter>
                <MyNav />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        {/* <Route exact path="/admin" element={<Admin />} /> */}
                        {/* <Route exact path="/login" element={<Admin />} /> */}
                        {/* <Route exact path="/registro" element={<Admin />} /> */}
                    </Routes>
            </BrowserRouter>
            {/* <Home /> */}
        </>
    )
}

export default App