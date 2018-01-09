var express = require('express');
var router = express.Router();

var pool = require('../../db/config');
var datetimeUtils = require('../../utils/datetime/index');

/* GET home page. */
router.get('/', function (req, res, next) {
  let result = {
    type: 'success',
    data: {
      navInfo: []
    }
  };

  // Define sql
  let topicSql = `select * from topic`;
  let typeSql = `select distinct t_type from topic`;

  // Select data into database
  pool.getConnection((err, connection) => {
    // get blog types
    connection.query(typeSql, (error, results, fields) => {
      if (error) {
        result.errorMsg = 'Database Error';
        result.type = 'fail';

        console.error(error);
        // Response result
        res.json(result);
        return;
      }

      // Get type and initialize navInfo array
      results.forEach(type => {
        let typeItem = {
          title: type.t_type,
          subNav: []
        };

        result.data.navInfo.push(typeItem);
      });

      // get topic
      connection.query(topicSql, (error, results, fields) => {
        connection.release();
  
        if (error) {
          result.errorMsg = 'Database Error';
          result.type = 'fail';
  
          console.error(error);
          // Response result
          res.json(result);
          return;
        }

        // Iterate database results
        results.forEach(topic => {
          // push topic item to related type
          result.data.navInfo.forEach(navInfoItem => {
            if(navInfoItem.title === topic.t_type) {
              navInfoItem.subNav.push({
                topic: topic.t_name
              });
            }
          })
        });
  
        // Response result
        res.json(result);
      });
    })
  });
});

module.exports = router;