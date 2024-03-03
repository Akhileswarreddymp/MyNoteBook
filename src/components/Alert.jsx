export default function Alert(props){
    return (
        <div style = {{height : "70px"}}>
        {props.alert &&<div className={`alert alert-${props.alert.value} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.value}</strong> : {props.alert.message}
      </div>}
      </div>
    )
}