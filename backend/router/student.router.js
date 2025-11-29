var express = require('express')
const usercontroller = require("../controllers/student.controller.js") 
const router = express.Router()


router.get('/' , usercontroller.getAllStudents)


module.exports = router; 