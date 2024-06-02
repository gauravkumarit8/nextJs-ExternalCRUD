import getAllPost from '@/utils/allPost/getAllPost'
import Link from 'next/link';
import React from 'react'

const AllPost = async() => {
  const data=await getAllPost();
  console.log("Data",data);
  return (
    <>
      <div>
        <Link href={"/create"}>Create Product</Link>
      </div>
      {
        data.map((post,i)=>(
          <div key={i}>
            <h1>Title : {post.title}</h1>
            <h2>Price : {[post.price]}</h2> <br/>
            <Link href={`/${post.id}`}>Read more ...</Link><hr/><hr/>
          </div>
        ))
      }
    </>
  )
}

export default AllPost