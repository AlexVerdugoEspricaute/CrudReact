import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap';

const data = [
  { id: 1, name: 'John', year: 20, email: 'john@gmail.com' },
  { id: 2, name: 'Alex', year: 24, email: 'alex@gmail.com' },
  { id: 3, name: 'Mike', year: 30, email: 'mike@gmail.com' },
  { id: 4, name: 'Juan', year: 22, email: 'juan@gmail.com' },
];

class App extends React.Component {
  state = {
    data: data
  };

  render() {
    return (
      <>
        <Container>
          <Button color='success'>
            Insertar un usuario
          </Button>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((elemento) => (
                <tr key={elemento.id}>
                  <td>{elemento.id}</td>
                  <td>{elemento.name}</td>
                  <td>{elemento.year}</td>
                  <td>{elemento.email}</td>
                  <td><Button color='primary'>Editar</Button></td><br />
                  <td><Button color='danger'>Eliminar</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
        <Modal>
          <ModalHeader>Insertar Usuario</ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>ID</label>
              
            </FormGroup>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default App;
