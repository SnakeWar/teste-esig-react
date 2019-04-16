import React from 'react';
import api from '../../src/services/api';

export default class Main extends React.Component{

    state = {
        products: [],
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
            <div>
                <h1>Products</h1>

            </div>
        )

    }
}