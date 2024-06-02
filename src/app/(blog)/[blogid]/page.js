import getBlogById from '@/utils/postById/getPostbyUserid'

const BlogById = async ({params}) => {
  // console.log(params)
  const data=await getBlogById(params.blogid);
  // console.log("Data By Id : ",data);
  return (
    <div >
      <h1>Title : {data.title}</h1>
      <br/>
      <p>Body : {data.body}</p>
    </div>
  )
}

export default BlogById