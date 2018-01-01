import Mock from 'mockjs';

export const blogItems = [
  {
    path: '/recentBlogItems',
    type: 'get',
    data() {

      let result = {
        type: 'success',
        data: {
          recentBlogItems: []
        }
      };

      let recentBlogItems= [];

      for (let i = 1 ; i <= 3 ; i++) {
        let blogItem = {
          imgSrc: `/static/img/blogs/blog_${i}.jpg`,
          authorInfo: {
            avatar: "/static/img/utils/avatar.jpg",
            author: "Haixiang Yan",
          },
          blogInfo: {
            publishDate: Mock.Random.date('MM - dd'),
            publishTime: Mock.Random.time('HH : mm'),
            blogTitle: Mock.Random.title(),
            blogContent: Mock.Random.paragraph(),
            timeStamp: new Date()
          },
          reviewInfo: {
            viewNum: Mock.Random.natural(20, 400),
            isLike: Mock.Random.boolean()
          }
        }

        recentBlogItems.push(blogItem);
      }

      result.data.recentBlogItems = recentBlogItems;

      return result;
    }
  }
]