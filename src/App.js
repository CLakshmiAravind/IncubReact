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
import Error from './pages/Error';
import { Component } from 'react';
import Logout from './pages/Users/Logout';
import Posts from './pages/posts/Posts';
import MyPosts from './pages/posts/MyPosts';
import CreatePost from './pages/posts/CreatePost';
import Admin from './pages/admin';


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
        <Route path='/posts' element={<Posts user={this.state.user}/>}/>
        <Route path='/myposts' element={<MyPosts user={this.state.user}/>}/>
        <Route path='/new' element={<CreatePost user={this.state.user}/>}/>
        <Route path='/admin' element={<Admin user={this.state.user}/>}/>

        <Route path='/about' element={<About/>} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    //<h2>Home</h2>
  );
}}

export default App;