function Button(props){
  return(
    <>
      <button className={props.color} onClick={props.action}>
        <i className={props.icon?props.icon:"Beta"}></i>
      </button>
    </>
  )
}


export default Button;