import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function ModalForm() {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        handleClose();
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <>
            <Button className='btn-dark m-5' variant="primary" onClick={handleShow}>
                Agregar
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal de ejemplo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicText">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingresa el nombre"
                                name="nombre"
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicText">
                            <Form.Label>Detalle</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingresa el detalle"
                                name="detalle"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicText">
                            <Form.Label>Categoria</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingresa el categoria"
                                name="categoria"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicText">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingresa el precio"
                                name="precio"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicText">
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Url de la imagen"
                                name="imagen"
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalForm