import firebase from 'firebase';
import { productsRequested, productsLoaded, productsError } from '../actions/actions';

const getAllProducts = (dispatch) => {
    dispatch(productsRequested());
    let data = [];
    firebase.firestore().collection("products").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const newItem = {...doc.data(), id: doc.id}
            data = [...data, newItem]
        });
        dispatch(productsLoaded(data));
    })
    .catch(error=>dispatch(productsError(error)));
}

export {getAllProducts}