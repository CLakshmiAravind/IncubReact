import React, { useState } from 'react'
import { createPost } from '../../services/signup'

const CreatePost = ({user}) => {

  const [title,setTitle] = useState('')
  const [department,setDepartment] = useState('')
  const [costEstimate,setCostEstimate] = useState();
  const [category,setCategory] = useState('');
  const [description,setDescription] = useState('');
  const [domain,setDomain] = useState('');
  const [errors,setErrors] = useState({});


  const validate=()=>{
    const errors={};
    if(!title)
      errors.title = 'title is required'
    if(!department)
      errors.department = 'department is required'
    if(!costEstimate)
      errors.costEstimate = 'costEstimate is required'
    if(!description)
      errors.description = 'description is required'
    if(!category)
      errors.category = 'category is required'
    if(!domain)
    errors.domain = 'domain is required'

    return errors;
  }


  const doSubmit = async ()=>{
    try {
      await createPost(user.email,title,description,costEstimate,category,department,domain)
      // navigate('/')email
      window.alert('post is added')
      window.location=('/myposts')
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
    setErrors(errors)
    if((errors.title || errors.department  || errors.category || errors.costEstimate || errors.department || errors.domain )){
      console.log('crror occured');
    }
    else{
      doSubmit();
    }
    setErrors(errors)
  }

  const titleChange =e =>{
    const description =e.target.value
    setTitle(description)
  }
  const descriptionChange =e =>{
    const description =e.target.value
    setDescription(description)
  }

  const departChange=e =>{
    const description =e.target.value
    setDepartment(description)
  }

  const costChange=e =>{
    const description =e.target.value
    setCostEstimate(description)
  }

  const categoryChange=e=>{
    const description  = e.target.value
    setCategory(description)
  }

  const domainChange=e=>{
    const description  = e.target.value
    setDomain(description)
  }

  return (
    <React.Fragment>
        <form className='mb-3' style={{ "maxWidth": "500px" }} onSubmit={handleSubmit}>
        <div>
          <label className='form-label'><h4>Title</h4></label>
          <input className='form-control' type="text" placeholder='Title'  value={title} onChange={titleChange} />
          {errors.title && <div className='alert alert-danger'>{errors.title}</div>}

        </div>
        <div>
        <label className='form-label'><h4>Cost Estimate</h4></label>
        <input className='form-control' type="number" placeholder='cost' value={costEstimate} onChange={costChange}/>
        {errors.costEstimate && <div className='alert alert-danger'>{errors.costEstimate}</div>}

        </div>
        <div>
        <label className='form-label'><h4>domain</h4></label>
        <input className='form-control' type="text" placeholder='about' value={domain} onChange={domainChange} />
        {errors.domain && <div className='alert alert-danger'>{errors.domain}</div>}
        </div>
        <div>
        <label className='form-label'><h4>description</h4></label>
        <input className='form-control' type="text" placeholder='about' value={description} onChange={descriptionChange} />
        {errors.description && <div className='alert alert-danger'>{errors.description}</div>}
        </div>
        <div>
            <label className='form-label'><h4>category</h4></label>
            <select className='form-select' value={category} onChange={categoryChange}>
              <option value=''>......</option>
              <option value='project'>Project</option>
              <option value='startUp'>Start Up</option>
            </select>
            {errors.category && <div className='alert alert-danger'>{errors.category}</div>}

        </div>
        <div>
            <label className='form-label'><h4>Department</h4></label>
            <select className='form-select' value={department} onChange={departChange}>
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
          <button type="submit" className="btn btn-primary" >Submit</button>

        </form>
    </React.Fragment>
  )
}

export default CreatePost;