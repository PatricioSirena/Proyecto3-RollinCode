// import { useEffect, useState } from 'react'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import Index from "./components/Index";

function App() {

    return (
        <>
            <MyNav />
            <Index />
            <Footer />
        </>
    )
}

export default App