export default async function deleteById(productId){
    const response=await fetch(`https://fakestoreapi.com/products/${productId}`,{
        method:"DELETE",
    })

  const result = await response.json();
  return { success: true, data: result };
}