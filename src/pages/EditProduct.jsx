import { useParams } from 'react-router-dom';

function EditProduct() {
    const params = useParams();

    return <h1>EDIT PRODUCT PAGE ----- PRODUCT {params.productId}</h1>;
}

export default EditProduct;