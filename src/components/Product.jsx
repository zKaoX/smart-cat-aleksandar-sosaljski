function Product({ product, onEditClick, onDeleteClick }) {
    /**
     * EVENT HANDLERS 
     */
    function handleEditClick() { onEditClick(); }
    function handleDeleteClick() { onDeleteClick(); }


    /**
     * COMPONENT RETURN STATEMENT 
     */
    const dateString = (new Date(product.expiryDate)).toLocaleDateString();
    return (
        <ul className="product">
            <li>Product: {product.name}</li>
            <li>Manufacturer: {product.manufacturer.name}</li>
            <li>Price: {product.price}&euro;</li>
            <li>Expiry date: {dateString}</li>
            <li> <button onClick={handleEditClick}>EDIT</button> </li>
            <li> <button onClick={handleDeleteClick}>DELETE</button> </li>
        </ul>
    );
}

export default Product;