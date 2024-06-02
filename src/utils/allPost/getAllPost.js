export default async function getAllPost(){
    const response=await fetch("https://fakestoreapi.com/products",{
        headers:{
            'Content-Type':'application/json',
        }
    })
    return response.json();
}