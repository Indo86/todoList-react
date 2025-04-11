import { useState } from "react";

function Form(props){
  const [input, setInput] = useState('');
  const handleKeyEnterDown = (event) =>{
    if(event.key === "Enter" && input.trim() !== ""){
      props.add(input)
      setInput("")
    }
  }

  return(
    <>
    <div className="mb-3 mt-4">
      <label htmlFor="todo" className="form-label">Add your list of work</label>
      <input 
      type="text"  
      className="form-control" 
      id="todo"
      value={input}
      onChange={(e) => {setInput(e.target.value)}} 
      onKeyDown={handleKeyEnterDown} 
      required/>
    </div>
    </>
  )
}

export default Form;