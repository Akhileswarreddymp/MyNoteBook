
import Notes from "../context/Notes.jsx";


export default function Home(props){
    
    return(
        <>
                <Notes alert={props.alert} />
        </>
        
    )
}