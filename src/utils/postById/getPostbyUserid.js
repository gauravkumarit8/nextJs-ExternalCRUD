
export default async function getBlogById(id){
    const response=await fetch(`https://fakestoreapi.com/products/${id}`);
    return response.json();
}