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

    return (
        <main className='products-page'>
            <button onClick={() => navigate('/products/add')}>ADD PRODUCT</button>
                      
            {
                products.map(p => (
                    <Product
                        product={p}
                        onEditClick={()  => navigate(`/products/${p.id}/edit`)}
                        onDeleteClick={() => deleteProduct(p.id)}
                        key={p.id}
                    />
                ))
            }
        </main>
    );
}

export default Products;