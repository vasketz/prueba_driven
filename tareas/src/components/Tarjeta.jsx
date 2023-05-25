import { Boton } from './boton';
import Card from 'react-bootstrap/Card';



export function Tarjeta(props) {


    return (
        <Card className='text-center'>
            <Card.Header className='text-center'>{props.name}</Card.Header>
            <Card.Body>
                <Boton submit={props.submit} />
            </Card.Body>
        </Card>
    )
}