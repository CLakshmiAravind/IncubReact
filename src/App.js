import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Home from './pages/Home';
import MSignin from './pages/Mentor/Signin'
import MSignup from './pages/Mentor/Signup'
import Signin from './pages/Users/Signin'
import Signup from './pages/Users/Signup'
import Navlinks from './Navlinks';
import About from './pages/About'
import Posts from './pages/Posts';
import Error from './pages/Error';
import { Component } from 'react';
import Logout from './pages/Users/Logout';

class App extends Component{

  state={};

  componentDidMount(){ 
  try {
      const jwt = localStorage.getItem("token")
      const user = jwtDecode(jwt)
      console.log(user);
      this.setState({user})
  
     
  } catch (error) {
    
  }
}


 
render(){
  return (
    <BrowserRouter>
   <Navlinks user={this.state.user} />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/msignin' element={<MSignin/>} />
        <Route path='/msignup' element={<MSignup/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/post' element={<Posts/>} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    //<h2>Home</h2>
  );
}}

export default App;