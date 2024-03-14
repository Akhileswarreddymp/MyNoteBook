import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SignUp(props){
    const navigate = useNavigate()
    const [note,setNote] = useState({username : "",email : "",password : ""})
    const onChange = (event)=>{
        setNote({...note,[event.target.id] : event.target.value})
    }
    const handleOnClick=()=>{
        props.alert("Please wait we are storing your details it takes few seconds, kindly check your email", "success")
    }

    const handleSignUp = async (event)=>{
        event.preventDefault()
        const response = await fetch("http://127.0.0.1:8000/api/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username : note.username,email: note.email, password: note.password })
        }
        )
        const resp = await response.json()
        console.log(resp)
        if (response.status === 200) {
            navigate('/')
            props.alert("Successfully Registred to iNoteBook", "success")
        }
        else{
            props.alert("Invalid Credentials", "danger")
        }
    }
    return(
        <div style={{marginTop: "125px"}}>
            <h2>SignUp to use iNoteBook</h2>
        <form onSubmit={handleSignUp}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">User Name</label>
                <input type="text" className="form-control" onChange={onChange} value={note.username} id="username" name="username" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" onChange={onChange} value={note.email} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" onChange={onChange} value={note.password} id="password" name="password" />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleOnClick}>Sign Up</button>
        </form>
        </div>
    )
}