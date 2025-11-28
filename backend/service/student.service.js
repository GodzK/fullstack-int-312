const studentRepo = require('../repository/student.repository.js')


async function getAllStudents() {
    return studentRepo.getAllStudents()
}



module.exports = {
    getAllStudents
}