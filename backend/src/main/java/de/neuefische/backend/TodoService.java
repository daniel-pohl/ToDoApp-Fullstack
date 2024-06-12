package de.neuefische.backend;


import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {

    private final TodoRepo todoRepository;


    public TodoService(TodoRepo todoRepository) {
        this.todoRepository = todoRepository;

    }

    public List<Todo> allTodos() {
        return todoRepository.findAll();
    }

    public Todo saveTodo(Todo todo) {

        return todoRepository.save(todo);
    }

    public Todo findTodoById(String id)  {
        return todoRepository.findById(id)
                .orElseThrow();
    }

    public Todo updateTodo(String id, Todo todo) {
        return todoRepository.findById(id).map(existingTodo -> {
            existingTodo.setId(todo.getId());
            existingTodo.setDescription(todo.getDescription());
            existingTodo.setStatus(todo.getStatus());
            return todoRepository.save(existingTodo);
        }).orElse(null);
    }
    public void deleteTodoById(String id) {
        todoRepository.deleteById(id);
    }
}

