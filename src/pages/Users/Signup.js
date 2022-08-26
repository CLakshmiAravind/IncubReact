import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { register, checkMail } from '../../services/signup'
const Signup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [namee, setName] = useState('')
  const [errors, setErrors] = useState({})
  const [department, setDepartment] = useState('')
  const [ConPassword, setConPassword] = useState('')


  const emailregex = new RegExp('^[a-zA-Z0-9+_.-]+@+rguktn.ac.in+$');

  const validate = () => {
    const errors = {}
    if (!emailregex.test(email)){
      errors.email = 'email is incorrect'
    }
    if(!checkMail(email)){
      errors.email = 'email is already used, refresh the page '
      console.log(errors.email);
    }
    if (password.length < 6)
      errors.password = 'password must contain minmum 6 characters'
    if (namee.length === 0)
      errors.name = 'name is required'
    if (!department)
      errors.department = 'department is required'
    if (ConPassword !== password)
      errors.ConPassword = 'both passwords didnt match'
    return errors;
  }

  const doSubmit = async ()=>{
      try {
        await register(email,password,namee,department)
        // navigate('/')
        window.location=('/signin')
        // console.log();
      } catch (error) {
        if(error.response && error.response.status ===400){
          errors.email = error.response.data
          console.log(error);
          setErrors(errors)
        }
      }
    
  }


  const handleSubmit = e => {
    e.preventDefault();

    const errors = validate();
    if((errors.email  || errors.password  || errors.name  || errors.department  || errors.ConPassword )){
      console.log('crror occured');
    }
    else{
      doSubmit();
      // console.log(errors.email, errors.password, errors.name, errors.department, errors.ConPassword);
    }
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

  const nameChange = e => {
    const namee = e.target.value
    setName(namee);
  }

  const departChange = e => {
    const depart = e.target.value
    setDepartment(depart)
  }

  const ConPasswordChange = e => {
    const passwd = e.target.value
    setConPassword(passwd)
  }

  return (
    <React.Fragment>
      <div style={{"marginLeft":"30%"}}>
        <p style={{"color":"red"}}>please refresh the page if not signing up and not showing any errors  it means user is already there with that email</p>
        <form className='mb-3' style={{ "maxWidth": "500px" }} onSubmit={handleSubmit}>
          <h2 style={{ "textAlign": "center" }}>Student Sign Up</h2>
          <div>
            <label className='form-label'><h4>Name</h4></label>
            <input className='form-control' type="text" placeholder='Full Name' value={namee} onChange={nameChange} />
            {errors.name && <div className='alert alert-danger'>{errors.name}</div>}
          </div>
          <br></br>
          <div>
            <label className='form-label'><h4>mail</h4></label>
            <input className='form-control' type="email" placeholder='example.@rguktn.ac.in' value={email} onChange={emailChange} />
            {errors.email && <div className='alert alert-danger'>{errors.email}</div>}
          </div>
          <br></br>
          <div>
            <label className='form-label'><h4>password</h4></label>
            <input className='form-control' type="password" onChange={passwordChange} value={password} placeholder='minimum 6 characters' />
            {errors.password && <div className='alert alert-danger'>{errors.password}</div>}
          </div>
          <br></br>
          <div>
            <label className='form-label'><h4>Confrom password</h4></label>
            <input className='form-control' type="password" onChange={ConPasswordChange} value={ConPassword} placeholder='minimum 6 characters' />
            {errors.ConPassword && <div className='alert alert-danger'>{errors.ConPassword}</div>}
          </div>
          <br></br>

          <div>
            <label className='form-label'><h4>Department</h4></label>
            <select className='form-select' onChange={departChange} value={department}>
              <option value=''>......</option>
              <option value='cse'>cse</option>
              <option value='ece'>ece</option>
              <option value='civil'>civil</option>
              <option value='mech'>mech</option>
              <option value='chemical'>chemical</option>
              <option value='mme'>mme</option>
              <option value='eee'>eee</option>
            </select>
            {errors.department && <div className='alert alert-danger'>{errors.department}</div>}
          </div>
          <button type="submit" className="btn btn-primary" >Submit</button>

        </form>
        <Link to='/signin'>
          <div>
            already signed up ?
            <button className='btn btn-warning'>sign in</button>
          </div>
        </Link>
      </div>
    </React.Fragment>
  )

}

export default Signup