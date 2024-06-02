"use client"

import UpdateProductById from '@/utils/updateProduct/page';
import React, { useState } from 'react';

const UpdateProductForm = ({ productId }) => {
  
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      title,
      price: parseFloat(price),
      description,
      image,
      category,
    };

    // const result = await UpdateProductById(productId, productData);
    const result=await UpdateProductById(productData,productId);

    if (result.success) {
      setMessage('Product updated successfully!');
      console.log('Product updated:', result.data);
      setTitle(result.title);
      setPrice(result.price);
      setDescription(result.description);
      setImage(result.image);
      setCategory(result.category);
    } else {
      setMessage(`Error: ${result.message}`);
    }
  };

  return (
    <div>
      <h1>Update Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </div>
        <button type="submit">Update Product</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateProductForm;
