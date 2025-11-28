var express = require('express')
const usercontroller = require("../controllers/student.controller.js") 
const router = express.Router()


router.get('/' , async (req,res)=> {
   const userData = await usercontroller.getAllStudents()
   res.json(userData)
})


module.exports = router; 