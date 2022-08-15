import React from 'react'
import {  NavLink } from 'react-router-dom'
import { about } from '../rawData'
const Home = () => {
  return (
    <React.Fragment>
      <h2>{about}</h2>
      <NavLink to='/signup' className='btn btn-success position-absolute top-50 start-50 translate-middle' >Get Started</NavLink>
    </React.Fragment>
  )
}

export default Home