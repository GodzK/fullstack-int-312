var express = require('express')
const courseController = require('../controllers/course.controller.js')
var router = express.Router()


router.get('/' , courseController.getAllcourse)
router.get('/:id' , courseController.getCourseById)
router.post('/' ,courseController.addCourse)
router.delete('/' ,courseController.deleteCourse)

module.exports = router