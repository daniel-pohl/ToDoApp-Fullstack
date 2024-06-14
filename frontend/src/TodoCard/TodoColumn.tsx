import TodoCard from "./TodoCard.tsx";
import {Todo} from "./Todo.ts";
import {TodoStatus} from "./TodoStatus.ts";
import NewTodoCard from "./NewTodoCard.tsx";

type Props = {
    status: TodoStatus,
    todos: Todo[],
    onNewTodoItemSaved: () => void;

}

function TodoColumn(props: Props) {
    return (
        <div>
            <h2>{props.status}</h2>

            {
                props.todos.map(todo => <TodoCard key={todo.id} todo={todo}/>)
            }
            {
                (props.status === "OPEN") &&
                <NewTodoCard onNewTodoItemSaved={props.onNewTodoItemSaved}/>
            }



        </div>
    );
}

export default TodoColumn;