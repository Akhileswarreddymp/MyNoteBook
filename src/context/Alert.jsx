export default function Alert(props){
    return(
        <div>
            <div className="alert alert-primary" role="alert">
                {props.Alert}
            </div>
        </div>
    )
}