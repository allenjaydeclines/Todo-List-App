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

.get("/delete/todo/:_id", async(request,response) => {
    const {_id} = request.params
    await Todo.deleteOne({_id})
    console.log("Deleted successfully")
    response.redirect("/")
})

.get("/edit/todo/:_id", async(request, response) => {
    const {_id} = request.params
    const data = await Todo.findById({_id})
    console.log("fetch successfully")
    console.log({data})
    response.render("edit", {data})
})

.post("/update/todo/", async(request, response) => {
    //const {_id} = request.params
    //await Todo.findOneAndUpdate({_id}, input)
    console.log(request.body)
})


module.exports = router;