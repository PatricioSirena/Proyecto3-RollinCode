import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Carrito2() {
    const [smShow, setSmShow] = useState(false);


    return (
        <>
            <Button onClick={() => setSmShow(true)} className="me-2">
                Carrito
            </Button>
            <Button onClick={() => setLgShow(true)}>Large modal</Button>
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Carrito
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
            </Modal>
        </>
    );
}

export default Carrito2;