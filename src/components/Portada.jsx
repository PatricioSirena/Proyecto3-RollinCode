import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import portada from '../assets/img/portada.jpg'


const Portada = () => {
    return (
        <Card className="container-fluid portada m-2 mb-5 d-flex">
            <div className='row'>
            <Card.Img className='col-sm-12 col-md-6 col-lg-6 imagen-portada' src={ portada }></Card.Img>
            <section className='col-sm-12 col-md-6 col-lg-6'>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </section>
            </div>
        </Card>
    );
}

export default Portada