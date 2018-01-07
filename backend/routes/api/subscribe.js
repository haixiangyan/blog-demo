var express = require('express');
var router = express.Router();

var pool = require('../../db/config');

/* GET home page. */
router.post('/', function (req, res, next) {
  let result = {
    type: 'success'
  };

  // Get the subscribed email
  let email = req.body.subscribeForm.email;

  // Define sql
  let sql = `insert into subscription set ?`;

  // Define insertion parameters
  let insertParams = {
    's_id': new Date().getTime(),
    's_email': email
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