const router = require("express").Router()
const Todo = require("../models/todo")

router.post("/add/todo", async(request, response) => {
    const {todo} = request.body
    const newTodo = new Todo({todo})

    newTodo.save()
    response.redirect("/")
})

.get("/delete/todo/:_id", async(request,response) => {
    const {_id} = request.params
    await Todo.deleteOne({_id})
    console.log("Deleted successfully")
    response.redirect("/")
})

.get("/edit/todo/:_id", async(request, response) => {
    const {_id} = request.params
    const data = await Todo.findById({_id})
    response.render("edit", {data})
})

.post("/update/todo/:_id", async(request, response) => {
    const checkbox = request.body.checkbox
    const {_id} = request.params
    const data = await Todo.findById({_id})
    if (checkbox) {
        await Todo.findOneAndUpdate(data._id, {completed: true})
        
    }
    
    response.redirect("/")
    console.log(data)
})


module.exports = router;