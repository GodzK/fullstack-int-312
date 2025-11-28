const studentService = require('../service/student.service');

async function getAllStudents(){
    return studentService.getAllStudents()    
}

module.exports = {getAllStudents}