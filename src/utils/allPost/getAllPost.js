export default async function getAllPost(){
    const response=await fetch("https://jsonplaceholder.typicode.com/posts",{
        headers:{
            'Content-Type':'application/json',
        }
    })
    return response.json();
}