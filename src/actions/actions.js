const productsLoaded = (products)=>{
    return {
        type: 'PRODUCTS-LOADED',
        payload: products
    }
}

const productsRequested = ()=>{
    return {
        type: 'PRODUCTS-REQUESTED'
    }
}

const productsError = (message)=>{
    return {
        type: 'PRODUCTS-ERROR',
        payload: message
    }
}


export {productsLoaded, productsRequested, productsError}