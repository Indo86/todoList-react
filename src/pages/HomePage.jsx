import CardList from "../components/CardList";
import Form from "../components/Form";

function HomePage(){
  return(
    <>
      <div className="container d-flex flex-column align-itmes-center justify-content-center">
      <Form/>
      <CardList/>
      </div>
    </>
  )
}

export default HomePage;