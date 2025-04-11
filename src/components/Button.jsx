function Button(props){
  return(
    <>
      <button className={props.color}>
        <i className={props.icon?props.icon:"Beta"}></i>
      </button>
    </>
  )
}


export default Button;