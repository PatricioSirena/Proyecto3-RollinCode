// import { useEffect, useState } from 'react'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import Body from "./components/Body";
import './App.css';
import Cartas from "./components/Cartas";
import Portada from "./components/Portada";
import TarjetasInfo from "./components/TarjetasInfo";


function App() {

    return (
        <>
            <MyNav />
            <Body />
            <Portada
                titulo={'Titulo'}
                descripccion={'soy una descripccion de prueba para ver si todo funciona bien! soy una descripccion de prueba para ver si todo funciona bien! soy una descripccion de prueba para ver si todo funciona bien!'} />
            <section className='d-flex justify-content-around'>
                <Cartas />
            </section>
            <TarjetasInfo />
            <Footer />
        </>
    )
}

export default App