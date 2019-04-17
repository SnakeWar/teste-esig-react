import React from 'react';
import api from '../../services/api';
import './styles.css';


export default class Product extends React.Component {

    state = {
        product: {},
    };

    componentDidMount() {
        this.loadProduct();
    }

    loadProduct = async () => {
        const { id } = this.props.match.params;
        console.log('ID: ' + id);
        await api.get(`product/${id}`)
            .then(res => {
                const response = res.data;
                this.setState({ product: response.data });
            })

    }

    render() {

        const { product } = this.state;

        return (
            <div className='product-info'>
                <h1>Produto: {product.product_name}</h1>
                <p>Descriçao: {product.product_description}</p>
                <p>Preço: {product.product_price}</p>
            </div>
        )
    }
}