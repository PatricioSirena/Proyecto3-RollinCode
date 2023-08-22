// import { useEffect, useState } from 'react'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Home from './pages/Home'
// import Login from './pages/Login'
// import Register from './pages/Register';
// import MyNav from './components/MyNav';
// import Footer from './components/Footer'
// import Productos from './pages/Productos'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {methGet} from './helpers/index'
// import {PrivateRoutes} from './components/PrivateRoutes'
// import AddProduct from './pages/AddProduct'
// import ProductoDetail from './pages/ProductoDetail'
// import EditProduct from './pages/EditProduct'
// function App() {
//   const [products, setProducts] = useState([]);
//   const [admin,setAdmin]=useState(false);
//   const [user,setUser]=useState({});
//   const [isLogueado,setIslogueado]=useState(false);

//   const recuperoUser=()=>{
//     const usuario = JSON.parse(window.localStorage.getItem("user"));
//     if(usuario != null){
//       setUser(usuario)
//       setAdmin(usuario.admin)
//       setIslogueado(true)
//     }
    

//   }
//   useEffect(()=>{
//     recuperoUser()
//     methGet()
//     .then(data=>data.data)
//     .then(response=>{
//     if(response.length != 0){
//       setProducts(response)
//     }else{
//       console.log("no han llegado datos");
//     }
//     })
//   },[])

//   return (
//       <BrowserRouter>
//         <MyNav 
//           isLogueado={isLogueado} 
//           admin={admin}
//           setIslogueado={setIslogueado}
//           setAdmin={setAdmin}
//           setUser={setUser}
//           />
//         <Routes>
//           <Route exact path='/' element={<Home/>}/>
//           <Route exact path='/login' element={
//                 <Login 
//                 MyUser={user} 
//                 setUser={setUser}
//                 admin={admin}
//                 setAdmin={setAdmin}
//                 setIslogueado={setIslogueado}
//                 logueado={isLogueado}
//                 />}/>
//           <Route exact path='/register' element={<Register/>}/>
//           <Route element={<PrivateRoutes admin={admin}/>}>
//             <Route  path="/admin" element={<h1>Admin</h1>}/>
//             <Route path="/admin/addProduct" element={<AddProduct />}/>

//           </Route>
//           <Route  path="/products" element={<Productos admin={admin} isLogueado={isLogueado} products={products}/>}/>
//           <Route  path="/products/detail/:id" element={<ProductoDetail admin={admin} isLogueado={isLogueado} addProduct={setProducts} products={products}/>}/>
//           <Route path="/admin/editProduct/:id" element={<EditProduct addProduct={setProducts} />}/>

//         </Routes>
//         <Footer></Footer>
//       </BrowserRouter>
//   )
// }

// export default App