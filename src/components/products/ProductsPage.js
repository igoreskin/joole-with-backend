import React, { Component } from 'react';
import Header from '../Header';
import styles from './ProductsPage.module.css';
import ProductListView from './ProductListView';
import * as actions from '../../actions/productActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ProductsPage extends Component {

    componentDidMount() {
        this.props.actions.loadProducts(); 
        // console.log(this.props.products)
    }

    render() {
        console.log(this.props.products)
        const renderProducts = this.props.products.map((product) => <ProductListView product={product}/>)
        return (
            <div className={styles.allProducts}>

                <Header />
                <div className={styles.productList}>
                    {renderProducts}
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state.products.products)
    return {
        products: state.products.products
        }
  }

const mapDispatchToProps = (dispatch) => {
    return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);