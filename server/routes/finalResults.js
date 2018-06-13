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

var getFinalResultsWithFilter = function(req, res) {

  let name;
  if(req.params.name=='@'){
    name = '';
  }else{
    name = req.params.name;
  }
  let rollNo;
  if(req.params.rollNo=='@'){
    rollNo = '';
  }else{
    rollNo = req.params.rollNo;
  }
  
  let eduYear;
  if(req.params.eduYear=='@'){
    eduYear = '';
  }else{
    eduYear = req.params.eduYear;
  }
  let academicYear;
  if(req.params.academicYear=='@'){
    academicYear = '';
  }else{
    academicYear = req.params.academicYear;
  }
  connection.query(`SELECT * FROM finalresult WHERE
                  name LIKE '%${name}%' AND rollNo LIKE '%${rollNo}%' AND
                  eduYear LIKE '%${eduYear}%' AND academicYear LIKE '%${academicYear}%'`, function(err, result) {
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
  connection.query(`INSERT INTO finalresult SET ?`, req.body, function(err, result) {
    if (err) {
      console.error(err);
      return res.status(500).send();
    }
    return res.status(200).send();
  });
}
router.get('/:academicYear', getFinalResults);
router.get('/filter/:name/:rollNo/:eduYear/:academicYear', getFinalResultsWithFilter);
router.post('/', postFinalResults);

module.exports = router;
