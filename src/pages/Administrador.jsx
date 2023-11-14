import AdminMenu from "../components/AdminMenu"
import AdminPedidos from "../components/AdminPedidos"
import AdminUsuarios from "../components/AdminUsuarios"

const Administrador = () => {
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

export default Administrador