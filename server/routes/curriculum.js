var express = require('express');
var router = express.Router();
var connection = require('../database/connection');

var getLatest9Entry = function (req, res) {
  const query = 'SELECT * FROM `curriculum` ORDER BY curriculumDate DESC LIMIT 9';
  connection.query(query, function (err, result) {
    if (err) {
      console.error(err);
      return res.status(400).send(err);
    }

    return res.status(200).send(result);
  });
};

router.get('/latest', getLatest9Entry);

module.exports = router;