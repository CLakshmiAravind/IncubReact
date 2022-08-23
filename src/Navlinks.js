import React from 'react'
import { NavLink } from 'react-router-dom'

const Navlinks = ({user}) => {
    
  return(
    <nav className='navbar-dark d-flex flex-row' style={{'background':'#66d47c'}}>
        <NavLink className='btn btn-light m-2 ' to='/'>Home</NavLink>
        {!user && <React.Fragment><NavLink className='btn btn-light m-2 ' to='/signin'>Student Signin</NavLink>
        <NavLink className='btn btn-light m-2 ' to='/msignin'>mentor Singin</NavLink></React.Fragment>}
        {user && <React.Fragment>
          <NavLink className='btn btn-light m-2 ' to='/profile'>{user.name}</NavLink>
          <NavLink className='btn btn-light m-2 ' to='/logout'>Logout</NavLink>
         {user.email !== 'adminIncubation@rguktn.ac.in' && <NavLink className='btn btn-light m-2 ' to='/posts'>All Posts</NavLink>}
         {user.email === 'adminIncubation@rguktn.ac.in' && <NavLink className='btn btn-light m-2 ' to='/admin'>All Posts</NavLink>}
         {!user.qualification && <NavLink className='btn btn-light m-2 ' to='/myposts'>My Posts</NavLink>}
          </React.Fragment>}
        <NavLink className='btn btn-light m-2 ' to='/about'>about</NavLink>
    </nav>
  )
}

export default Navlinks