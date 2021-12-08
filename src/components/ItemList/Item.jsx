import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';

import './itemList.css';


function Item( {product} ) {

    const inicial = 1;

    return (
        <div key={product.id} className="col-lg-4 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center">
                <Card>
                    <Card.Img variant="top" src={product.img} alt="..." />
                    <Card.Body>
                        <Card.Title className="text-center">{product.name}</Card.Title>
                        <Card.Text className="text-center">{product.price.toFixed(2)}</Card.Text>
                        <ItemCount initial={inicial} stock={product.stock} />
                        <Button variant="secondary" className="mt-2 w-100">Agregar al carrito</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Item