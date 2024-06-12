import {Todo} from "./Todo.ts";
import './TodoCard.css';

type Props = {
    todo: Todo,
}


function TodoCard(props: Props) {
    return (
        <div className="todo-card">
            {props.todo.description} (
            {props.todo.status} )
        </div>
    );
}

export default TodoCard;