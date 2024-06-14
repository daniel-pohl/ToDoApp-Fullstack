import {Todo} from "./Todo.ts";
import './TodoCard.css';
import axios from "axios";

type Props = {
    todo: Todo,
    onNewTodoItemChange: () => void,
}


function TodoCard(props: Props) {

    function deleteThisItem() {
        axios.delete("api/todo/" + props.todo.id)
            .then(props.onNewTodoItemChange)

    }


    return (
        <div className="todo-card">
            {props.todo.description}
            <button className="delete-button" onClick={deleteThisItem}>🗑️</button>
        </div>
    );
}

export default TodoCard;