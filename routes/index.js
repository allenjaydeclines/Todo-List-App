const router = require("express").Router()
const Todo = require("../models/todo")

router.get("/", async(request, response) => {
    const allTodo = await Todo.find();
    response.render("index", {todo: allTodo}) 
})

module.exports = router;