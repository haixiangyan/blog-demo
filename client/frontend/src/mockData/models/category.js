import Mock from 'mockjs';

export const category = [
  {
    path: '/category',
    type: 'get',
    data() {
      let result = {
        type: 'success',
        data: {
          navInfo: [
            {
              title: "Coding",
              subNav: [
                {
                  topic: Mock.Random.title(2, 5)
                },
                {
                  topic: Mock.Random.title(2, 5)
                }
              ]
            },
            {
              title: "Life",
              subNav: [
                {
                  topic: Mock.Random.title(2, 5)
                },
                {
                  topic: Mock.Random.title(2, 5)
                }
              ]
            }
          ]
        }
      };

      return result;
    }
  }
]