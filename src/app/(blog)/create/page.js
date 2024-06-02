"use client"

import { uploadProduct } from "@/utils/createBlogPost/createBlog";
import Link from "next/link";
import { useState } from "react"

const CreateBlog = () => {
  const [title,setTitle]= useState("");
  const [desc,setDesc]=useState("");
  const [price,setPrice]=useState('');
  const [category,setCategory]=useState('');
  const [image,setImage]=useState('');
  const [message,setMessage]=useState('');

  const handleSubmit=async(e)=>{
    e.preventDefault();
    //set the product data from the create
    const productData={
      title,
      desc,
      price:parseFloat(price),
      image,
      category
    };
    const result=await uploadProduct(productData);
    if (result.success) {
      setMessage('Product uploaded successfully!');
      console.log('Product uploaded:', result.data);

      // Reset form
      setTitle('');
      setPrice('');
      setDesc('');
      setImage('');
      setCategory('');
    } else {
      setMessage(`Error: ${result.message}`);
    }
  };

  return (
    <div><h1>Upload Product</h1><br/>
    <Link href={"/"}>Back</Link>
    <br/><hr/><br/><hr/>
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
        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} required />
      </div>
      <div>
        <label>Image URL:</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)}  />
      </div>
      <div>
        <label>Category:</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
      </div>
      <button type="submit">Upload Product</button>
    </form>
    {message && <p>{message}</p>}
  </div>
  )
}

export default CreateBlog