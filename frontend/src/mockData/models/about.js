import Mock from 'mockjs';

export const about = [
  {
    path: '/about',
    type: 'get',
    data() {
      let result = {
        type: 'success',
        data: {
          title: Mock.Random.title(),
          content: Mock.Random.paragraph(),
          introImg: '/static/img/about/intro.jpg'
        }
      };

      return result;
    }
  }
]