import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts, deleteProduct, addProduct, subscribeOnProductsChange } from '../backend/api';

import Product from '../components/Product';

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
            manufacturerId: '1',
            price: 1,
            expiryDate: new Date(Date.now())
        });
    }

    return (
        <>
            <h1>PRODUCTS</h1>
            
            <button onClick={() => navigate('/products/add')}>ADD</button>
            
            <br/>
            <p>#################</p>
            <button onClick={handleAddRandomClick}>ADD RANDOM</button>
            <p>#################</p>
            <br/>
                      
            {
                products.map(p => (
                    <Product
                        product={p}
                        onEditClick={()  => navigate(`/products/${p.id}/edit`)}
                        onDeleteClick={() => deleteProduct(p.id)}
                    />
                ))
            }
        </>
    );
}

export default Products;