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

module.exports = {getAllStudents}