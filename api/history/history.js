// parses the request query parameter
// uses the query parameter to select a single entry from the database
// sends the retrieved entry as a response

const db = require("../../lib/db");
const escape = require("sql-template-strings");

module.exports = async (req, res) => {
  const [profile] = await db.query(escape`
    SELECT *
    FROM translationsHist
    WHERE id = ${req.query.id}
  `);
  res.status(200).json({ translation });
};
