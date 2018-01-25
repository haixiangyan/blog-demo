import Mock from 'mockjs';

export const blog = [{
  path: /\/blog\?author=[A-Za-z0-9%]*&blogID=[A-Za-z0-9]*/,
  type: 'get',
  data() {
    let result = {
      type: 'success',
      data: {}
    };

    let blogItem = {
      imgSrc: `/static/img/blogs/blog_${Mock.Random.natural(1, 3)}.jpg`,
      authorInfo: {
        avatar: "/static/img/utils/avatar_76.jpg",
        author: "HaixiangYan",
      },
      blogInfo: {
        publishDate: Mock.Random.date('MM - dd'),
        publishTime: Mock.Random.time('HH : mm'),
        blogTitle: Mock.Random.title(),
        blogTopic: Mock.Random.title(),
        blogContent: Mock.Random.paragraph(),
        timeStamp: new Date().getTime() + Mock.Random.natural(1, 200)
      },
      reviewInfo: {
        viewNum: Mock.Random.natural(20, 400),
        isLike: Mock.Random.boolean()
      }
    }

    result.data.blogItem = blogItem;

    return result;
  }
}]
