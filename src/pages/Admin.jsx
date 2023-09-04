import Button from 'react-bootstrap/Button';
import ModalForm from '../components/ModalForm';

const Admin = () => {
  return (
    <>
      <section className="productos text-center">
        <h2>Productos</h2>
        <div className='d-flex justify-content-end'>
          <ModalForm />
        {/* <Button variant="dark">Agregar</Button> */}
        </div>
        <h3>Comidas</h3>
        <ul className='listaComida'>
          <li className='d-flex justify-content-around m-3'>
            <p>Nombre Prudcuto</p>
            <p>Estado</p>
            <Button variant="dark">Dark</Button>
            <Button variant="dark">Dark</Button>
          </li>
          <li className='d-flex justify-content-around m-3'>
            <p>Nombre Prudcuto</p>
            <p>Estado</p>
            <Button variant="dark">Dark</Button>
            <Button variant="dark">Dark</Button>
          </li>
                    <li className='d-flex justify-content-around m-3'>
            <p>Nombre Prudcuto</p>
            <p>Estado</p>
            <Button variant="dark">Dark</Button>
            <Button variant="dark">Dark</Button>
          </li>
          <li className='d-flex justify-content-around m-3'>
            <p>Nombre Prudcuto</p>
            <p>Estado</p>
            <Button variant="dark">Dark</Button>
            <Button variant="dark">Dark</Button>
          </li>
          <li className='d-flex justify-content-around m-3'>
            <p>Nombre Prudcuto</p>
            <p>Estado</p>
            <Button variant="dark">Dark</Button>
            <Button variant="dark">Dark</Button>
          </li>
        </ul>
        <hr />
        <h3>Bebidas</h3>
        <ul className='listaBebida'>
        <li className='d-flex justify-content-around m-3'>
            <p>Nombre Prudcuto</p>
            <p>Estado</p>
            <Button variant="dark">Dark</Button>
            <Button variant="dark">Dark</Button>
          </li>
          <li className='d-flex justify-content-around m-3'>
            <p>Nombre Prudcuto</p>
            <p>Estado</p>
            <Button variant="dark">Dark</Button>
            <Button variant="dark">Dark</Button>
          </li>
          <li className='d-flex justify-content-around m-3'>
            <p>Nombre Prudcuto</p>
            <p>Estado</p>
            <Button variant="dark">Dark</Button>
            <Button variant="dark">Dark</Button>
          </li>
          <li className='d-flex justify-content-around m-3'>
            <p>Nombre Prudcuto</p>
            <p>Estado</p>
            <Button variant="dark">Dark</Button>
            <Button variant="dark">Dark</Button>
          </li>
          <li className='d-flex justify-content-around m-3'>
            <p>Nombre Prudcuto</p>
            <p>Estado</p>
            <Button variant="dark">Dark</Button>
            <Button variant="dark">Dark</Button>
          </li>
        </ul>
        <hr />
        <h3>Flores</h3>
        <ul className='listaFlores'>
        <li className='d-flex justify-content-around m-3'>
            <p>Nombre Prudcuto</p>
            <p>Estado</p>
            <Button variant="dark">Dark</Button>
            <Button variant="dark">Dark</Button>
          </li>
          <li className='d-flex justify-content-around m-3'>
            <p>Nombre Prudcuto</p>
            <p>Estado</p>
            <Button variant="dark">Dark</Button>
            <Button variant="dark">Dark</Button>
          </li>
          <li className='d-flex justify-content-around m-3'>
            <p>Nombre Prudcuto</p>
            <p>Estado</p>
            <Button variant="dark">Dark</Button>
            <Button variant="dark">Dark</Button>
          </li>
          <li className='d-flex justify-content-around m-3'>
            <p>Nombre Prudcuto</p>
            <p>Estado</p>
            <Button variant="dark">Dark</Button>
            <Button variant="dark">Dark</Button>
          </li>
          <li className='d-flex justify-content-around m-3'>
            <p>Nombre Prudcuto</p>
            <p>Estado</p>
            <Button variant="dark">Dark</Button>
            <Button variant="dark">Dark</Button>
          </li>
        </ul>
      </section>
      <br />
      <section className='pedidos mt-5 text-center'>
        <h3>Pedidos</h3>
        <ul>
        <li className='d-flex justify-content-around m-3'>
            <p>Nombre Prudcuto</p>
            <p>Estado</p>
            <Button variant="dark">Dark</Button>
            <Button variant="dark">Dark</Button>
          </li>
                    <li className='d-flex justify-content-around m-3'>
            <p>Nombre Prudcuto</p>
            <p>Estado</p>
            <Button variant="dark">Dark</Button>
            <Button variant="dark">Dark</Button>
          </li>
          <li className='d-flex justify-content-around m-3'>
            <p>Nombre Prudcuto</p>
            <p>Estado</p>
            <Button variant="dark">Dark</Button>
            <Button variant="dark">Dark</Button>
          </li>
          <li className='d-flex justify-content-around m-3'>
            <p>Nombre Prudcuto</p>
            <p>Estado</p>
            <Button variant="dark">Dark</Button>
            <Button variant="dark">Dark</Button>
          </li>
        </ul>
      </section>
      <section className='usuarios'>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>
    </>
  )
}

export default Admin
