import axios from 'axios';
// import fetch from 'isomorphic-fetch';

export function loadProducts() {
    return(dispatch) => {
        dispatch({type: "LOADING_PRODUCTS"});
        return axios.get('http://localhost:3000/api/products')
        .then(response => {const products = response.data.products;
            console.log(products)
            if(!localStorage.getItem('products')) {
                localStorage.setItem('products', JSON.stringify(products))
            }
            return (dispatch({type: 'LOAD_PRODUCTS', payload: products}, 
            ))
        })
        .catch(error => console.log(error))
    }
}