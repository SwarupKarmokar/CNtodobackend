const asyncHandler = require('express-async-handler');
const Todo = require('../models/todoSchema');

// @desc: Getting all todos
// @route: GET '/'
// @access: public 
const getTodos = asyncHandler(async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
})



// @desc: Adding todo
// @route: POST '/'
// @access: public 
const addTodo = asyncHandler(async (req, res) => {
    const { text } = req.body;
    if (!text) {
        res.status(400).json({
            message: "Please add text"
        })
    }

    const todo = await Todo.create({ text })
    res.json(todo)
})



// @desc: Updating Todo
// @route: PUT '/'
// @access: public
const updateTodo = asyncHandler(async (req, res) => {
    const { _id, text } = req.body;
    await Todo.findByIdAndUpdate(_id, { text });

    res.status(201).json({
        message: "Updated Successfully"
    });
})



// @desc: Deleting Todo
// @route: DELETE '/'
// @access: public
const deleteTodo = asyncHandler(async (req, res) => {
    const { _id } = req.body;
    await Todo.findByIdAndDelete(_id);

    res.json({
        message: "Deleted Successfully"
    })
})

module.exports = { getTodos, addTodo, updateTodo, deleteTodo }