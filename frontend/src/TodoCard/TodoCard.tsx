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
    return (
        <div className="todo-card">

            <input value={description} onInput={changeText}
            />
            <button onClick={deleteThisItem} className="delete-button">🗑️</button>
        </div>
    );
}

export default TodoCard;