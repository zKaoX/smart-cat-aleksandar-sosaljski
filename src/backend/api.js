
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
        { id: uuidv4(), name: 'Hemomicin', manufacturer: manufacturers[0], price: 123, expiryDate: new Date(Date.now()) },
        { id: uuidv4(), name: 'Brufen', manufacturer: manufacturers[0], price: 400, expiryDate: new Date(Date.now()) },
        { id: uuidv4(), name: 'Aminalon', manufacturer: manufacturers[0], price: 581, expiryDate: new Date(Date.now()) },
        { id: uuidv4(), name: 'Viranto Forte', manufacturer: manufacturers[1], price: 222, expiryDate: new Date(Date.now()) },
        { id: uuidv4(), name: 'Herbiko', manufacturer: manufacturers[1], price: 78, expiryDate: new Date(Date.now()) },
        { id: uuidv4(), name: 'Aspirin', manufacturer: manufacturers[2], price: 140, expiryDate: new Date(Date.now()) },

        { id: uuidv4(), name: 'Pronizon', manufacturer: manufacturers[0], price: 455, expiryDate: new Date(Date.now()) },
        { id: uuidv4(), name: 'Doksicilin', manufacturer: manufacturers[0], price: 501, expiryDate: new Date(Date.now()) },
        { id: uuidv4(), name: 'Deksametazon', manufacturer: manufacturers[1], price: 99, expiryDate: new Date(Date.now()) },
        { id: uuidv4(), name: 'Pilokarpin ', manufacturer: manufacturers[1], price: 79, expiryDate: new Date(Date.now()) },
        { id: uuidv4(), name: 'Hemodrops', manufacturer: manufacturers[2], price: 60, expiryDate: new Date(Date.now()) },
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

export function getProduct(id) {
    const products = getProducts();
    return product.find(p => p === id);
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

export function getNumberOfProductsByManufacturer() {
    const manufacturers = getManufacturers();
    const products = getProducts();

    const x = {}
    products.forEach((p) => {
        if (x[p.manufacturer.name] === undefined) { 
            x[p.manufacturer.name] = 1;
            return;
        }
        x[p.manufacturer.name] += 1;
    });
    return Object.keys(x).map(name => ({ name, value: x[name]}))
}