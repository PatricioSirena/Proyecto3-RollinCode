const URL_productos = import.meta.env.VITE_ENV_URL_PRODUCTS;
const URL_usuarios = import.meta.env.VITE_ENV_URL_USERS;

import axios from 'axios';
//CRUD create read update delete
//ABM altas bajas y modificaciones

// export const methPost= async(obj)=>{
//     try {
//         axios.post(URL_productos,obj)
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const methPostUsers= async(obj)=>{
//     obj.admin=false;
//     try {
//         axios.post(URL_usuarios,obj)
//     } catch (error) {
//         console.log(error);
//     }
// }
// export const methoGetOne=(id)=>{
//     try {
//         let productos =axios.get(`${URL_productos}/${id}`)
//         return productos;
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const  methGet=async()=>{
//     try {
//         let productos =axios.get(URL_productos)
//         return productos;
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const  methGetUsers=async()=>{
//     try {
//         let users = await axios.get(URL_usuarios)
//         return users;
//     } catch (error) {
//         console.log(error);
//     }
// }
// export const ingresar=async(user)=>{
//     let users = await methGetUsers();
//     let objs = users.data;
//     let myUser = objs.filter((obj)=>{
//         if(obj.email===user.email && obj.password===user.password){
//             return obj;
//         }
//     })
//     return myUser;
// }

// export const methoDeleteOne=(id)=>{
//     try {
//         let productos =axios.delete(`${URL_productos}/${id}`)
//         return productos;
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const methUpdate= async(obj,id)=>{
//     console.log(obj,id);
//     try {
//         let editProduct = axios.put(`${URL_productos}/${id}`,obj)
//         return editProduct
//     } catch (error) {
//         console.log(error);
//     }
// }