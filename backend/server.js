const express = require('express')
const app = express()
const cors = require('cors')
const userRouter = require('./router/student.router')
const courseRouter = require('./router/course.router')
app.use(express.json())
app.use(cors())
app.use('/users' , userRouter )
app.use('/courses' , courseRouter)


app.listen(3000 , ()=>{
    console.log("running on port 3000");
})