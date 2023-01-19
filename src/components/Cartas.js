import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { v4 as uuid } from 'uuid';

function Cartas(){

    const initialState = {
        'id' : '',
        'nombre' : '',
        'direccion' : '',
        'telefono' : '',
    }

    const [datos, setDatos] = useState(initialState);
    
    const {nombre, direccion, telefono} = datos; //deconstruccion de datos

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("hola mundo");
    }

    const handleChange = (e) => {
        setDatos({
            ...datos, [e.target.name] : e.target.value
        });
        console.log(datos);
    }
    
    return(        
        <Container>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

       <Row>
        <Col></Col>
        <Col>
            <Form onSubmit={ handleSubmit }>
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