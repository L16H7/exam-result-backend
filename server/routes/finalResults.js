var express = require('express');
var router = express.Router();
var connection = require('../database/connection');


var getFinalResultsById = function(req, res) {
  let id = req.params.id;
  connection.query(`SELECT * FROM finalresult WHERE tranId='${id}'`, function(err, result) {
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
  
  connection.query(`INSERT INTO finalresult SET ?`, req.body, function(err, result) {
    if (err) {
      console.error(err);
      return res.status(500).send();
    }
    return res.status(200).send();
  });
}
var updateFinalResultById = function (req, res) {
  let id = req.params.id;
  console.log(req.body);
  const { name, rollNo, result, academicYear,eduYear } = req.body;

  const query = `UPDATE finalresult SET name='${name}', rollNo=${rollNo}, 
                result='${result}', academicYear='${academicYear}',eduYear='${eduYear}' WHERE tranId=${id}`;

  connection.query(query, function (err, result) {
    if (err) {
      console.error(err);
      return res.status(400).send(err);
    }

    return res.status(200).send(result);
  });
}
router.get('/:id', getFinalResultsById);
router.get('/filter/:name/:rollNo/:eduYear/:academicYear', getFinalResultsWithFilter);
router.post('/insert/', postFinalResults);
router.put('/update/:id', updateFinalResultById);

module.exports = router;
