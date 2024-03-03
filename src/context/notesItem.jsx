import noteContext from "../context/noteContext"
import { useContext } from "react";
export default function NotesItem(props){
    const context = useContext(noteContext)
    const {deleteNote} = context
    const {notes,updateNotes} = props
    return(
        <div className="col-md-3 my-3">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">{notes.ticket_title}</h5>
                <p className="card-text">{notes.ticket_description}</p>
                <p className="card-text">{notes.priority?notes.priority : null }</p>
                <i className="fa-solid fa-trash mx-3" onClick={()=>{deleteNote(notes._id)
                 props.alert("Notes Deleted Successfully","success")
                }}></i>
                <i className="fa-solid fa-user-pen" onClick={()=>{updateNotes(notes)}}></i>
            </div>
            </div>
        </div>
    )   
}