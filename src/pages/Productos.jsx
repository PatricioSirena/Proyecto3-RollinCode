// import { Navigate } from 'react-router-dom'
// import { Card, ListGroup, Container } from 'react-bootstrap'
// import { useEffect } from 'react'
// const Productos = ({ products, isLogueado, admin }) => {
//     useEffect(() => { }, [products])
//     return (
//         <Container>
//             {isLogueado ? <>
//                 <Card className='m-3 mx-auto'>
//                     <Card.Title>
//                         Productos
//                     </Card.Title>
//                     <Card.Body>
//                         <ListGroup >
//                             {products.map((p, index) => <ListGroup.Item className='d-flex justify-content-around' key={`product${index}`}>
//                                 <Card.Img style={{ width: "100px" }} src={p.src} />
//                                 <Card.Title>{p.name}</Card.Title>
//                                 <Card.Text>{p.descripction}</Card.Text>
//                                 <Card.Text>$ {p.price}</Card.Text>
//                                 {admin ? <Card.Link href={`/admin/editProduct/${p.id}`}>Editar</Card.Link> :
//                                     <Card.Link href='#'>Añadir la compra</Card.Link>}

//                                 <Card.Link href={`/products/detail/${p.id}`}>Detalle</Card.Link>
//                             </ListGroup.Item>)}
//                         </ListGroup>
//                     </Card.Body>

//                 </Card>
//             </> :
//                 <Navigate to="/" />}

//         </Container>
//     )
// }

// export default Productos

