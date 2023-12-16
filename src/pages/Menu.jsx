import MenuComidas from "../components/MenuComidas";
import MenuBebidas from "../components/MenuBebidas";
import MenuFlores from "../components/MenuFlores";
import Footer from "../components/Footer";
import '../styles/menu.css'

const Menu = ({isLogueado}) => {

    return (
        <>
            <div className="accesoMenu">
                <ul className="accesoMenu d-flex justify-content-around">
                    <li className="linkMenu"><a href="#menuComidas">Comidas</a></li>
                    <li className="linkMenu"><a href="#menuBebidas">Bebidas</a></li>
                    <li className="linkMenu"><a href="#menuFlores">Flores</a></li>
                </ul>
            </div>
            <MenuComidas isLogueado={isLogueado} />
            <MenuBebidas isLogueado={isLogueado}/>
            <MenuFlores isLogueado={isLogueado}/>
            <Footer/>
        </>
    )
}

export default Menu