var express = require('express');
var router = express.Router();

var pool = require('../../db/config');
var datetimeUtils = require('../../utils/datetime/index');

/* GET home page. */
router.get('/', function (req, res, next) {
  let result = {
    type: 'success',
    data: {}
  };

  // Get type name
  let typeName = req.query.typeName ? req.query.typeName : 'allPost';

  // Define sql
  let sql = `select * from blog, author where b_type = ${typeName} and b_author_name = a_name`;

  switch (typeName) {
    case 'Life':
      typeName = 1;
      break;
    case 'Coding':
      typeName = 2;
      break;
    case 'allPost':
    default:
      sql = `select * from blog, author where b_author_name = a_name`;
  }

  // Select data into database
  pool.getConnection((err, connection) => {
    connection.query(sql, (error, results, fields) => {
      connection.release();

      if (error) {
        result.errorMsg = 'Database Error';
        result.type = 'fail';

        console.error(error);
        // Response result
        res.json(result);
        return;
      }

      // Define blog items
      let blogItems = [];

      results.forEach((blogItem) => {
        blogItems.push({
          imgSrc: blogItem.b_banner_img,
          authorInfo: {
            avatar: blogItem.a_avatar,
            author: blogItem.a_name,
          },
          blogInfo: {
            publishDate: `${datetimeUtils.monthMap[new Date(blogItem.b_id).getMonth()+1]} - ${new Date(blogItem.b_id).getDate()}`,
            publishTime: `${new Date(blogItem.b_id).getHours()} : ${new Date(blogItem.b_id).getMinutes()}`,
            blogTitle: blogItem.b_title,
            blogContent: blogItem.b_content,
            timeStamp: blogItem.b_id
          },
          reviewInfo: {
            viewNum: blogItem.b_review_num,
            isLike: false
          }
        })
      });

      result.data.blogItems = blogItems;

      // Response result
      res.json(result);
    });
  });
});

module.exports = router;