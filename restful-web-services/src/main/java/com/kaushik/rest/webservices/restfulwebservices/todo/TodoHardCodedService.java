package com.kaushik.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardCodedService {

    private static List<Todo> todos = new ArrayList();
    private static int idCounter = 0;

    static {
        todos.add(new Todo(++idCounter, "gaurav", "Learn React", new Date(), false));
        todos.add(new Todo(++idCounter, "gaurav", "Learn Angular", new Date(), false));
        todos.add(new Todo(++idCounter, "gaurav", "Learn Microservices", new Date(), false));

    }

    public List<Todo> findAllTodos() {
        return todos;
    }

    public Todo save(Todo todo) {
        // to create a new to do.
        if (todo.getId() == -1 || todo.getId() == 0) {
            todo.setId(++idCounter);
            todos.add(todo);
        }
        // to update exisiting to do by deleteing it and adding new.
        else {
            deleteById(todo.getId());
            todos.add(todo);
        }
        return todo;
    }

    public Todo deleteById(long id) {
        Todo todo = findById(id);
        if (todo == null)
            return null;
        if (todos.remove(todo)) {
            return todo;
        }
        return null;
    }

    public Todo findById(long id) {
        for (Todo todo : todos) {
            if (todo.getId() == id)
                return todo;
        }
        return null;
    }
}