import MenuComidas from "../components/MenuComidas";
import MenuBebidas from "../components/MenuBebidas";
import MenuFlores from "../components/MenuFlores";
import Footer from "../components/Footer";

const Menu = ({isLogueado}) => {

    return (
        <>
            <div className="portadaMenu">
                <img src="" alt="" />
            </div>
            <MenuComidas isLogueado={isLogueado} />
            <MenuBebidas isLogueado={isLogueado}/>
            <MenuFlores isLogueado={isLogueado}/>
            <Footer/>
        </>
    )
}

export default Menu