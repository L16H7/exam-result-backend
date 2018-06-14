var express = require('express');
var router = express.Router();
var connection = require('../database/connection');

var getLatest = function (req, res) {
  const query = 'SELECT * FROM `curriculum` ORDER BY curriculumDate DESC';
  connection.query(query, function (err, result) {
    if (err) {
      console.error(err);
      return res.status(400).send(err);
    }

    return res.status(200).send(result);
  });
};

router.get('/latest', getLatest);

module.exports = router;