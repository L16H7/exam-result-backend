var express = require('express');
var router = express.Router();
var connection = require('../database/connection');


var getFinalResults = function(req, res) {
  let academicYear = req.params.academicYear;
  connection.query(`SELECT * FROM finalresult WHERE academicYear='${academicYear}'`, function(err, result) {
    if (err) {
      console.error(err);
      return res.status(400).send(err);
    } 

    return res.status(200).send(result);
  });
}

var postFinalResults = function(req, res) {
  let tableName = `year_${req.params.year}_final`;
  // console.log(req.body);
  connection.query(`INSERT INTO ${tableName} SET ?`, req.body, function(err, result) {
    if (err) {
      console.error(err);
      return res.status(500).send();
    }
    return res.status(200).send();
  });
}

router.get('/:academicYear', getFinalResults);
router.post('/:year', postFinalResults);

module.exports = router;
