import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { v4 as uuid } from 'uuid';

function Cartas() {

    const initialState = {
        'id': '',
        'nombre': '',
        'direccion': '',
        'telefono': '',
    }

    const [datos, setDatos] = useState(initialState);

    const { nombre, direccion, telefono } = datos; //deconstruccion de datos

    const [informacion, setInformacion] = useState([]);

    const handleEliminar = (e) => {
        console.log(e.target.name);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const initialState2 = {
            'id': uuid(),
            'nombre': datos.nombre,
            'direccion': datos.direccion,
            'telefono': datos.telefono,
        };
        let inf = informacion;
        inf.push(initialState2);
        setInformacion(inf);
        setDatos(initialState);
        console.log(initialState);
    }

    const handleChange = (e) => {
        setDatos({
            ...datos, [e.target.name]: e.target.value
        });
    }

    return (
        <Container>
            <Row className="row-cols-3">
                {
                    informacion.map(inf => (
                        <Col key={inf.id} className='mt-3'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{inf.nombre}</Card.Title>
                                    <Card.Text>id: {inf.id}</Card.Text>
                                    <Card.Text>Dirección: {inf.direccion}</Card.Text>
                                    <Card.Text>Teléfono: {inf.telefono}</Card.Text>
                                    <Button name={'e' + inf.id} variant="danger" className="me-3" onClick={handleEliminar}>Eliminar</Button>
                                    <Button name={'m' + inf.id} variant="info">Modificar</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>

            <Row>
                <Col></Col>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" name="nombre" placeholder="Ingresa tu nombre" value={nombre} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="direccion">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control type="text" name="direccion" placeholder="Ingresa tu direccion" value={direccion} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="telefono">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control type="text" name="telefono" placeholder="Ingresa tu telefono" value={telefono} onChange={handleChange} />
                        </Form.Group>

                        <Button variant="primary" type="submit" name="btnAgregar" >
                            Agregar
                        </Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}
export default Cartas;