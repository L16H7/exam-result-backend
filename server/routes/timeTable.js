var express = require('express');
var router = express.Router();
var connection = require('../database/connection');


var getTimeTableData = function (req, res) {
  let academicYear = req.params.academicYear;
  connection.query(`SELECT * FROM timeTable WHERE academicYear='${academicYear}'`, function (err, result) {
    if (err) {
      console.error(err);
      return res.status(400).send(err);
    }

    return res.status(200).send(result);
  });
};

var updatePeriodSubject = function (req, res) {
  let id = req.params.id;
  let period = req.params.period;
  let subject = req.params.subject;

  const query = `UPDATE timeTable SET ${period}='${subject}' WHERE id=${id}`;
  connection.query(query, function (err, result) {
    if (err) {
      console.error(err);
      return res.status(403).send(err);
    }

    return res.status(200).send(result);
  })
};

router.get('/:academicYear', getTimeTableData);
router.put('/:id/:period/:subject', updatePeriodSubject);
module.exports = router;
