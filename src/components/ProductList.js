import React from 'react';
//(products, deleteProduct) props bhitra ko property ho
//products: This prop contains an array of products that the ProductsList component will render.
//deleteProduct: This prop is a function that the ProductsList component can call to delete a product from the list.
function ProductsList({ products, deleteProduct }) {
  return (
    <div>
      <h2>Products List</h2>
      <ul>
        {/* product ko list ma id ra title chaiyeko xa so yesle k garo bahnda json ma bhayeko productt ko title r price dekhayo */}
        {products.map(product => (
          <li key={product.id}> 
            {product.title} - ₹{product.price}
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;
