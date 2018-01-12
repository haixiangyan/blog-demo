import Mock from 'mockjs';

export const category = [
  {
    path: '/category',
    type: 'get',
    data() {
      let result = {
        type: 'success',
        data: {
          menu: [
            {
              title: "Coding",
              icon: "fa fa-laptop",
              topics: [
                {
                  name: Mock.Random.title(2, 5)
                },
                {
                  name: Mock.Random.title(2, 5)
                }
              ]
            },
            {
              title: "Life",
              icon: "fa fa-bath",
              topics: [
                {
                  name: Mock.Random.title(2, 5)
                },
                {
                  name: Mock.Random.title(2, 5)
                }
              ]
            },
          ]
        }
      };

      return result;
    }
  }
]