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

module.exports = { getAllcourse };
