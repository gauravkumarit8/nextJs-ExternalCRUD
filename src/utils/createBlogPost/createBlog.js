export default async function CreateBlog(title,body){
    const response=await fetch("",{
        method:'Post',
        headers:{
            'Context-Type':'application/json',
        }
    })

}