import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
const Admin = () => {
    const [posts,setPosts] = useState(null);

    const param = useParams()
    console.log(param);
    useEffect(()=>{
        axios.get('/api/posts')
        .then((response)=>{
          setPosts(response.data)
        })
      },[])
    const deletePost=(id,e)=>{
        e.preventDefault()
        axios.delete(`/api/posts/${id}`)
            .then(res=>console.log(res))
        // alert(id)
    }

    return (
        <React.Fragment>
            <h1>posts</h1>
            {posts && posts.map((pos, index) => {
                    return <div key={posts._id}>
                        <h1>Title : {pos.title}</h1>
                        <h2>email : {pos.email}</h2>
                        <h2>description : {pos.description}</h2>
                        <h2>category : {pos.category}</h2>
                        <h2>cost Estimate : {pos.costEstimate}</h2>
                        <h2>department : {pos.department}</h2>
                        <button className='btn btn-danger' onClick={(e)=>deletePost(pos._id,e)}>delete</button>
                        
                        <br></br>
                        <br></br>
                    </div>
            })}
        </React.Fragment>
    )
}

export default Admin