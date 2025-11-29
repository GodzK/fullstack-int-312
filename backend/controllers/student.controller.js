const studentService = require('../service/student.service');

async function getAllStudents (req, res, next){
    try{
        const data = await studentService.getAllStudents()
        res.json(data)
    }
    catch(err){
        res.json(err)
    }
    
}

async function getStudentById (req, res, next){
    const {studentId} = req.params
    console.log(studentId);
    try{
        const data = await studentService.getStudentById(studentId)
        res.json(data)
    }
    catch(err){
        res.json(err)
    }
    
}

module.exports = {getAllStudents , getStudentById}