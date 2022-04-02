import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Products from './pages/Products';
import EditProduct from './pages/EditProduct';
import AddProduct from './pages/AddProduct';
import About from './pages/About';
import Statistics from './pages/Statistics';

import Navigation from './components/Navigation';

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
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
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
