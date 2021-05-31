import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../api/firebaseService';

const useOrders = () => {

  const dispatch = useDispatch();

    useEffect(()=>{
        getAllProducts(dispatch);
    }, [dispatch]);

    const data = useSelector(state => state);
    const {products, loading, error} = data;

  return { products, loading, error };
};

export default useOrders;