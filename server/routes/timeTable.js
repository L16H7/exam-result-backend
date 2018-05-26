var express = require('express');
var router = express.Router();
var connection = require('../database/connection');


var getTimeTableData = function(req, res) {
  let academicYear = req.params.academicYear;
  connection.query(`SELECT * FROM timeTable WHERE academicYear='${academicYear}'`, function(err, result) {
    if (err) {
      console.error(err);
      return res.status(400).send(err);
    } 

    return res.status(200).send(result);
  });
}

router.get('/:academicYear', getTimeTableData);

module.exports = router;
