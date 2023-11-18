// import Swal from "sweetalert2"
import AdminMenu from "../components/AdminMenu"
import AdminPedidos from "../components/AdminPedidos"
import AdminUsuarios from "../components/AdminUsuarios"
import { Navigate } from "react-router-dom"

const Administrador = () => {
    
    let usuario = JSON.parse(window.localStorage.getItem("user"));

    if (usuario === null){
        return <Navigate to={'/'} /> 
    }

    if (usuario.admin != true){
        return <Navigate to={'/'} />
    }else {
        return (
            <>
                <div>
                <AdminPedidos />
                <AdminUsuarios/>
                </div>
                <AdminMenu />
            </>
        )
    }
}

export default Administrador