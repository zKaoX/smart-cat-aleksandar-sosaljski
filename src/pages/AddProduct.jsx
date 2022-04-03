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
        <>
            <h1>ADD PRODUCT</h1>
            <FormAddProduct onAddClick={handleAddClick}/>
        </>
    );
}

export default AddProduct;