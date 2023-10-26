import axios from 'axios';

//  ----------------- Usuarios -----------------
const URL_usuarios = import.meta.env.VITE_ENV_URL_USERS;
const URL_auth = import.meta.env.VITE_ENV_URL_AUTH;


export const methPostUsers = async (obj) => {
    console.log(obj);
    try {
        await axios.post(URL_usuarios + "/createUser", obj)
    } catch (error) {
        console.log(error);
    }
}

export const methGetOneUser = async (id) => {
    try {
        let usuario = await axios.get(`${URL_usuarios}/getOneUser${id}`)
        return usuario;
    } catch (error) {
        console.log(error);
    }
}

export const methGetUsers = async () => {
    try {
        let users = await axios.get(URL_usuarios + '/getUsers')
        return users;
    } catch (error) {
        console.log(error);
    }
}

export const methoDeleteOneUser = (id) => {
    try {
        let productos = axios.delete(`${URL_usuarios}/deleteUser${id}`)
        return productos;
    } catch (error) {
        console.log(error);
    }
}

export const ingresar = async(user)=>{
    try {
        let usr = await axios.post(URL_auth, user);
        let usuario = usr.data;
        return usuario;    
        } catch (error) {
        return error.response.status
    }
}

// export const ingresar = async (user) => {
//     let users = await methGetUsers();
//     let objs = users.data.data;
//     console.log(user);
//     console.log(objs);
//     let myUser = objs.filter((obj) => {
//         if (obj.correo === user.correo && obj.password === user.password) {
//             console.log(obj);
//             return obj;
//         }
//     })
//     console.log(myUser);
//     return myUser;
// }

export const register = async (valores) => {
    let users = await methGetUsers();
    let objs = users.data.usr;
    console.log(objs);
    let myUser = objs.filter((obj) => {
        if (obj.correo === valores.correo) {
            return obj;
        }
    })
    return myUser;
}

export const methUpdateUser = async (obj, id) => {
    console.log(obj, id);
    try {
        let editUsuario = axios.put(`${URL_usuarios}/updateUser/${id}`, obj)
        return editUsuario
    } catch (error) {
        console.log(error);
    }
}

//  ----------------- Productos -----------------
const URL_productos = import.meta.env.VITE_ENV_URL_PRODUCTS;


export const methPost = async (obj) => {
    try {
        axios.post(URL_productos + "/createProducts/", obj)
    } catch (error) {
        console.log(error);
    }
}

export const methoGetOne = async (id) => {
    try {
        let productos = await axios.get(`${URL_productos}/getOneProduct/${id}`)
        return productos;
    } catch (error) {
        console.log(error);
    }
}

export const methGet = async () => {
    try {
        let productos = await axios.get(URL_productos + "/getProducts")
        return productos;
    } catch (error) {
        console.log(error);
    }
}

export const methoDeleteOne = (id) => {
    try {
        let productos = axios.delete(`${URL_productos}/deleteProduct/${id}`)
        return productos;
    } catch (error) {
        console.log(error);
    }
}


export const methUpdate = async (obj, id) => {
    console.log(obj, id);
    try {
        let editProduct = axios.put(`${URL_productos}/updateProduct/${id}`, obj)
        return editProduct
    } catch (error) {
        console.log(error);
    }
}