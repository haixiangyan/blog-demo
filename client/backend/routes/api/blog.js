var express = require('express');
var router = express.Router();

var pool = require('../../db/config');
var datetimeUtils = require('../../utils/datetime');

/**
 * To get the information of a blog by given author name and blog ID
 */
router.get('/', function (req, res, next) {
  let result = {
    type: 'success',
    data: {blogItem: {}}
  };

  // Get author name and blog ID
  let authorName = req.query.author;
  let blogID = req.query.blogID;

  if (!authorName || !blogID) {
    result.type = 'fail';
    result.errorMsg = 'Missing parameters';
    // Response
    res.json(result);
    return;
  }

  // Define sql
  let sql = `select * from blog, author where b_id = ? and b_author_name = ? and b_author_name = a_name`;

  // Select data into database
  pool.getConnection((err, connection) => {
    connection.query(sql, [blogID, authorName], (error, results, fields) => {
      connection.release();

      // check error
      if (error) {
        result.errorMsg = 'Database Error';
        result.type = 'fail';

        console.error(error);

        // Response result
        res.json(result);
        return;
      }

      // check number of result
      if (results.length === 0) {
        result.errorMsg = `Can't find blogs with author name (${authorName}) and blogID (${blogID})`;
        result.type = 'fail';

        console.error(`Can't find blogs with author name (${authorName}) and blogID (${blogID})`);

        // Response result
        res.json(result);
        return;
      }

      // To transfer data from database to response obejct
      let resultItem = results[0];

      result.data.blogItem = {
        imgSrc: resultItem.b_banner_img,
        authorInfo: {
          avatar: resultItem.a_avatar,
          author: resultItem.a_name,
        },
        blogInfo: {
          publishDate: `${datetimeUtils.monthMap[new Date(resultItem.b_id).getMonth()+1]} - ${new Date(resultItem.b_id).getDate()}`,
          publishTime: `${new Date(resultItem.b_id).getHours()} : ${new Date(resultItem.b_id).getMinutes()}`,
          blogTitle: resultItem.b_title,
          blogContent: resultItem.b_content,
          timeStamp: resultItem.b_id
        },
        reviewInfo: {
          viewNum: resultItem.b_review_num,
          isLike: false
        }
      };

      // Response result
      res.json(result);
    });
  });
});

module.exports = router;