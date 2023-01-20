import * as todosService from './../services/todos-service.js';
// import all functions from todos-service.js

const setErrorResponse = (error, response) => {
    response.status(500);
    response.json(error);
}

const setSuccessResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}

// POST
export const post = async (request, response) => {
    try {
        const payload = request.body; // extract information from the request
        const todo = await todosService.save(payload); // call service function
        setSuccessResponse(todo,response); // sets response
    } catch (error) {
        setErrorResponse(error,response);
    }
}

// GET
export const index = async (request, response) => {
    try {
        const title = request.query.title; // extracting information from the patameters
        const query = {};
        if (title) { // check if the parameter is available
            query.title = title;
        }
        const todos = await todosService.search(query); // call service function
        setSuccessResponse(todos,response); // sets response
    } catch (error) {
        setErrorResponse(error,response);
    }
}

// GET by ID
export const get = async (request, response) => {
    try {
        const id = request.params.id;
        const todo = await todosService.get(id);
        setSuccessResponse(todo,response);
    } catch (error) {
        setErrorResponse(error,response)
    }
}

// UPDATE
export const update = async (request, response) => {
    try {
        const id = request.params.id;
        const updated = {...request.body};
        updated.id = id;
        const todo = await todosService.update(updated)
        setSuccessResponse(todo,response);
    } catch (error) {
        setErrorResponse(error,response)
    }
}

// DELETE
export const remove = async (request, response) => {
    try {
        const id = request.params.id;
        const todo = await todosService.remove(id)
        setSuccessResponse({ message: `Successfully removed ${id}` }, response);
    } catch (error) {
        setErrorResponse(error,response)
    }
}