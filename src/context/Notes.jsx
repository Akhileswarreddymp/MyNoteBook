import { useContext, useEffect, useState, useRef } from "react"
import noteContext from "../context/noteContext"
import NotesItem from "./notesItem"
import AddNote from "./AddNote"
import { useNavigate } from "react-router-dom"

export default function Notes(props) {
    const navigate = useNavigate()
    const context = useContext(noteContext)
    const { notes, fetchNOtes, updateNote } = context
    const [note, setNote] = useState({id:"", utitle: "", udescription: "", utag: "" })
    const onChange = (event) => {
        setNote({ ...note, [event.target.id]: event.target.value })
    }
    const refClose = useRef(null)
    const handleClick = (event) => {
        updateNote(note.id,note.utitle,note.udescription,note.utag)
        props.alert("Notes Updated Successfully","success")
        refClose.current.click()
        
    }
    useEffect(() => {
        if(localStorage.getItem('access_token')){
            fetchNOtes()
        }
        else{
            navigate('/login')
        }
        // eslint-disable-next-line
    }, [])

    const ref = useRef(null)

    const updateNotes = (nowNotes) => {
        ref.current.click()
        setNote({id:nowNotes._id,utitle:nowNotes.ticket_title, udescription:nowNotes.ticket_description, utag:nowNotes.priority})
        
    }
    return (
        <>
            <AddNote alert = {props.alert} />
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Update Required Changes</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" value={note.utitle} id="utitle" name="utitle" aria-describedby="emailHelp" onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" value={note.udescription} id="udescription" name="udescription" onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Tag</label>
                                    <input type="text" className="form-control" value={note.utag} id="utag" name="utag" onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={handleClick} type="button" className="btn btn-primary">Update Notes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <h2>Your Notes</h2>
                {notes.map((notes) => {
                    return (
                        <NotesItem key={notes._id ?notes._id : notes.ticket_description } alert = {props.alert} updateNotes={updateNotes} notes={notes} />
                    )
                })}
            </div>
        </>
    )
}