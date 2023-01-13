import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Contador() {

    const [contador, setContador] = useState(0);

    const sumar = () =>{
        let contador1 = contador
        contador1++;
        setContador(contador1);
    }
    const resta = () =>{
        let contador1 = contador
        contador1--;
        setContador(contador1);
    }
    const iniciar = () =>{
        let contador1 = 0;
        setContador(contador1);
    }

    return (
        <>
            <p>Contador: {contador}</p>
            <p>
                <Button variant="outline-warning" onClick={sumar}>+</Button>{' '}
                <Button variant="outline-danger" onClick={resta}>-</Button>{' '}
                <Button variant="outline-success" onClick={iniciar}>Inicializar</Button>{' '}
            </p>
        </>
    );
}

export default Contador;