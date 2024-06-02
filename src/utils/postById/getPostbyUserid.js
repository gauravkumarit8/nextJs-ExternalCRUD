
export default async function getBlogById(id){
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.json();
}