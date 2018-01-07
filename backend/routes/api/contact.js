var express = require('express');
var router = express.Router();

var pool = require('../../db/config');

/* GET home page. */
router.post('/', function (req, res, next) {
  let result = {
    type: 'success'
  };

  let contactForm = req.body.contactForm;

  // Define sql
  let sql = `insert into suggestion set ?`;

  // Define insertion parameters
  let insertParams = {
    's_id': new Date().getTime(),
    's_name': contactForm.name,
    's_subject': contactForm.subject,
    's_message': contactForm.message,
    's_email': contactForm.email
  }

  // Insert data into database
  pool.getConnection((err, connection) => {
    connection.query(sql, insertParams, (error, results, fields) => {
      connection.release();

      if (error) {
        result.errorMsg = 'Database Error';
        result.type = 'fail';

        console.error(error);
        // Response result
        res.json(result);
      }
    });

    // Response result
    res.json(result);
  });
});

module.exports = router;