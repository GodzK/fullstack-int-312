const pool = require('../db/db.js')
async function getAllcourse(skip, take, order) {
  const sortOrder = order === 'asc' ? 'ASC' : 'DESC';

  const [course] = await pool.query(
    `
      SELECT *
      FROM courses
      ORDER BY id ${sortOrder}
      LIMIT ? OFFSET ?
    `,
    [take, skip]
  );

  return course;
}
async function getCourseById(id) {
    const [rows] = await pool.query(`SELECT students.name FROM course_student inner join students on students.id=course_student.student_id   where course_id = ${id}`)
    return rows
}
async function addCourse(course_id , student_id , grade) {
  const [course] = await pool.query(
    `insert into course_student (course_id, student_id, grade) values (${course_id}, ${student_id}, ${grade})`,
  )
  return course;
}

async function deleteCourse(course_id , student_id ) {
  const [course] = await pool.query(
    `delete from course_student where course_id=${course_id} and student_id=${student_id}`,
  )
  return course;
}

module.exports = { getAllcourse ,getCourseById , addCourse , deleteCourse};
