function productsReducer(state = {loading: false, products: []}, action) {
    switch(action.type) {
        case 'LOADING_PRODUCTS':
            return { ...state, loading: true}

        default: 
            return state;
    }
}

export default productsReducer;