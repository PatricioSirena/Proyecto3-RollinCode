// import { useEffect, useState } from 'react'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import './App.css';
import Cartas from "./components/Cartas";
import Portada from "./components/Portada";
import TarjetasInfo from "./components/TarjetasInfo";
import MyNav from "./components/MyNav";


function App() {

    return (
        <>
            <MyNav />
            <Portada
                className='tituloo'
                titulo={'De primero, felicidad. De segundo, relax.'}
                descripccion={'soy una descripcion de prueba para ver si todo funciona bien! soy una descripcion de prueba para ver si todo funciona bien! soy una descripccion de prueba para ver si todo funciona bien!'} />
            <section className='d-flex justify-content-around'>
                <Cartas />
            </section>
            <TarjetasInfo />
            <Footer className="footer" />
        </>
    )
}

export default App