const pool = require('../db/db.js')

async function getAllStudents() {
    const [rows] = await pool.query('SELECT * FROM students')
    return rows
}

async function getStudentById(id) {
    const [rows] = await pool.query(`SELECT * FROM course_student where student_id = ${id}`)
    return rows
}
module.exports = {getAllStudents , getStudentById}