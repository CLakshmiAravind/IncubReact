import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import './MyPosts.css'
const MyPosts = ({user}) => {

    const [posts,setPosts] = useState(null);
    const [mentors,setMentors] = useState(null);
    console.log(user);
    useEffect(()=>{
      axios.get('/api/posts')
      .then((response)=>{
        setPosts(response.data)
      })
      axios.get('/api/mentors')
      .then((response)=>{
        setMentors(response.data)
      })
    })

    const deletePost=(id,e)=>{
        e.preventDefault()
        axios.delete(`/api/posts/${id}`)
            .then(res=>console.log(res))
        // alert(id)
    }



    return (
        <React.Fragment>
            <h1>My posts</h1>
            <Link to='/new'><h2>create Post</h2></Link>
            <div className='float-container'>
            <div className='float-child'>
            {posts && posts.map((pos, index) => {
                if (pos.email === user.email) {
                    return <div key={posts._id} className='false'>
                        <h1>Title : {pos.title}</h1>
                        <h2>email : {pos.email}</h2>
                        <h2>description : {pos.description}</h2>
                        <h2>category : {pos.category}</h2>
                        <h2>cost Estimate : {pos.costEstimate}</h2>
                        <h2>department : {pos.department}</h2>
                        <button className='btn btn-warning' onClick={(e)=>deletePost(pos._id,e)}>delete</button>
                        <br></br>
                        <br></br>
                    </div>
                }
                else { return null }
            })}
            </div>
            <div className='float-mentor'> 
            <h2>Avilable Mentors</h2>
            {mentors && mentors.map((men,index)=>{
                if(men.department === user.department){
                return <div>
                    <h1>{men.name}</h1>
                    <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${men.email}`}>Connect</a>
                </div>}
                else{return null}
            })}
            </div>

            </div>
        </React.Fragment>
    )
}
export default MyPosts