import noteContext from "../context/noteContext"
import { useState,useContext } from "react";
export default function AddNote(props){
    const context = useContext(noteContext)
    const {addNotes} = context
    const [note,setNote] = useState({title : "",description : "",tag : ""})
    const onChange = (event)=>{
        setNote({...note,[event.target.id] : event.target.value})
    }
    const handleClick = (event)=>{
        event.preventDefault()
        addNotes(note.title,note.description,note.tag)
        props.alert("Notes Added Successfully","success")
    }
    return(
        <div className="container" style={{marginTop: "125px"}}>
            <h2>Add Your Notes</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" onChange={onChange} />
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                </form>
        </div>
    )
}