import { useState } from 'react';
import menu from '../datos/menu.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import Form from 'react-bootstrap/Form'
import { FormControl, FormGroup } from 'react-bootstrap';


function Administrador() {

  const [data, setData] = useState(menu);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const [itemSeleccionado, setItemSeleccionado] = useState({
    id: '',
    titulo: '',
    precio: '',
    texto: '',
    categoria: '',
    activo: false,
    imagen: ''
  });

  const seleccionarItem = (elemento, caso) => {
    console.log(elemento);
    setItemSeleccionado(elemento);
    (caso === 'Editar') ? setModalEditar(true) : setModalEliminar(true)
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setItemSeleccionado((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  const editar = () => {
    var dataNueva = data;
    if (itemSeleccionado.titulo === "") {
      return alert("Debe ingresar el Nombre")
    }else if (!/^[A-Za-z0-9\s]{4,30}$/g.test(itemSeleccionado.titulo)){
      return alert('El nombre puede tener letras y numero y debe tener entre 4 y 30 caracteres');
    }
    if (itemSeleccionado.precio === "") {
      return alert("Debe ingresar el Precio")
    }else if (!/^[0-9]*(\.[0-9]+)?$/g.test(itemSeleccionado.precio)){
      return alert('El precio solo puede tener numeros y un punto.');
    }
    if (itemSeleccionado.texto === "") {
      return alert("Debe ingresar el Detalle")
    }else if (!/^[A-Za-z0-9\s]{4,50}$/g.test(itemSeleccionado.texto)){
      return alert('El detalle puede tener letras y numero y debe tener entre 4 y 50 caracteres');
    }
        if (itemSeleccionado.categoria === "") {
      return alert("Debe ingresar la Categoria")
    }else if (!/^[a-z\s]{4,8}$/g.test(itemSeleccionado.categoria)){
      return alert('La categoria no puede tener mayusculas y debe ser "comidas", "bebidas" o "flores"');
    }
    if (itemSeleccionado.imagen === "") {
      return alert("Debe ingresar la Url de la imagen")
    }else if (!/^(www)?.+\.[a-z]{2,6}(\.[a-z]{2,6})?.+\.[a-z]{2,4}$/g.test(itemSeleccionado.imagen)){
      return alert('No es una Url valida');
    }
    dataNueva.map(bebida => {
      if (bebida.id === itemSeleccionado.id) {
        bebida.titulo = itemSeleccionado.titulo;
        bebida.precio = itemSeleccionado.precio;
        bebida.texto = itemSeleccionado.texto;
        bebida.categoria = itemSeleccionado.categoria;
        bebida.imagen = itemSeleccionado.imagen;
      }
    });
    setData(dataNueva);
    setModalEditar(false);
  }

  const eliminar = () => {
    setData(data.filter(bebida => bebida.id !== itemSeleccionado.id));
    setModalEliminar(false);
  }

  const abrirModalInsertar = () => {
    setItemSeleccionado(null);
    setModalInsertar(true);
  }

  const insertar = () => {
        if (itemSeleccionado.titulo === '') {
      return alert("Debe ingresar el Nombre")
    }else if (!/^[A-Za-z0-9\s]{4,30}$/g.test(itemSeleccionado.titulo)){
      return alert('El nombre puede tener letras y numero y debe tener entre 4 y 30 caracteres');
    }
    if (itemSeleccionado.precio === '') {
      return alert("Debe ingresar el Precio")
    }else if (!/^[0-9]*(\.[0-9]+)?$/g.test(itemSeleccionado.precio)){
      return alert('El precio solo puede tener numeros y un punto.');
    }
    if (itemSeleccionado.texto === '') {
      return alert("Debe ingresar el Detalle")
    }else if (!/^[A-Za-z0-9\s]{4,50}$/g.test(itemSeleccionado.texto)){
      return alert('El detalle puede tener letras y numero y debe tener entre 4 y 50 caracteres');
    }
        if (itemSeleccionado.categoria === '') {
      return alert("Debe ingresar la Categoria")
    }else if (!/^[a-z\s]{4,8}$/g.test(itemSeleccionado.categoria)){
      return alert('La categoria no puede tener mayusculas y debe ser "comidas", "bebidas" o "flores"');
    }
    if (itemSeleccionado.imagen === '') {
      return alert("Debe ingresar la Url de la imagen")
    }else if (!/^(www)?.+\.[a-z]{2,6}(\.[a-z]{2,6})?.+\.[a-z]{2,4}$/g.test(itemSeleccionado.imagen)){
      return alert('No es una Url valida');
    }
    var valorInsertar = itemSeleccionado;
    valorInsertar.id = data[data.length - 1].id + 1;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  }

  const activar=()=>{
    if (itemSeleccionado.activo === false) {
      itemSeleccionado.activo = true
    }else {
      itemSeleccionado.activo = false;
    }
  }

  return (
    <div className="App">
      <h2>titulo ramdom</h2>
      <br />
      <button className="btn btn-success" onClick={() => abrirModalInsertar()}>Insertar</button>
      <br /><br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Detalle</th>
            <th>Categoria</th>
            <th>Activo</th>
            <th>Controles</th>
          </tr>
        </thead>
        <tbody>
          {data.map(elemento => (
            <tr key={elemento.id}>
              <td>{elemento.id}</td>
              <td>{elemento.titulo}</td>
              <td>${elemento.precio}</td>
              <td>{elemento.texto}</td>
              <td>{elemento.categoria}</td>
              <td><input type='checkbox' onClick={() => activar()}/> </td>
              <td><button className="btn btn-primary" onClick={() => seleccionarItem(elemento, 'Editar')}>Editar</button> {"   "}
                <button className="btn btn-danger" onClick={() => seleccionarItem(elemento, 'Eliminar')}>Eliminar</button></td>
            </tr>
          ))
          }
        </tbody>
      </table>

      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Item</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <Form>
              <FormGroup>
                <Form.Label>ID</Form.Label>
                <FormControl
                  className="form-control"
                  readOnly
                  type="text"
                  name="id"
                  value={itemSeleccionado && itemSeleccionado.id}
                />
              </FormGroup>
              <br />
              <FormGroup>
                <Form.Label>Nombre</Form.Label>
                <FormControl
                  className="form-control"
                  type="text"
                  name="titulo"
                  value={itemSeleccionado && itemSeleccionado.titulo}
                  onChange={handleChange}
                />
              </FormGroup>
              <br />
              <FormGroup>
              <Form.Label>Precio</Form.Label>
              <FormControl
                className="form-control"
                type="text"
                name="precio"
                value={itemSeleccionado && itemSeleccionado.precio}
                onChange={handleChange}
              />
              </FormGroup>
              <br />
              <FormGroup>
              <Form.Label>Detalle</Form.Label>
              <FormControl
                className="form-control"
                type="text"
                name="texto"
                value={itemSeleccionado && itemSeleccionado.texto}
                onChange={handleChange}
              />
              </FormGroup>
              <br />
              <FormGroup>
              <Form.Label>Categoría</Form.Label>
              <FormControl
                className="form-control"
                type="text"
                name="categoria"
                value={itemSeleccionado && itemSeleccionado.categoria}
                onChange={handleChange}
              />
              </FormGroup>
              <br />
              <FormGroup>
              <Form.Label>Imagen</Form.Label>
              <FormControl
                className="form-control"
                type="text"
                name="imagen"
                value={itemSeleccionado && itemSeleccionado.imagen}
                onChange={handleChange}
              />
              </FormGroup>
              <br />
            </Form>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => editar()}>
            Actualizar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalEditar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>


      <Modal isOpen={modalEliminar}>
        <ModalBody>
          Estás Seguro que deseas eliminar este ítem? {itemSeleccionado && itemSeleccionado.titulo}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={() => eliminar()}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setModalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>


      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Insertar Item</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={data[data.length - 1].id + 1}
            />
            <br />

            <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              name="titulo"
              value={itemSeleccionado ? itemSeleccionado.titulo : ''}
              onChange={handleChange}
            />
            <br />

            <label>Precio</label>
            <input
              className="form-control"
              type="text"
              name="precio"
              value={itemSeleccionado ? itemSeleccionado.precio : ''}
              onChange={handleChange}
            />
            <br />
            <label>Detalle</label>
            <input
              className="form-control"
              type="text"
              name="texto"
              value={itemSeleccionado ? itemSeleccionado.texto : ''}
              onChange={handleChange}
            />
            <br />
            <label>Categoria</label>
            <input
              className="form-control"
              type="text"
              name="categoria"
              value={itemSeleccionado ? itemSeleccionado.categoria : ''}
              onChange={handleChange}
            />
            <br />
            <label>Imagen</label>
            <input
              className="form-control"
              type="text"
              name="imagen"
              value={itemSeleccionado ? itemSeleccionado.imagen : ''}
              onChange={handleChange}
            />
            <br />

          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary"
            onClick={() => insertar()}>
            Insertar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalInsertar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Administrador;