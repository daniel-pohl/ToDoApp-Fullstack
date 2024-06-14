import {Todo} from "./Todo.ts";
import './TodoCard.css';
import axios from "axios";
import {useState} from "react";

type Props = {
    todo: Todo,
    onNewTodoItemChange: () => void,
}

function TodoCard(props: Props) {

    const [description, setDescription] = useState(props.todo.description);


    function deleteThisItem() {
        axios.delete("api/todo/" + props.todo.id)
            .then(props.onNewTodoItemChange)
    }
    function changeText(event: React.ChangeEvent<HTMLInputElement>) {
        const newDescription = event.target.value;
        setDescription(newDescription);
        axios.put("api/todo/" + props.todo.id, {
            id: props.todo.id,
            description: newDescription,
            status: props.todo.status,
        } as Todo)

    }
    function moveToRight() {
        if (props.todo.status === "OPEN") {
            axios.put("api/todo/" + props.todo.id, {
                id: props.todo.id,
                description: props.todo.description,
                status: "IN_PROGRESS",
            } as Todo)
                .then(props.onNewTodoItemChange)
        }
        if (props.todo.status === "IN_PROGRESS") {
            axios.put("api/todo/" + props.todo.id, {
                id: props.todo.id,
                description: props.todo.description,
                status: "DONE",
            } as Todo)
                .then(props.onNewTodoItemChange)
        }



    }
    return (
        <div className="todo-card">

            <input value={description} onInput={changeText}
            />
            <button onClick={deleteThisItem} className="delete-button">🗑️</button>
            {
                (props.todo.status !== "DONE") ?
                <button onClick={moveToRight} className="move-button">Move️</button> :
                    <div></div>
            }

        </div>
    );
}

export default TodoCard;