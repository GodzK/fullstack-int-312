const courseRepo = require('../repository/course.repository.js');
async function getAllcourse(page, limit, order) {
  const skip = (page - 1) * limit;
  const take = limit;

  const result = await courseRepo.getAllcourse(skip, take, order);
  return result;
}

module.exports = { getAllcourse };
