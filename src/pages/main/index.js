import React from 'react';
import api from '../../services/api';
import "./styles.css";
import { Link } from 'react-router-dom';

export default class Main extends React.Component{

    state = {
        products: [],
        productInfo: {},
        page: 1,
        lastPage: null
    };

    componentDidMount() {
        this.loadProduct();
    }

    loadProduct = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { data, ...productInfo } = response.data;
        const lastPage = productInfo.meta['last_page'];
        console.log(data);
        console.log(productInfo.meta);

        this.setState({
            products: data, productInfo, page:page, lastPage:lastPage
        })
};

    prevPage = () => {
        const { page } = this.state;

        if(page === 1) return;

        const pageNumber = page -1;

        this.loadProduct(pageNumber);
    }

    nextPage = () => {
        const { page, lastPage } = this.state;

        if(page === lastPage) return;

        const pageNumber = page + 1;

        this.loadProduct(pageNumber);
    };

    render() {
        return (
            <div className='product-list'>
                {this.state.products.map(product => (
                    <article key={product.id}>
                        <strong>{product.product_name}</strong>
                        <p>{product.product_description}</p>
                        <Link to={`/product/${product.id}`}>Acessar</Link>
                    </article>
                ))}
                <div className='actions'>
                    <button disabled={this.state.page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={this.state.page === this.state.lastPage} onClick={this.nextPage}>Proxima</button>
                </div>
            </div>
        )

    }
}