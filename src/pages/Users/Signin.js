import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signin } from '../../services/signup'
// import { useHistory } from 'react-router-dom';
import '../../index.css'
const Signin = (props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()
  const emailregex = new RegExp('^[a-zA-Z0-9+_.-]+@+rguktn.ac.in+$');

  const validate = () => {
    const errors = {}
    if (!emailregex.test(email))
      errors.email = 'email is incorrect'
    if (password.length < 6)
      errors.password = 'password must contain minmum 6 characters'
    return errors;
  }


  const doSubmit=async()=>{
    try {
      await signin(email,password)
      // navigate('/')
      window.location=('/')
      // console.log();
    } catch (error) {
      if(error.response && error.response.status ===400){
        errors.email = error.response.data
        errors.password = error.response.data

        setErrors(errors)
      }
    }

  }

  const handleSubmit = e => {
    e.preventDefault();

    const errors = validate();
    // console.log(email, password, errors.email, errors.password);
    if(errors.email || errors.password)
      console.log('error occured');
    else
      // console.log(email, password,'welcome')
      doSubmit();
    setErrors(errors)
  }

  const emailChange = e => {
    const mail = e.target.value
    setEmail(mail)
  }

  const passwordChange = e => {
    const passwd = e.target.value
    setPassword(passwd)
  }

  return (
    <React.Fragment >
      <div className='false'>
      <div  style={{"marginLeft":"30%"}}>
        <form className='mb-3' style={{ "maxWidth": "500px" }} onSubmit={handleSubmit}>
          <h2 style={{ "textAlign": "center" }}>Student Sign In</h2>
          <div>
            <label className='form-label'><h4>mail</h4></label>
            <input className='form-control' type="email" placeholder='example.@rguktn.ac.in' value={email} onChange={emailChange} />
            {errors.email && <div className='alert alert-danger'>{errors.email}</div>}
          </div>
          <br></br>
          <br></br>
          <div>
            <label className='form-label'><h4>password</h4></label>
            <input className='form-control' type="password" onChange={passwordChange} value={password} placeholder='minimum 6 characters' />
            {errors.password && <div className='alert alert-danger'>{errors.password}</div>}
          </div>
          <br></br>
          <br></br>
          <button type="submit" className="btn btn-primary">Submit</button>

        </form>
        <Link to='/signup'>
          <div>
            new user ?
            <button className='btn btn-warning'>sign up</button>
          </div>
        </Link>
      </div>
      </div>
    </React.Fragment>
  )

}

export default Signin