import {Todo} from './TodoCard/Todo.ts'
import TodoCard from "./TodoCard/TodoCard.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
function App() {

    //Daten abrufen über einen State
    const [todos, setTodos] = useState<Todo[]>()

    useEffect(
        ()=>{
            axios.get("/api/todo")
                .then(response =>{
                    setTodos(response.data)
                })
        },[]
    )

    if(!todos){
        return "Lade...."
    }

  return (
    <>
        <h1>TODOS</h1>
        {todos.map(todo => <TodoCard key={todo.id} todo={todo}/>)}
    </>
  )
}

export default App
