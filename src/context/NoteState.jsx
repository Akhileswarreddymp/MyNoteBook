
import { useState } from "react";
import NoteContext from "./noteContext";

export default function NoteState(props){
    const host = "http://127.0.0.1:8000"
    const [notes,setnotes] = useState([])

    const fetchNOtes = async()=>{
        const response = await fetch(`${host}/api/get_tickets`,{
            method : "GET",
            headers : {
                "Content-Type" : "application/json",
                "access_token" : localStorage.getItem('access_token')
            }
        }
        )
        const resp = await response.json()
        setnotes(resp)
    }

    const addNotes = async (title,description,priority)=>{
        const number = 0
        const response = await fetch(`${host}/api/raise_ticket`,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                "access_token" : localStorage.getItem('access_token')
            }, 
            body : JSON.stringify({title,description,priority,number})
        }
        )
        response.json()
        const note = {"ticket_title": title, "ticket_description": description, "priority": priority}
        setnotes([...notes,note])
    }

    const deleteNote = async(id)=>{
        const response = await fetch(`${host}/api/deleteTicket`,{
            method : "DELETE",
            headers : {
                "Content-Type" : "application/json",
                "access_token" : localStorage.getItem('access_token')
            }, 
            body : JSON.stringify({id})
        })
        response.json()
        const deleteNote = notes.filter(((note)=>{return note._id !== id}))
        setnotes(deleteNote)
    }

    const updateNote = async (id,title,description,priority)=>{
        const response = await fetch(`${host}/api/updateTicket`,{
            method : "PUT",
            headers : {
                "Content-Type" : "application/json",
                "access_token" : localStorage.getItem('access_token')
            }, 
            body : JSON.stringify({id,title,description,priority})
        }
        )
        response.json()
        let newNotes = JSON.parse(JSON.stringify(notes))
        for(let index = 0;index<newNotes.length;index++){
            const element = newNotes[index]
            if (element._id === id){
                newNotes[index].ticket_title = title
                newNotes[index].ticket_description = description
                newNotes[index].priority = priority
                break
            }
            
        }
        setnotes(newNotes)
    }

    return(
        <NoteContext.Provider value={{notes,addNotes,fetchNOtes,deleteNote,updateNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}













// {
//     _id: ObjectId('65deee5fa6567253b3ae4222'),
//     mailid: 'ak@gmail.com',
//     ticket_title: 'fgd',
//     priority: 'refds',
//     ticket_description: 'fgd',
//     ph_number: 0
//   }