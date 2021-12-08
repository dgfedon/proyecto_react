import Item from "./Item";

import './itemList.css';


function ItemList( {products} ) {

    return (
        <div className="row">
            {products.map(product => <Item product={product} />)}
        </div>
    )
}

export default ItemList