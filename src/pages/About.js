import React from 'react'
import '../index.css'
import { about } from '../rawData'
const About = () => {
  
  const myStyle={
    backgroundImage: 
"url('https://cdn.pixabay.com/photo/2022/06/20/14/20/space-7273891_960_720.jpg')",
    height:'100vh',
    marginTop:'0px',
    // fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  return (
    <div style={myStyle}>
      <h2 className='decor'>{about}</h2>
      <footer className='footer' style={{textAlign:'center'}}><a href='http://www.rguktn.ac.in'>RGUKT-Nuzvid</a>
        <div>
          <h5>Mylavaram,road</h5>
          <h5>Nuzvid,</h5>
          <h5>Krishna Dist.</h5>
        </div>
        <p>@copyrighted</p>
      </footer >
      </div>
  )
}

export default About