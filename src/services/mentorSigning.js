import axios from "axios"

export const register = async (email,password,name,department,qualification,interest)=>{
    const response = await fetch('/api/mentors',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({email,password,name,department,qualification,interest})
    })
    const json = await response.json()
}

export const signin = async(email,password)=>{
    return axios.post('/api/mentors/login',{email,password})
        .then((response)=>{
            console.log(response.data)
            localStorage.setItem('token',response.data)
        })
}