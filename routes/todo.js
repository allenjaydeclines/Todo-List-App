const router = require("express").Router()
const Todo = require("../models/todo")

router.post("/add/todo", (request, response) => {
    const {todo} = request.body
    const newTodo = new Todo({todo})

    newTodo.save()
    .then(() => {
        console.log("todo entered saved");
        response.redirect("/")
    })
    .catch((err) => console.log(err)) 
})

.get("/delete/todo/:_id", (request,response) => {
    const {_id} = request.params
    Todo.deleteOne({_id})
    .then(() => {
        console.log("Deleted successfully")
        response.redirect("/")
    }) 
    .catch((err) => console.log(err)) 
})


module.exports = router;