import ModalForm from '../components/ModalForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';


const Admin = () => {
  return (
    <>
   </>
  )
}

export default Admin


import axios from 'axios';

function sendDataToServer(data) {
  const url = 'http://localhost:3000/api/data';
  axios.post(url, data)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
}
