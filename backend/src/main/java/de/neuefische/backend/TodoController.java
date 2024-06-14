package de.neuefische.backend;
import jakarta.validation.Valid;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
@Validated
public class TodoController {

    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping("/todo")
    public List<Todo> getTodos() {
        return todoService.allTodos();
    }

    @GetMapping("/todo/{id}")
    public Todo getTodoById(@PathVariable String id) throws TodoNotFoundException {
        return todoService.findTodoById(id);
    }

    @PostMapping("/todo")
    public Todo addTodo(@Valid @RequestBody Todo todo) {
        return todoService.saveTodo(todo);
    }

    @PutMapping("/todo/{id}")
    public Todo updateTodo(@PathVariable String id, @RequestBody Todo todo) {
        return todoService.updateTodo(id, todo);
    }

    @DeleteMapping("/todo/{id}")
    public void deleteTodo(@PathVariable String id) {
        todoService.deleteTodoById(id);
    }
}
