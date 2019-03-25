import React from 'react';
import Header from '../Header';
import styles from './ProductsPage.module.css';
import ProductListView from './ProductListView';

const productsPage = (props) => {
    return(
        <div className={styles.allProducts}>
            <Header />
            <ProductListView />
            <div>In ProductsPage</div>
        </div>
    )
}



export default productsPage;