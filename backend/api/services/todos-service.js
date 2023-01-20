import Todo from './../models/todo.js';

// POST
export const save = (newTodo) => {
    const todo = new Todo(newTodo);
    return todo.save(); // returns a promise
}

// GET
export const search = (query) => {
    const params = {...query};
    return Todo.find(params).exec(); // returns an array of promise
}

// GET by ID
export const get = (id) => {
    const todo = Todo.findById(id).exec();
    return todo;
}

// UPDATE
export const update = (updatedTodo) => {
    updatedTodo.lastModifiedDate = new Date();
    const todo = Todo.findByIdAndUpdate(updatedTodo.id,updatedTodo, {new: true}).exec();
    return todo;
}

// DELETE
export const remove = (id) => {
    const todo = Todo.findByIdAndDelete(id).exec();
    return todo;
}