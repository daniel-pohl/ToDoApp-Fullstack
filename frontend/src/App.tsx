import {Todo} from './TodoCard/Todo.ts'
import {useEffect, useState} from "react";
import axios from "axios";
import TodoColumn from "./TodoCard/TodoColumn.tsx";
import {allPossibleTodos} from "./TodoCard/TodoStatus.ts";
import './index.css';

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
    <div className="page">
        <h1>TODOS</h1>
        {
            allPossibleTodos.map(status => {
                const filteredTodos = todos.filter(todo => todo.status === status)
                return <TodoColumn status={status} todos={filteredTodos}/>
            })
        }
    </div>
  )
}

export default App
