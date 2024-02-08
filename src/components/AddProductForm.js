import React, { useState } from 'react';

function AddProductForm({ addProduct }) { // addProduct chain props ho, //AddProductForm component is provided by the parent component (App.js) and is responsible for adding a new product to the list of products.
  const [name, setName] = useState('');//state variable for product name
  const [price, setPrice] = useState(''); //state variable for product price

  // Define a function to handle form submission
  //add product click garpaxi ya redirect hunxa
  const handleSubmit = (e) => {
    e.preventDefault();// browser chain refresh hudaina form submit garda
    //yesle check garxa ki name or price  empty xa ki nai , if empty xa bhane, return garxa without adding the product
    if (!name || !price) return;
   
    addProduct({ title: name, price: price });// new product ma chain k garni ho? name ra price add garni bhanera bhanxa
    setName('');// name ra price ko field form ma reset gardinxa
    setPrice('');
  };

  return (
    //add-product-form  styling ko lagi rakheko ho ani on Submit garsi chain  event handler "handleSubmit" call garxa jasle chain triggger garxa form submit garnalai
     <form className="add-product-form" onSubmit={handleSubmit}> 
      <h2>Add New Product</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProductForm;
