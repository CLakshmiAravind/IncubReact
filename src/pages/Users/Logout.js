import React from 'react'

const Logout = () => {

    const componentDidMount=()=> { 
        localStorage.removeItem('token')
        window.location='/'
     }
     componentDidMount();
  return (
    null
  )
}

export default Logout