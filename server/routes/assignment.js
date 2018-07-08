var express = require('express');
var router = express.Router();
var connection = require('../database/connection');

var getLatest = function (req, res) {
  let year = req.params.year;

  const query = `SELECT * FROM assignment WHERE academicYear=${year}  ORDER BY assignmentDate DESC,id DESC`;

  connection.query(query, function (err, result) {
    if (err) {
      console.error(err);
      return res.status(400).send(err);
    }

    return res.status(200).send(result);
  });
};

var getAssignmentById = function (req, res) {
  let id = req.params.id;

  const query = `SELECT * FROM assignment WHERE id=${id}`;

  connection.query(query, function (err, result) {
    if (err) {
      console.error(err);
      return res.status(400).send(err);
    }

    return res.status(200).send(result);
  });
};

var updateAssignmentById = function (req, res) {
  let id = req.params.id;
  const { assignmentDate, period, subject, description } = req.body;

  const query = `UPDATE assignment SET assignmentDate='${assignmentDate}', period=${period}, 
                 subject='${subject}', description='${description}' WHERE id=${id}`;

  connection.query(query, function (err, result) {
    if (err) {
      console.error(err);
      return res.status(400).send(err);
    }

    return res.status(200).send(result);
  });
}

var insertAssignment = function (req, res) {

  const { assignmentDate, period, subject, description,academicYear } = req.body;
  const query = `INSERT INTO assignment (assignmentDate,period,subject,description,academicYear) 
                 VALUES ('${assignmentDate}',${period},'${subject}','${description}',${academicYear})`;
  
  connection.query(query, function (err, result) {
    if (err) {
      console.error(err);
      return res.status(400).send(err);
    }

    return res.status(200).send(result);
  });
}

router.get('/latest/:year', getLatest);
router.get('/:id', getAssignmentById);
router.put('/:id', updateAssignmentById);
router.post('/insert',insertAssignment);

module.exports = router;