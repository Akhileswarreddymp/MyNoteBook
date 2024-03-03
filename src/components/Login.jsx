import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login(props) {
    const [cred,setCred] = useState({email : "",password : ""})
    let navigate = useNavigate()
    const onChange = (event) => {
        setCred({ ...cred, [event.target.id]: event.target.value })
    }
    const handleLogin = async (event)=>{
        event.preventDefault()
        const response = await fetch("http://127.0.0.1:8000/api/users/login",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            }, 
            body : JSON.stringify({email : cred.email,password : cred.password})
        }
        )
        const resp = await response.json()
        console.log(resp)
        if(response.status === 200){
            localStorage.setItem('access_token',resp.access_token)
            navigate('/')
            props.alert("LoggedIn Successfully","success")
        }
        
    }
    return (
        <form onSubmit={handleLogin}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange} value={cred.email} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" onChange={onChange} value={cred.password} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}