import React from 'react'
import {  NavLink } from 'react-router-dom'
import { about } from '../rawData'
import '../index.css'
const Home = ({user}) => {
  const myStyle={
    backgroundImage: 
"url('https://cdn.pixabay.com/photo/2020/08/14/17/13/light-bulbs-5488573_960_720.jpg')",
    height:'100vh',
    marginTop:'0px',
    // fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  return (
    <React.Fragment>
      <div style={myStyle}>
      <h2 className='decor'>{about}</h2>
      <br></br>

      {!user && <NavLink to='/signup' className='btn btn-warning link' >Get Started</NavLink>}
      <div>
        {user && <h1 style={{"color":"white"}}>Choose Department</h1>}
        <div class="row">
          <div class="col">
        {user && <NavLink to='/cse' className='btn btn-light  ' style={{"fontSize":"36px"}} >CSE</NavLink>}
          </div>
          <div class="col">
      {user && <NavLink to='/ece' className='btn btn-light  '  style={{"fontSize":"36px"}}>ECE</NavLink>}
          </div>
          <div class="col">
      {user && <NavLink to='/eee' className='btn btn-light  '  style={{"fontSize":"36px"}}>EEE</NavLink>}
          </div>
          <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div class="row">
        <div class="col">
      {user && <NavLink to='/mech' className='btn btn-light  '  style={{"fontSize":"36px"}}>MECHANICAL</NavLink>}
        </div>
        
        <div class="col">
      {user && <NavLink to='/mme' className='btn btn-light  ' style={{"margin-left":"35%" ,"fontSize":"36px"}} >MME</NavLink>}
        </div>
        <div class="col">
      {user && <NavLink to='/chemical' className='btn btn-light  '  style={{"fontSize":"36px"}}>CHEMICAL</NavLink>}
        </div>
        <div class="col">
      {user && <NavLink to='/civil' className='btn btn-light  '  style={{"fontSize":"36px"}}>CIVIL</NavLink>}
        </div>
        </div>
        </div>
      </div>
      </div>
    </React.Fragment>
  )
}

export default Home