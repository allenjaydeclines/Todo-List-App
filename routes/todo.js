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

.post("/update/todo", async(request, response) => {
    const checkbox = request.body.checkbox
    if (checkbox) {
        var data = await Todo.findOneAndUpdate({_id: "6351a3e30e4e3d7f4e19a603"}, {completed: true})
        //await Todo.findOneAndUpdate({todo: 'Check thesis'}, {completed: true})
    }
    else {
        var data = await Todo.findOneAndUpdate({_id: "6351a3e30e4e3d7f4e19a603"}, {completed: false})
    }
    console.log(data)
    response.redirect("/")
})


module.exports = router;