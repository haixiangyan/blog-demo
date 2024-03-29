import Mock from 'mockjs';

export const blogs = [{
    path: /\/blogs[\?typeName=[A-Za-z0-9%]*]?/,
    type: 'get',
    data() {
      let result = {
        type: 'success',
        data: {
          blogItems: []
        }
      };

      let blogItems = [];

      for (let i = 1; i <= 3; i++) {
        let blogItem = {
          imgSrc: `/static/img/blogs/blog_${i}.jpg`,
          authorInfo: {
            avatar: "/static/img/utils/avatar_76.jpg",
            author: "HaixiangYan",
          },
          blogInfo: {
            publishDate: Mock.Random.date('MM - dd'),
            publishTime: Mock.Random.time('HH : mm'),
            blogTitle: Mock.Random.title(),
            blogContent: Mock.Random.paragraph(),
            blogTopic: Mock.Random.title(),
            timeStamp: new Date().getTime() + Mock.Random.natural(1, 200)
          },
          reviewInfo: {
            viewNum: Mock.Random.natural(20, 400),
            isLike: Mock.Random.boolean()
          }
        }

        blogItems.push(blogItem);
      }

      result.data.blogItems = blogItems;

      return result;
    }
  }
]
