"use client"

import deleteById from '@/utils/deletebyId/deleteId';
import React, { useState } from 'react';


const DeleteProductButton = ({params}) => {
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    const result = await deleteById(params.id);

    if (result.success) {
      setMessage('Product deleted successfully!');
      console.log('Product deleted:', result.data);
    } else {
      setMessage(`Error: ${result.message}`);
    }
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete Product</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteProductButton;
