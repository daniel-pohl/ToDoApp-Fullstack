import './NewTodoCard.css'
import {useState} from "react";
import axios from "axios";
import {Todo} from "./Todo.ts";


type Props = {
    onNewTodoItemChange: () => void;
}

function NewTodoCard(props: Props) {

    const [text, setText]
        = useState('')

    function changeText(event: React.ChangeEvent<HTMLInputElement>) {
        const newText = event.target.value;
        if (newText.trim() !== "") {
            setText(newText);
        }
    }


    function saveTodo() {
        setText("")
        axios.post("/api/todo", {
            description: text,
            status: "OPEN",
        } as Todo)
            .then(props.onNewTodoItemChange)        ;
    }

    return (
        <div className="todo-card new-todo">
            <input type="text" value={text} onInput={changeText}/>
            <button onClick={saveTodo}>Save</button>

        </div>
    );
}

export default NewTodoCard;