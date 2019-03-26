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
    }

    render() {
        console.log(this.props.products)
        const renderProducts = this.props.products.map((product) => <ProductListView product={product} key={product.code} />)
        return (
            <div className={styles.allProducts}>

                <Header />

                <div className={styles.topLine}>
                    <span className={styles.mechanical}>Mechanical&nbsp;&nbsp;></span><span>&nbsp;&nbsp;HVAC Fans</span>
                </div>

                <div className={styles.productList}>
                    {renderProducts}
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products
        }
  }

const mapDispatchToProps = (dispatch) => {
    return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);