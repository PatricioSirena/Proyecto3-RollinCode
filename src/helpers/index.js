const URL_productos = import.meta.env.VITE_ENV_URL_PRODUCTS;
const URL_usuarios = import.meta.env.VITE_ENV_URL_USERS;

import axios from 'axios';

export const methPost= async(obj)=>{
    try {
        axios.post(URL_productos + "/createProducts/",obj)
    } catch (error) {
        console.log(error);
    }
}

export const methPostUsers= async(obj)=>{
    obj.admin=false;
    try {
        axios.post(URL_usuarios + "/createUser",obj)
    } catch (error) {
        console.log(error);
    }
}
export const methoGetOne=(id)=>{
    try {
        let productos =axios.get(`${URL_productos}/getOneProduct/${id}`)
        return productos;
    } catch (error) {
        console.log(error);
    }
}
export const methoGetOneUser=(id)=>{
    try {
        let usuario =axios.get(`${URL_usuarios}//getOneUser/${id}`)
        return usuario;
    } catch (error) {
        console.log(error);
    }
}

export const  methGet=async()=>{
    try {
        let productos =axios.get(URL_productos + "/getProducts")
        return productos;
    } catch (error) {
        console.log(error);
    }
}


export const  methGetUsers=async()=>{
    try {
        let users = await axios.get(URL_usuarios + "/getUsers")
        return users;
    } catch (error) {
        console.log(error);
    }
}

export const ingresar=async(user)=>{
    let users = await methGetUsers();
    let objs = users.data;
    let myUser = objs.filter((obj)=>{
        if(obj.email===user.email && obj.password===user.password){
            return obj;
        }
    })
    return myUser;
}

export const methoDeleteOne=(id)=>{
    try {
        let productos =axios.delete(`${URL_productos}/deleteProduct/${id}`)
        return productos;
    } catch (error) {
        console.log(error);
    }
}

export const methoDeleteOneUser=(id)=>{
    try {
        let productos =axios.delete(`${URL_usuarios}/deleteUser/${id}`)
        return productos;
    } catch (error) {
        console.log(error);
    }
}

export const methUpdate= async(obj,id)=>{
    console.log(obj,id);
    try {
        let editProduct = axios.put(`${URL_productos}/updateProduct/${id}`,obj)
        return editProduct
    } catch (error) {
        console.log(error);
    }
}
export const methUpdateUser= async(obj,id)=>{
    console.log(obj,id);
    try {
        let editUsuario = axios.put(`${URL_usuarios}//updateUser/${id}`,obj)
        return editUsuario
    } catch (error) {
        console.log(error);
    }
}
