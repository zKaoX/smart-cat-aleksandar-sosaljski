/**
 * INITIAL DATA 
 */
if (!localStorage.getItem('isInitialised')) {
    localStorage.setItem('isInitialised', true);
    const products = [
        { id: 1, name: 'product1', manufacturer: {id: 1, name: 'manufacturer1'}, price: 1, expiryDate: Date.now() },
        { id: 2, name: 'product2', manufacturer: {id: 2, name: 'manufacturer2'}, price: 2, expiryDate: Date.now() },
    ];
    localStorage.setItem('products', JSON.stringify(products));
}

/**
 * API METHODS 
 */
export function getProducts() {
    return JSON.parse(localStorage.getItem('products'));
}

export function addProduct(product) {
    const products = JSON.parse(localStorage.getItem('products'));
    localStorage.setItem('products', JSON.stringify( [...products, product] ));
}

export function deleteProduct(id) {
    const products = getProducts();
    const filtered = products.filter((p) => id !== p.id);
    localStorage.setItem('products', JSON.stringify(filtered));
}

export function updateProduct(product) {
    const products = getProducts();
    const index = products.findIndex(({ id }) => id === product.id);
    products[index] = {
        ...products[index],
        ...product
    }

    localStorage.setItem('products', JSON.stringify(products));
}