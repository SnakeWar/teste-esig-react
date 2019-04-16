import React from 'react';
import api from '../../services/api';
import "./styles.css";

export default class Main extends React.Component{

    state = {
        products: [],
        contagem: 1,
    }

    componentDidMount() {
        this.loadProduct();
    }

    loadProduct = async () => {
        const response = await api.get('/products');

        console.log(response.data);

        this.setState({
            products: response.data.data
        })
};

    render() {
        return (
            <div className='product-list'>
                {this.state.products.map(product => (
                    <article key={product.id}>
                        <strong>{product.product_name}</strong>
                        <p>{product.product_description}</p>
                        <a href=''>Acessar</a>
                    </article>
                ))}

            </div>
        )

    }
}