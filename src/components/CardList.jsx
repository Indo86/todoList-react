import Button from "./Button";

function CardList(props){
  
  return(
    <>
      {props.todos.map((todo)=>{
        if(props.editingId === todo.id){
          return (
            <div className="card my-1" key={todo.id}>
              <div className="card-body d-flex flex-row justify-content-between align-items-center">
                <input
                  type="text"
                  className="form-control"
                  value={props.editingText}
                  onChange={(e) => props.setEditingText(e.target.value)}
                />
                <div className="button-action btn-group">
                  <Button
                    icon="bi bi-check"
                    color="btn btn-outline-primary"
                    action={() => props.saveEdit(todo.id)}
                  />
                  <Button
                    icon="bi bi-x-circle"
                    color="btn btn-outline-secondary"
                    action={props.cancelEdit}
                  />
                  <Button
                    icon="bi bi-trash"
                    color="btn btn-outline-danger"
                    action={() => props.delete(todo.id)}
                  />
                </div>
              </div>
            </div>
          )
          }else{
            return(
              <div className="card my-1" key={todo.id}>
              <div className="card-body d-flex flex-row justify-content-between align-items-center">
                <span style={{textDecoration: todo.completed? 'line-through': 'none'}}>
                  {todo.task}
                </span>
                <div className="button-action">
                  <Button icon="bi bi-check-circle" color="btn btn-outline-success  mx-1" action={()=> props.toggleCompleted(todo.id)}/>
                  <Button icon="bi bi-pencil-square" color="btn btn-outline-warning mx-1" action={()=>props.startEditing(todo.id, todo.task)}/>
                  <Button icon="bi bi-trash" color="btn btn-outline-danger mx-1" action={()=>props.delete(todo.id)}/>
                </div>
              </div>
            </div>
            )
          }
      })}
    </>
  )
}


export default CardList;
