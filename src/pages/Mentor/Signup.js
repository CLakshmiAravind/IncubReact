import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { register } from '../../services/mentorSigning'
const Signup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [errors, setErrors] = useState({})
  const [department, setDepartment] = useState('')
  const [ConPassword, setConPassword] = useState('')
  const [qualification, setQualification] = useState('')
  const [interest, setInterest] = useState('')


  const emailregex = new RegExp('^[a-zA-Z0-9+_.-]+@+rguktn.ac.in+$');

  const validate = () => {
    const errors = {}
    if (!emailregex.test(email))
      errors.email = 'email is incorrect'
    if (password.length < 6)
      errors.password = 'password must contain minmum 6 characters'
    if (!name.trim() === 0)
      errors.name = 'name is required'
    if (!department)
      errors.department = 'department is required'
    if (ConPassword !== password)
      errors.ConPassword = 'both passwords didnt match'
    if (!qualification)
      errors.qualification = 'enter qualification'
    if (!interest)
      errors.interest = 'enter your interested fields'
    return errors;
  }

  const doSubmit = async ()=>{
    try {
      await register(email,password,name,department,qualification,interest)
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
    if(errors.email || errors.password || errors.name || errors.department || errors.ConPassword || errors.qualification || errors.interest)
      console.log(email || password, name, department, qualification, errors.email, errors.password, errors.name, errors.department, errors.ConPassword, errors.qualification);
    else{
      doSubmit();
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
    const name = e.target.value
    setName(name);
  }

  const departChange = e => {
    const depart = e.target.value
    setDepartment(depart)
  }

  const ConPasswordChange = e => {
    const passwd = e.target.value
    setConPassword(passwd)
  }

  const qualiChange = e => {
    const qualification = e.target.value
    setQualification(qualification)
  }

  const interestChange = e => {
    const interest = e.target.value
    setInterest(interest)
  }

  return (
    <React.Fragment>
      <div >
      <form className='mb-3' style={{ "maxWidth": "500px" }} onSubmit={handleSubmit}>
        <h2 style={{ "textAlign": "center" }}>Mentor Sign Up</h2>
        <div>
          <label className='form-label'><h4>Name*</h4></label>
          <input className='form-control' type="text" placeholder='Full Name' value={name} onChange={nameChange} />
          {errors.name && <div className='alert alert-danger'>{errors.name}</div>}
        </div>
        <br></br>
        <div>
          <label className='form-label'><h4>mail*</h4></label>
          <input className='form-control' type="email" placeholder='example.@rguktn.ac.in' value={email} onChange={emailChange} />
          {errors.email && <div className='alert alert-danger'>{errors.email}</div>}
        </div>
        <br></br>
        <div>
          <label className='form-label'><h4>password*</h4></label>
          <input className='form-control' type="password" onChange={passwordChange} value={password} placeholder='minimum 6 characters' />
          {errors.password && <div className='alert alert-danger'>{errors.password}</div>}
        </div>
        <br></br>
        <div>
          <label className='form-label'><h4>Confrom password*</h4></label>
          <input className='form-control' type="password" onChange={ConPasswordChange} value={ConPassword} placeholder='minimum 6 characters' />
          {errors.ConPassword && <div className='alert alert-danger'>{errors.ConPassword}</div>}
        </div>
        <br></br>

        <div>
          <label className='form-label'><h4>Department*</h4></label>
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
        <br></br>
        <div>
          <label className='form-label'><h4>Qualification*</h4></label>
          <select className='form-select' onChange={qualiChange} value={qualification}>
            <option value=''>......</option>
            <option value='M.Tech'>M.Tech</option>
            <option value='M.Tech(ph.D)'>M.Tech(ph.D)</option>
            <option value='ph.D'>ph.D</option>
          </select>
          {errors.qualification && <div className='alert alert-danger'>{errors.qualification}</div>}

        </div>
        <br></br>
        <div>
          <label className='form-label'><h4>Area of Interests*</h4></label>
          <input className='form-control' type="text" placeholder='AI,VLSi,Robotics...' value={interest} onChange={interestChange} />
          {errors.interest && <div className='alert alert-danger'>{errors.interest}</div>}
        </div>
        <button type="submit" className="btn btn-primary" >Submit</button>

      </form>
      <Link to='/msignin'>
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