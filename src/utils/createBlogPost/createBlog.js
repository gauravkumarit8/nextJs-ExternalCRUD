export async function uploadProduct(productData) {
    try {
      const response = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        body: JSON.stringify(productData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to upload product');
      }
  
      const result = await response.json();
      return { success: true, data: result };
    } catch (error) {
      return { success: false, message: error.message };
    }
}
  