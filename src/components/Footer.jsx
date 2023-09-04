import ListGroup from 'react-bootstrap/ListGroup';
import '../styles/footer.css'

const Footer = () => {
    return (
        <footer className="text-white d-flex justify-content-lg-between">

            <ListGroup.Item action href="#link1">
                Link 1
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
                Link 2
            </ListGroup.Item>
            <ListGroup.Item action >
                This one is a button
            </ListGroup.Item>


        </footer>
    )
}

export default Footer