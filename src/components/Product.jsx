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
        <>
            <p>Product: {product.name}</p>
            <p>Manufacturer: {product.manufacturer.name}</p>
            <p>Price: {product.price}&euro;</p>
            <p>Expiry date: {dateString}</p>
            <p>Id: {product.id}</p>
            <button onClick={handleEditClick}>EDIT</button>
            <button onClick={handleDeleteClick}>DELETE</button>
        </>
    );
}

export default Product;