const studentRepo = require('../repository/student.repository.js')


async function getAllStudents() {
    return studentRepo.getAllStudents()
}
async function getStudentById(id) {
    return studentRepo.getStudentById(id)
}



module.exports = {
    getAllStudents , getStudentById
}