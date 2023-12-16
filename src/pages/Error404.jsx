import { Link } from 'react-router-dom';
import '../styles/error404.css';
import { useEffect } from 'react';


const Error404 = () => {

    useEffect(() => {
        if (window.location.pathname === '/error404') {
            const navbar = document.querySelector('#nav');
            navbar.style.display = 'none';
        }
        }, [])




    return (
        <>
            <div className="container align-items-center text-center div-error">
                <div className='titulo'><h1 className='grande'>404</h1></div>
                <div><p id='texto-arriba'>UPS! PAGINA NO ENCONTRADA.</p></div>
                <div className='div-texto-abajo'><p id='texto-abajo'>Lo sentimos. La pagina que estas buscando no fue encontrada o no existe.</p></div>
                <Link to="/" className='link'>
                    <button className='botones' id='boton1'>Ir a la página de inicio</button>
                </Link>
                {/* <Link to="/login" className='report'>
                <button className='botones' id='boton2'>Reportar problema</button>
            </Link> */}
            </div>
        </>
    );
};

export default Error404;