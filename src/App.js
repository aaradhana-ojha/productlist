import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductsList from './components/ProductList';
import AddProductForm from "./components/AddProductForm";
import './App.css';

const API_URL = 'https://dummyjson.com/products';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
 //yesle chain data fetch garo axios use garera ani 5 ota matra list ko product dekhayo
  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      const initialProducts = response.data.products.slice(0, 5);
      setProducts(initialProducts);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  //AddproductForm bata chain addProduct prop liyera naya product add garyo
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };
 //product list bhitra ko deleteProduct prop liyera delete garyo
  const deleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  const clearProducts = () => {
    setProducts([]);
  };

  return (
    <div className='container'>
      <h1>Product Management App</h1>
      <AddProductForm addProduct={addProduct} />
      <ProductsList products={products} deleteProduct={deleteProduct} />
      <button className="clear-button" onClick={clearProducts}>Clear All Products</button>
    </div>
  );
}

export default App;
