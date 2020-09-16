// parses the request query params
// uses the query params to determine which entries are required
// requests only the required entries from the database
// queries the database to get the total records
// uses the records count to calculate pagination
// sends the retrieved entries and pagination details as a response

const db = require("../../lib/db");
const escape = require("sql-template-strings");

module.exports = async (req, res) => {
  let page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 9;
  if (page < 1) page = 1;
  const history = await db.query(escape`
      SELECT *
      FROM translationsHist
      ORDER BY id
      LIMIT ${(page - 1) * limit}, ${limit}
    `);
  const count = await db.query(escape`
      SELECT COUNT(*)
      AS histCount
      FROM translationsHist
    `);
  const { histCount } = count[0];
  const pageCount = Math.ceil(histCount / limit);
  res.status(200).json({ history, histCount, page });
};
