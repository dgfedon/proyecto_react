import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import './ItemList.css';


export class ItemListContainer extends Component {
    render() {
        return (
            <>
                <section className="item__list--container">
                    <Container>
                        <h1 style={{fontSize: 50}}>{this.props.titulo}</h1>
                        <p style={{fontSize: 25}}>{this.props.subtitulo}</p>
                    </Container>
                </section>
            </>
        )
    }
}

export default ItemListContainer
