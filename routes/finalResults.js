var express = require('express');
var router = express.Router();
var connection = require('../database/connection');


var getFinalResults = function(req, res) {
  let tableName = `year_${req.params.year}_final`;
  connection.query(`SELECT * FROM ${tableName}`, function(err, result) {
    if (err) {
      console.error(err);
      return res.status(400).send(err);
    } 

    return res.status(200).send(result);
  });
}

router.get('/:year', getFinalResults);

module.exports = router;
