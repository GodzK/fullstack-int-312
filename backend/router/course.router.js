var express = require('express')
const courseController = require('../controllers/course.controller.js')
var router = express.Router()


router.get('/' , courseController.getAllcourse)


module.exports = router