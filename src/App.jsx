// import { useEffect, useState } from 'react'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Admin from "./pages/Administrador";
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import Body from "./components/Body";

function App() {

    return (
        <>
            <MyNav />
            <Body />
            <Footer />
        </>
    )
}

export default App