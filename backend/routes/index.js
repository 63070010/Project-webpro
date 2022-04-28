const express = require("express");
const pool = require("../config");

router = express.Router();

router.get("/", async function (req, res, next) {
  try {
    const search = req.query.search || ''
    let sql = 'SELECT a.*, b.file_path, c.penname FROM book AS a LEFT JOIN (SELECT * FROM images WHERE cover=1) AS b ON a.id = b.book_id LEFT JOIN (SELECT * FROM author ) AS c on a.user_id = c.user_id;'
    let cond = []

    if (search.length > 0) {
      sql = 'SELECT a.*, b.file_path FROM book AS a LEFT JOIN (SELECT * FROM images WHERE cover=1) AS b ON a.id = b.book_id LEFT JOIN (SELECT * FROM author) AS c on a.user_id = c.user_id WHERE a.title LIKE ? OR a.content LIKE ? ;'
      cond = [`%${search}%`, `%${search}%`]
    }
    const [rows, fields] = await pool.query(sql, cond);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err)
  }
});
exports.router = router;
