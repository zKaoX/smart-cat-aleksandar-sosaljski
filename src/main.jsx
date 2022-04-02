import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  NavLink,
} from "react-router-dom";

import Products from './pages/Products';
import EditProduct from './pages/EditProduct';
import AddProduct from './pages/AddProduct';
import About from './pages/About';
import Statistics from './pages/Statistics';

import Navigation from './components/Navigation';

import './index.css'

import { getProducts, addProduct, deleteProduct, updateProduct } from './backend/api';

function App() {
  const p = getProducts();

  return (
    <>
      <Navigation />
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
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId/edit" element={<EditProduct />} />
          <Route path="/products/add" element={<AddProduct />} />

          <Route path="/about" element={<About />} />
          <Route path="/statistics" element={<Statistics />} />

          <Route
            path="*"
            element={<Navigate to="/products" replace />}
          />
        </Routes>
        <App/>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
