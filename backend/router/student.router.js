var express = require('express')
const usercontroller = require("../controllers/student.controller.js") 
const router = express.Router()


router.get('/' , usercontroller.getAllStudents)
router.get('/:studentId' , usercontroller.getStudentById)


module.exports = router; 