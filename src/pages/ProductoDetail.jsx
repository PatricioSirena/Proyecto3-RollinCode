// import { useParams, Navigate } from 'react-router-dom'
// import { Card, ListGroup, Container } from 'react-bootstrap'
// import { methoGetOne, methoDeleteOne, methGet } from '../helpers/index'
// import { useEffect, useState } from 'react'

// const ProductoDetail = ({ isLogueado, admin, addProduct }) => {
//     let { id } = useParams();
//     const [getOne, setGetOne] = useState([])
//     const [volver, setVolver] = useState(false)
//     useEffect(() => {
//         methoGetOne(id)
//             .then((response) => response.data)
//             .then(data => setGetOne([data]))
//     }, [isLogueado])
//     const deleteOne = () => {
//         methoDeleteOne(id);
//         methGet()
//             .then(data => data.data)
//             .then(response => {
//                 if (response.length != 0) {
//                     addProduct(response)
//                     setVolver(true)
//                 } else {
//                     console.log("no han llegado datos");
//                 }
//             })

//     }
//     return (
//         <>
//             {volver ? <Navigate to="/products" /> :
//                 <Container>
//                     <Card className='m-3 mx-auto'>
//                         <Card.Title>
//                             Producto
//                         </Card.Title>
//                         <Card.Body>
//                             <ListGroup >
//                                 {getOne.map((p, index) => <ListGroup.Item className='d-flex justify-content-around' key={`product${index}`}>
//                                     <Card.Img style={{ width: "100px" }} src={p.src} />
//                                     <Card.Title>{p.name}</Card.Title>
//                                     <Card.Text>{p.descripction}</Card.Text>
//                                     <Card.Text>$ {p.price}</Card.Text>
//                                     {admin ?
//                                         <Card.Link onClick={deleteOne} >Eliminar</Card.Link>
//                                         :
//                                         <Card.Link >Agregar al carrito</Card.Link>}

//                                     <Card.Link href={`/products`}>Volver</Card.Link>

//                                 </ListGroup.Item>)}
//                             </ListGroup>
//                         </Card.Body>
//                     </Card>



//                 </Container>
//             }
//         </>
//     )
// }

// export default ProductoDetail
