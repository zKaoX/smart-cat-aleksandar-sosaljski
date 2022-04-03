
import { v4 as uuidv4 } from 'uuid';

/**
 * INITIAL DATA 
 */
if (!localStorage.getItem('isInitialised')) {
    localStorage.setItem('isInitialised', true);
    
    const manufacturers = [ 
        {id: uuidv4(), name: 'Hemofarm'},
        {id: uuidv4(), name: 'Krka'},
        {id: uuidv4(), name: 'ZORKA Pharma'},
        {id: uuidv4(), name: 'Galenika'},
        {id: '1', name: 'Manufacturer'},
    ]
    const products = [
        { id: uuidv4(), name: 'Hemomicin', manufacturer: manufacturers[0], price: 1, expiryDate: new Date(Date.now()) },
        { id: uuidv4(), name: 'Brufen', manufacturer: manufacturers[0], price: 2, expiryDate: new Date(Date.now()) },
        { id: uuidv4(), name: 'Aminalon', manufacturer: manufacturers[0], price: 1, expiryDate: new Date(Date.now()) },
        { id: uuidv4(), name: 'Viranto Forte', manufacturer: manufacturers[1], price: 2, expiryDate: new Date(Date.now()) },
        { id: uuidv4(), name: 'Herbiko', manufacturer: manufacturers[1], price: 1, expiryDate: new Date(Date.now()) },
        { id: uuidv4(), name: 'Aspirin', manufacturer: manufacturers[2], price: 2, expiryDate: new Date(Date.now()) },
    ];

    localStorage.setItem('manufacturers', JSON.stringify(manufacturers));
    localStorage.setItem('products', JSON.stringify(products));

}

/**
 * SUBSCRIBERS
 */
let subscribers = [];

/**
 * API METHODS 
 */
export function getProducts() {
    return JSON.parse(localStorage.getItem('products'));
}

export function addProduct({ name, manufacturerId, price, expiryDate }) {
    const manufacturer = getManufacturers().find(el => el.id === manufacturerId)

    const product =  { id: uuidv4(), name, manufacturer, price, expiryDate }
    const products = JSON.parse(localStorage.getItem('products'));
    localStorage.setItem('products', JSON.stringify( [...products, product] ));
    notifySubscribers();
}

export function deleteProduct(id) {
    const products = getProducts();
    const filtered = products.filter((p) => id !== p.id);
    localStorage.setItem('products', JSON.stringify(filtered));
    notifySubscribers();
}

export function updateProduct(product) {
    const products = getProducts();
    const index = products.findIndex(({ id }) => id === product.id);
    products[index] = {
        ...products[index],
        ...product
    }

    localStorage.setItem('products', JSON.stringify(products));
    notifySubscribers();
}

function notifySubscribers() {
    subscribers.forEach(s => s());
}

export function subscribeOnProductsChange(callback) {
    subscribers.push(callback);

    const unsubscribe = () => {
        subscribers = subscribers.filter(fn => fn !== callback);
    };

    return unsubscribe;
}

export function getManufacturers() {
    return JSON.parse(localStorage.getItem('manufacturers'));
}