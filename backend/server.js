const express = require('express')
const dotenv = require("dotenv")
dotenv.config()
const app = express()
const cors = require('cors')

const studentRouter = require('./router/student.router')
const courseRouter = require('./router/course.router')
app.use(express.json())

app.use(cors())
app.use('/student' , studentRouter )
app.use('/courses' , courseRouter)


app.listen(3000 , ()=>{
    console.log("running on port 3000");
})