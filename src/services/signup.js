import axios from "axios"
export const register = async (email,password,name,department)=>{
    const response = await fetch('/api/students',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({email,password,name,department})
    })
    const json = await response.json()
}

export const checkMail= async (email)=>{
    const response = await fetch('/api/students')
    const json = await response.json()
    // console.log(Object.values(json));
    let obj = json.find(o => o.email === email);
    console.log(obj);
    return (obj === undefined) ? true :false
}


export const signin = async(email,password)=>{
    return axios.post('/api/students/login',{email,password})
        .then((response)=>{
            console.log(response.data)
            localStorage.setItem('token',response.data)
        })
}


export const createPost = async (email,title,description,costEstimate,category,department,domain)=>{
    return axios.post('/api/posts',{email,title,costEstimate,description,category,department,domain})
        .then((response)=>{
            console.log(response.data);
        })
}