import { useEffect, useState } from "react";
import CardList from "../components/CardList";
import Form from "../components/Form";


function HomePage(){

  const defaultTodos = [
    {id: 1, task: "Belajar", completed: false},
    {id: 2, task: "Belanja Makanan", completed: false},
    {id: 3, task: "Membaca Buku", completed: false}
  ]

  const [todos, setTodos] = useState(() =>{
    const storedTodos = localStorage.getItem('todos')
    return storedTodos ? JSON.parse(storedTodos): localStorage.setItem('todos',JSON.stringify(defaultTodos));
  })

  const [editingId, setEditingId] = useState(null)
  const [editingText, setEditingText] = useState("")
  // menyimpan data setiap ada perubahan
  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // menambahakan data todo baru
  const addTodo = (text) =>{
    const newTodo = {
      id: Date.now(),
      task: text,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id) =>{
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleCompleted = (id) =>{
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed}: todo))
  }

  const startEditing = (currentId, currentTask) =>{
    setEditingId(currentId)
    setEditingText(currentTask)
  }

  const saveEdit = (id) =>{
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, task: editingText} : todo
    ));
    setEditingId(null)
    setEditingText("");
  }

  const cancelEdit = () =>{
    setEditingId(null)
    setEditingText("")
  }

  return(
    <>
      <div className="container d-flex flex-column align-itmes-center justify-content-center">
      <Form add={addTodo}/>
      <CardList 
      todos={todos}
      delete={deleteTodo} 
      toggleCompleted = {toggleCompleted}
      editingText = {editingText}
      setEditingText = {setEditingText}
      editingId = {editingId}
      setEditingId  = {setEditingId}
      saveEdit={saveEdit}
      cancelEdit = {cancelEdit}
      startEditing = {startEditing}
      />
      </div>
    </>
  )
}

export default HomePage;