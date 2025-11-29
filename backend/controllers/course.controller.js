const courseService = require("../service/course.service.js");

async function getAllcourse(req, res, next) {
  try {
    const page = Number(req.query.page) || 1;
    const limit = 10;
    const order = req.query.order === "asc" ? "asc" : "desc";

    const data = await courseService.getAllcourse(page, limit, order);
    res.json(data);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
async function getCourseById(req, res, next) {
  const id = req.params.id
  const data = await courseService.getCourseById(id)
  res.json(data)
}

async function addCourse(req,res,next) {
  try{
    const course_id = req.body.course_id
  const student_id = req.body.student_id
  const grade = req.body.grade
  const data = await courseService.addCourse(course_id , student_id , grade)
  res.json({data : "add success"})
  }
  catch(err){
   res.status(500).json({ error: err.message });
  }
  
}
async function deleteCourse(req,res,next) {
  try{
    const { course_id, student_id } = req.body;
    const data = await courseService.deleteCourse(course_id , student_id)
    res.json({status : "Delete success !!!"} , data)
  }
  catch(err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getAllcourse , getCourseById , addCourse , deleteCourse};
