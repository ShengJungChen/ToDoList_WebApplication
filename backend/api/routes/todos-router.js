import express from 'express';
import * as todosController from './../controllers/todos-controller.js';

const router = express.Router();

// setting routes
router.route('/todos')
    .post(todosController.post)
    .get(todosController.index);
    
router.route('/todos/:id')
    .get(todosController.get)
    .put(todosController.update)
    .delete(todosController.remove);

export default router;