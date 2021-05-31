let initialState = {
    products: [],
    loading: false,
    error: ''
}

const reducer = (state=initialState, action) => {

    switch(action.type) {
        case 'PRODUCTS-LOADED':
            return {
                products: action.payload,
                loading: false,
                error: ''
            }

        case 'PRODUCTS-REQUESTED':
            return {
                ...state,
                loading: true,
                error: ''
            }

        case 'PRODUCTS-ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }     

        default: 
            return {
                ...state
            }
    }

}

export default reducer;

