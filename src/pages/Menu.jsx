import Swal from "sweetalert2";


const Menu = ({ isLogueado }) => {

    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    
    const redirect = () =>{
        Toast.fire({
            icon: 'warning',
            title: 'Debes loguearte para ingresar al menu!'
        })
        setTimeout(() => {
            window.location = "/login"
        }, 2000);
    }

    return (
        <>
            {isLogueado ?
                <div>Menu</div>
                :
                redirect()
            }
        </>
    )
}

export default Menu