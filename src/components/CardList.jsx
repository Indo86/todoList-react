import Button from "./Button";

function CardList(){
  return(
    <>
      <div className="card my-1">
        <div className="card-body d-flex flex-row justify-content-between align-items-center">
          <span>Belajar</span>
          <div className="button-action">
            <Button icon="bi bi-check-circle" color="btn btn-outline-success  mx-1"/>
            <Button icon="bi bi-pencil-square" color="btn btn-outline-warning mx-1"/>
            <Button icon="bi bi-trash" color="btn btn-outline-danger mx-1"/>
          </div>
        </div>
      </div>
      <div className="card my-1">
        <div className="card-body d-flex flex-row justify-content-between align-items-center ">
          Belajar
          <div className="button-action">
            <Button icon="bi bi-check-circle" color="btn btn-outline-success  mx-1"/>
            <Button icon="bi bi-pencil-square" color="btn btn-outline-warning mx-1"/>
            <Button icon="bi bi-trash" color="btn btn-outline-danger mx-1"/>
          </div>
        </div>
      </div>
      <div className="card my-1">
        <div className="card-body d-flex flex-row justify-content-between align-items-center ">
          Belajar
          <div className="button-action">
            <Button icon="bi bi-check-circle" color="btn btn-outline-success  mx-1"/>
            <Button icon="bi bi-pencil-square" color="btn btn-outline-warning mx-1"/>
            <Button icon="bi bi-trash" color="btn btn-outline-danger mx-1"/>
          </div>
        </div>
      </div>
    </>
  )
}


export default CardList;
