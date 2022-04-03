
import { v4 as uuidv4 } from 'uuid';

/**
 * INITIAL DATA 
 */
if (!localStorage.getItem('isInitialised')) {
    localStorage.setItem('isInitialised', true);
    const products = [
        { id: uuidv4(), name: 'product1', manufacturer: {id: 1, name: 'manufacturer1'}, price: 1, expiryDate: new Date(Date.now()) },
        { id: uuidv4(), name: 'product2', manufacturer: {id: 2, name: 'manufacturer2'}, price: 2, expiryDate: new Date(Date.now()) },
        { id: uuidv4(), name: 'product3', manufacturer: {id: 1, name: 'manufacturer1'}, price: 1, expiryDate: new Date(Date.now()) },
        { id: uuidv4(), name: 'product4', manufacturer: {id: 2, name: 'manufacturer2'}, price: 2, expiryDate: new Date(Date.now()) },
        { id: uuidv4(), name: 'product5', manufacturer: {id: 1, name: 'manufacturer1'}, price: 1, expiryDate: new Date(Date.now()) },
        { id: uuidv4(), name: 'product6', manufacturer: {id: 2, name: 'manufacturer2'}, price: 2, expiryDate: new Date(Date.now()) },
    ];
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

export function addProduct({ name, manufacturer, price, expiryDate }) {
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