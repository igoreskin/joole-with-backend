import axios from 'axios';

export function loadProducts() {
    return(dispatch) => {
        dispatch({type: "LOADING_USERS"});
        return axios.get('products.json')
        .then(response => {const products = response.data;
            if(!localStorage.getItem('products')) {
                localStorage.setItem('products', JSON.stringify(products))
            }
            return (dispatch({type: 'LOAD_PRODUCTS', payload: products}, 
            // console.log(users)
            ))
        })
        .catch(error => console.log(error))
    }
}