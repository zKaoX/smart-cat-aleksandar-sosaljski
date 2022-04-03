import { useParams } from 'react-router-dom';

function EditProduct() {
    const params = useParams();

    return <img width="100%" src='https://workinprogress.no/dynamic/upload/bilder/Work-In-Progress.png'/>;
}

export default EditProduct;