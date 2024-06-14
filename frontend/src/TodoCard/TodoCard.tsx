import {Todo} from "./Todo.ts";
import './TodoCard.css';

type Props = {
    todo: Todo,
}


function TodoCard(props: Props) {
    return (
        <div className="todo-card">
            {props.todo.description}
        </div>
    );
}

export default TodoCard;