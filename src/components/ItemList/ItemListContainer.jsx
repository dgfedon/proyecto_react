import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';

import './itemList.css';


function ItemListContainer() {

    const inicial = 1;
    const max = 5;

    return (
        <>
            <Card style={{width: '18rem'}}>
                {/* <Card.Img variant="top" src="" /> */}
                <Card.Body>
                    <Card.Title className="text-center">Nombre Prod</Card.Title>
                    <Card.Text className="text-center">Descripción Prod</Card.Text>
                    <ItemCount initial={inicial} stock={max} />
                    <Button variant="secondary" className="mt-2 w-100">Agregar al carrito</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemListContainer
