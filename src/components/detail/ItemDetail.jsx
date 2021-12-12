import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ItemCount from '../item/ItemCount';

import './detail.css';


function ItemDetail( {detail} ) {

    const inicial = 1;

    return (
        <>
            <Col key={detail.id} className="card--detail">
                <Card border="secondary">
                    <Card.Img src={detail.img} alt="..." />
                    <Card.Body>
                        <Card.Title className="text-center">{detail.name}</Card.Title>
                        <Card.Text className="detail__text--description">{detail.description}</Card.Text>
                        <Card.Text className="detail__text--price">Precio: {detail.price}</Card.Text>
                        <Card.Text className="detail__text--stock">Stock disponible: {detail.stock}</Card.Text>
                        <ItemCount initial={inicial} stock={detail.stock} />
                        <Button variant="secondary" className="mt-2 w-75">Agregar al carrito</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default ItemDetail