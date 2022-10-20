const express = require('express')
const mongoose = require('mongoose')
const port = 3000

const app = express()

//connect
mongoose.connect("mongodb://localhost/todo-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
})

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

//routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))




app.listen(port, () => console.log(`listening to port ${port}`))