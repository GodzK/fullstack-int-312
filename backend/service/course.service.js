const courseRepo = require('../repository/course.repository');
async function getAllcourse(page, limit, order) {
  const skip = (page - 1) * limit;
  const take = limit;

  const result = await courseRepo.getAllcourse(skip, take, order);
  return result;
}
async function getCourseById(id) {
  try{
    const result = await courseRepo.getCourseById(id)
    return result
  }
  catch(err){
    throw(err)
  }
  
}
async function addCourse(course_id , student_id , grade) {
  try{
     const result = await courseRepo.addCourse(course_id , student_id , grade)
  return result
  }
  catch(err){
    throw(err)
  }
 
}
async function deleteCourse(course_id , student_id) {
  try{
    const result = await courseRepo.deleteCourse(course_id , student_id)
    return result
  }
  catch(err){
    throw(err)
  }
}

module.exports = { getAllcourse , getCourseById , addCourse , deleteCourse};
