import getAllPost from '@/utils/allPost/getAllPost'
import Link from 'next/link';
import React from 'react'

const AllPost = async() => {
  const data=await getAllPost();
  console.log("Data",data);
  return (
    <>
      {
        data.map((post,i)=>(
          <div key={i}>
            <h1>Title : {post.title}</h1>
            <Link href={`/${post.id}`}>Read more ...</Link>
          </div>
        ))
      }
    </>
  )
}

export default AllPost