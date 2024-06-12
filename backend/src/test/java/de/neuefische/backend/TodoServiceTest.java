package de.neuefische.backend;


import org.junit.jupiter.api.Test;
import java.util.List;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class TodoServiceTest {

    // Mock für die Klasse erstellen
    private final TodoRepo mockTodoRepo = mock(TodoRepo.class);
    private final UuidService uuidService = mock(UuidService.class);

    @Test
    void allTodos() {

        // Mock-Verhalten für den Testfall definieren
        Todo expectedTodo = new Todo("123", "John Doe", TodoStatus.DONE);
        List<Todo> expectedTodos = List.of(expectedTodo);
        when(mockTodoRepo.findAll()).thenReturn(expectedTodos);

        // TodoService mit dem Mock erstellen
        TodoService todoService123123 = new TodoService(mockTodoRepo, uuidService);

        // Test ausführen
        List<Todo> result = todoService123123.allTodos();

        // Überprüfen, ob die Methode aufgerufen wurde
        verify(mockTodoRepo).findAll();

        // Überprüfen, ob das erwartete Ergebnis zurückgegeben wurde
        assertEquals(expectedTodos, result);

    }
    @Test
    void findTodoById() throws TodoNotFoundException {
        Todo expectedTodo = new Todo("123", "John Doe", TodoStatus.DONE);

        when(mockTodoRepo.findById(expectedTodo.getId())).thenReturn(Optional.of(expectedTodo));

        TodoService todoService123123 = new TodoService(mockTodoRepo, uuidService);

        Todo result = todoService123123.findTodoById(expectedTodo.getId());

        verify(mockTodoRepo).findById(expectedTodo.getId());

        assertEquals(expectedTodo, result);
    }
    @Test
    void findTodoByIdNotFound() {
        String todoId = "999";
        when(mockTodoRepo.findById(todoId)).thenReturn(Optional.empty());
        TodoService todoService123123 = new TodoService(mockTodoRepo, uuidService);

        // Überprüfen, ob eine Exception geworfen wird, wenn die totdo-ID nicht gefunden wird
        assertThrows(TodoNotFoundException.class, () -> todoService123123.findTodoById(todoId));

        // Überprüfen, ob die Methode findById aufgerufen wurde
        verify(mockTodoRepo, times(1)).findById(todoId);
    }


}
