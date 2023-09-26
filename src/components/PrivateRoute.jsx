import { Navigate, Outlet } from "react-router"
import Administrador from "../pages/Administrador"


export const PrivateRoute = ({ admin }) => {

    if (admin) {
        return <Administrador />
    }
    return <Navigate to="/" />

}

