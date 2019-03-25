import React, { Component } from 'react';
import Header from '../Header';
import styles from './ProductsPage.module.css';
import ProductListView from './ProductListView';

class ProductsPage extends Component {

    componentDidMount() {
        
    }

    render() {
        return (
            <div className={styles.allProducts}>

                <Header />
                <ProductListView />

            </div>
        )
    }
}



export default ProductsPage;