import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getProducts, deleteProduct, addProduct, subscribeOnProductsChange } from '../backend/api';

function Products() {
    const [products, setProducts] = useState( getProducts() );
    const navigate = useNavigate();

    useEffect(() => {
        const fn = subscribeOnProductsChange(() => {
            setProducts(getProducts());
        });

        return fn;
    }, []);

    function handleDeleteProductClick(id) {
        deleteProduct(id);
    }

    function handleAddRandomClick() {
        addProduct({ 
            name: Math.random().toString(),
            manufacturer: {id: 1, name: 'manufacturer1'},
            price: 1,
            expiryDate: Date.now()
        });
    }

    return (
        <>
            <h1>PRODUCTS PAGE</h1>
            
            <button onClick={() => navigate('/products/add')}>ADD</button>
            
            <button onClick={handleAddRandomClick}>ADD RANDOM</button>
            <br/>
            <p>#################</p>
            <br/>           
            {
                products.map(({ id, name }) => (
                    <>
                        <p>Name: {name}</p>
                        <p>Id: {id}</p>
                        <button onClick={() => handleDeleteProductClick(id)}>DELETE</button>
                        <button onClick={() => navigate(`/products/${id}/edit`)}>EDIT</button>
                    </>
                ))
            }
        </>
    );
}

export default Products;