import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { getProducts, addProduct, deleteProduct, updateProduct } from './backend/api';

function App() {
  const p = getProducts();

  return (
    <>
      <button onClick={() => addProduct({ id: Math.random().toString(), name: Math.random().toString(), manufacturer: {id: 2, name: 'manufacturer2'}, price: 2, expiryDate: Date.now() })}>ADD PRODUCT</button>
      {
        getProducts().map(({ id, name }) => {
          return (
            <div key={id}>
              <p> {name} </p>
              <button onClick={() => deleteProduct(id) }> DELETE </button>
              <button onClick={() => updateProduct({ id, name: `${name}${name}`}) }> DOUBLE NAME </button>
            </div>
          );
        })
      }
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
  document.getElementById('root')
)
