import getBlogById from '@/utils/postById/getPostbyUserid'
import Image from 'next/image';
import Link from 'next/link';

const BlogById = async ({params}) => {
  // console.log(params)
  const data=await getBlogById(params.blogid);
  // console.log("Data By Id : ",data);
  return (
    <div >
      <h1>Title : {data.title}</h1>
      <br/>
      <h1>Price : {data.price}</h1>
      <br/>
      <p>description : {data.description}</p>
      <Image src={data.image} width={200} height={300} alt={data.title} />
      <br/><hr/> <br/>
      <Link href={`/update/${data.id}`} >Update Post</Link>
      <br/><hr/> <br/>
      <Link href={`/delete/${data.id}`}>Delete</Link>
    </div>
  )
}

export default BlogById