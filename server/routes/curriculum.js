var express = require('express');
var router = express.Router();
var connection = require('../database/connection');

var getLatest = function (req, res) {
  let year = req.params.year;

  const query = `SELECT * FROM curriculum WHERE academicYear=${year} ORDER BY curriculumDate DESC`;

  connection.query(query, function (err, result) {
    if (err) {
      console.error(err);
      return res.status(400).send(err);
    }

    return res.status(200).send(result);
  });
};

var getCurriculumById = function (req, res) {
  let id = req.params.id;

  const query = `SELECT * FROM curriculum WHERE id=${id}`;

  connection.query(query, function (err, result) {
    if (err) {
      console.error(err);
      return res.status(400).send(err);
    }

    return res.status(200).send(result);
  });
};

var updateCurriculumById = function (req, res) {
  let id = req.params.id;
  const curriculum = req.body;

  const query = `UPDATE curriculum SET description='${curriculum.description}' WHERE id=${id}`;

  connection.query(query, function (err, result) {
    if (err) {
      console.error(err);
      return res.status(400).send(err);
    }

    return res.status(200).send(result);
  });
}

router.get('/latest/:year', getLatest);
router.get('/:id', getCurriculumById);
router.put('/:id', updateCurriculumById);

module.exports = router;