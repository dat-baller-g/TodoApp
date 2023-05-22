import express, { Router } from 'express';
import { getTodos, createTodo, deleteTodo, clearTodos } from "../controllers/todos.js"
import auth from '../middleware/auth.js';

const router = express.Router();

router.get("/:user", auth, getTodos);
router.post("/:user", auth, createTodo);
router.delete('/:id/:user', auth, deleteTodo);
router.delete("/:user", auth, clearTodos);


export default router;