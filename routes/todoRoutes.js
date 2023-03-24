const express = require('express');
const router = express.Router();

const { getTodos, addTodo, updateTodo, deleteTodo } = require('../controllers/todoController');


router.get('/', getTodos);
router.post('/save', addTodo);
router.put('/update', updateTodo);
router.delete('/delete', deleteTodo);

module.exports = router;