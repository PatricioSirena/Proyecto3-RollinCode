import React, {useState} from 'react';
import bebidas from '../datos/bebidas.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';

function App() {

  const [data, setData] = useState(bebidas);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const [itemSeleccionado, setItemSeleccionado] = useState({
    id: '',
    titulo: '',
    precio: '',
    texto: '',
    categoria: '',
    imagen: ''
  });

  const seleccionarItem=(elemento, caso)=>{
setItemSeleccionado(elemento);
(caso==='Editar')?setModalEditar(true):setModalEliminar(true)
  }

  const handleChange=e=>{
    const {name, value}=e.target;
    setItemSeleccionado((prevState)=>({
      ...prevState,
      [name]: value
    }));
  }

  const editar=()=>{
    var dataNueva=data;
    dataNueva.map(bebida=>{
      if(bebida.id===itemSeleccionado.id){
        bebida.titulo=itemSeleccionado.titulo;
        bebida.precio=itemSeleccionado.precio;
        bebida.texto=itemSeleccionado.texto;
        bebida.categoria=itemSeleccionado.categoria;
        bebida.imagen=itemSeleccionado.imagen;
      }
    });
    setData(dataNueva);
    setModalEditar(false);
  }

  const eliminar =()=>{
    setData(data.filter(bebida=>bebida.id!==itemSeleccionado.id));
    setModalEliminar(false);
  }

  const abrirModalInsertar=()=>{
    setItemSeleccionado(null);
    setModalInsertar(true);
  }

  const insertar =()=>{
    var valorInsertar=itemSeleccionado;
    valorInsertar.id=data[data.length-1].id+1;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  }

  return (
    <div className="App">
      <h2>titulo ramdom</h2>
      <br />
    <button className="btn btn-success" onClick={()=>abrirModalInsertar()}>Insertar</button>
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
          {data.map(elemento=>(
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.titulo}</td>
              <td>{elemento.precio}</td>
              <td>{elemento.texto}</td>
              <td>{elemento.categoria}</td>
              <td>checkbox</td>
              <td><button className="btn btn-primary" onClick={()=>seleccionarItem(elemento, 'Editar')}>Editar</button> {"   "} 
              <button className="btn btn-danger" onClick={()=>seleccionarItem(elemento, 'Eliminar')}>Eliminar</button></td>
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
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={itemSeleccionado && itemSeleccionado.id}
            />
            <br />

            <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              name="titulo"
              value={itemSeleccionado && itemSeleccionado.titulo}
              onChange={handleChange}
            />
            <br />

            <label>Precio</label>
            <input
              className="form-control"
              type="text"
              name="minutos"
              value={itemSeleccionado && itemSeleccionado.minutos}
              onChange={handleChange}
            />
            <br />
            <label>Detalle</label>
            <input
              className="form-control"
              type="text"
              name="texto"
              value={itemSeleccionado && itemSeleccionado.texto}
            />
            <br />
            <label>Categoría</label>
            <input
              className="form-control"
              type="text"
              name="categoria"
              value={itemSeleccionado && itemSeleccionado.categoria}
            />
            <br />
            <label>Imagen</label>
            <input
              className="form-control"
              type="text"
              name="imagen"
              value={itemSeleccionado && itemSeleccionado.imagen}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={()=>editar()}>
            Actualizar
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setModalEditar(false)}
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
          <button className="btn btn-danger" onClick={()=>eliminar()}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={()=>setModalEliminar(false)}
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
              value={data[data.length-1].id+1}
            />
            <br />

            <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              name="titulo"
              value={itemSeleccionado ? itemSeleccionado.titulo: ''}
              onChange={handleChange}
            />
            <br />

            <label>Precio</label>
            <input
              className="form-control"
              type="text"
              name="precio"
              value={itemSeleccionado ? itemSeleccionado.precio: ''}
              onChange={handleChange}
            />
            <br />
            <label>Detalle</label>
            <input
              className="form-control"
              type="text"
              name="texto"
              value={itemSeleccionado ? itemSeleccionado.texto: ''}
              onChange={handleChange}
            />
            <br />
            <label>Categoria</label>
            <input
              className="form-control"
              type="text"
              name="categoria"
              value={itemSeleccionado ? itemSeleccionado.categoria: ''}
              onChange={handleChange}
            />
            <br />
            <label>Imagen</label>
            <input
              className="form-control"
              type="text"
              name="imagen"
              value={itemSeleccionado ? itemSeleccionado.imagen: ''}
              onChange={handleChange}
            />
            <br />
        
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary"
          onClick={()=>insertar()}>
            Insertar
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setModalInsertar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default App;