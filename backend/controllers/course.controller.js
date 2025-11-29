const courseService = require("../service/course.service.js");

async function getAllcourse(req, res, next) {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const order = req.query.order === "asc" ? "asc" : "desc";

    const data = await courseService.getAllcourse(page, limit, order);
    res.json(data);

  } catch (error) {
    res.json(error);
  }
}

module.exports = { getAllcourse };
