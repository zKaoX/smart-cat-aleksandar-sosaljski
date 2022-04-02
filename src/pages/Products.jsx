import { useNavigate } from 'react-router-dom';

function Products() {
    const navigate = useNavigate();

    function goToAdd() { navigate('/products/add'); }
    function goToEdit() { navigate('/product/1/edit'); }

    return (
        <>
            <h1>PRODUCTS PAGE</h1>
            <button onClick={() => goToAdd()}>GO TO ADD</button>
            <button onClick={() => goToEdit()}>GO TO EDIT</button>
        </>
    );
}

export default Products;