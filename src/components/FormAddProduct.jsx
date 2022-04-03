import { useRef } from "react";
import { getManufacturers } from '../backend/api';

function formAddProduct({ onAddClick }) {
    /**
     * DATA 
     */
    const nameRef = useRef('pera');
    const manufacturerIdRef = useRef('zdera');
    const priceRef = useRef(0);
    const expiryDateRef = useRef(Date.now());

    const manufacturers = getManufacturers();

    /**
     * EVENT HANDLERS 
     */
    function handleAddClick(e) {
        e.preventDefault();
        const p = {
            name: nameRef.current.value,
            price: priceRef.current.value,
            manufacturerId: manufacturerIdRef.current.value,
            expiryDate: expiryDateRef.current.value
        };
        onAddClick(p);
    }

    /**
     * COMPONENT RETURN STATEMENT 
     */
    return (
        <form onSubmit={handleAddClick} className="form-add-product">
            {/* NAME */}
            <label>
                <span>Name:</span>
                <input type="text" ref={nameRef} required />
            </label>

            {/* MANUFACTURER */}
            <label>
                <span>Manufacturer:</span>
                <select name="cars" ref={manufacturerIdRef}>
                    {
                        manufacturers.map(({ id, name }) => <option value={id}>{name}</option>)
                    }
                </select>
            </label>

            {/* PRICE */}
            <label>
                <span>Price:</span>
                <input type="number" ref={priceRef} required />
            </label>

            {/* EXPIRY DATE */}
            <label>
                <span>Expiry date:</span>
                <input type="date" ref={expiryDateRef} required />
            </label>

            {/* SUBMIT */}
            <input type="submit" value="Add Product" />
        </form>
    );
}

export default formAddProduct;