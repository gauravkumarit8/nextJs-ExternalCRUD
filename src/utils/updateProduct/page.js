
export default async function UpdateProductById(productdata,productId){
  const response=await fetch(`https://fakestoreapi.com/products/${productId}`,{
    method:'PUT',
    body:JSON.stringify(productdata)
  });
  if (!response.ok) {
    throw new Error('Failed to upload product');
  }

  const result = await response.json();
  return { success: true, data: result };
}