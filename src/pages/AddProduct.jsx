import { useNavigate } from 'react-router-dom';
import { addProduct } from '../backend/api';
import FormAddProduct from '../components/FormAddProduct';

function AddProduct() {
    const navigate = useNavigate();

    function handleAddClick(p) {
        addProduct(p);
        navigate('/products')
    }

    return (
        <main className='add-product-page'>
            <FormAddProduct onAddClick={handleAddClick}/>
        </main>
    );
}

export default AddProduct;