import { useRef } from "react";
import { useNavigate } from 'react-router-dom';

import { getManufacturers, addProduct } from '../backend/api';

function AddProduct() {
    const nameRef = useRef('pera');
    const manufacturerIdRef = useRef('zdera');
    const priceRef = useRef(0);
    const expiryDateRef = useRef(Date.now());

    const manufacturers = getManufacturers();

    const navigate = useNavigate();

    function handleAddClick(e) {
        e.preventDefault();
        const p = {
            name: nameRef.current.value,
            price: priceRef.current.value,
            manufacturerId: manufacturerIdRef.current.value,
            expiryDate: expiryDateRef.current.value
        };
        addProduct(p);
        navigate('/products')

        console.log(p);
    }

    return (
        <>
            <h1>ADD PRODUCT</h1>

            <form onSubmit={handleAddClick}>
                <label>
                    Name:
                    <input type="text" ref={nameRef} required/>
                </label>
                <label>
                    Manufacturer:
                    <select name="cars" ref={manufacturerIdRef}>
                        {
                            manufacturers.map(({ id, name }) => <option value={id}>{name}</option>)
                        }
                    </select>
                </label>
                <label>
                    Price:
                    <input type="number" ref={priceRef} required/>
                </label>
                <label>
                    Expiry date:
                    <input type="date" ref={expiryDateRef} required/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    );
}

export default AddProduct;