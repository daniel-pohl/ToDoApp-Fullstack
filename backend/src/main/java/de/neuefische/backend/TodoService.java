package de.neuefische.backend;


import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {

    private final TodoRepo todoRepository;

    private final UuidService uuidService;

    public TodoService(TodoRepo todoRepository, UuidService uuidService) {
        this.todoRepository = todoRepository;
        this.uuidService = uuidService;
    }

    public List<Todo> allTodos() {
        return todoRepository.findAll();
    }

    public Todo saveTodo(Todo todo) {
        todo.setId(uuidService.generateId());
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

