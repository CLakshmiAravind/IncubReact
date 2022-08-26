import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../index.css'
const Posts = ({user}) => {
  const [posts,setPosts] = useState(null);
  const [view,setView] = useState(true);
  console.log(user);
  useEffect(()=>{
    axios.get('/api/posts')
    .then((response)=>{
      setPosts(response.data)
    })
  },[])

  return (
   <React.Fragment>
    <h1>posts</h1>
    {posts && posts.map((pos,index)=>{
      if(pos.department===user.department ){
      return <div key={posts._id} className='false'>
        <h1>Title : {pos.title}</h1>
        {/* <button className='btn btn-success m-2' onClick={()=>setView(!view)}>view</button> */}
        {view&&(<h2>email : {pos.email}</h2>)}
        {view&&(<h2>description : {pos.description}</h2>)}
         {view&&(<h2>category : {pos.category}</h2>)}
         {view&&(<h2>cost Estimate : {pos.costEstimate}Rupees</h2>)}
         {view&&(<h2>department : {pos.department}</h2>)}
         {view&&(<a className='btn btn-dark' href={`https://mail.google.com/mail/?view=cm&fs=1&to=${pos.email}`}><h2>connect</h2></a>)}
        <br></br>
        <br></br>
      </div>
}
else{return null}})}


   </React.Fragment>
  )
}

export default Posts