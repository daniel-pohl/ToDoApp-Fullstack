import './NewTodoCard.css'
import {useState} from "react";
import axios from "axios";
import {Todo} from "./Todo.ts";


type Props = {
    onNewTodoItemSaved: () => void;
}

function NewTodoCard(props: Props) {

    const [text, setText]
        = useState('')

    function changetext(event: React.ChangeEvent<HTMLInputElement>) {
        setText(event.target.value)
    }


    function saveTodo() {
        setText("")
        axios.post("/api/todo", {
            description: text,
            status: "OPEN",
        } as Todo)
            .then(props.onNewTodoItemSaved)        ;
    }

    return (
        <div className="todo-card new-todo">
            <input type="text" value={text} onInput={changetext}/>
            <button onClick={saveTodo}>Save</button>

        </div>
    );
}

export default NewTodoCard;