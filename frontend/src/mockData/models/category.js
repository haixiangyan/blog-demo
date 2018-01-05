import Mock from 'mockjs';

export const category = [
  {
    path: '/blogCategory',
    type: 'get',
    data() {

      let result = {
        type: 'success',
        data: {
          navInfo: [
            {
              title: "All Post",
              subNav: [
              ]
            },
            {
              title: "Coding",
              subNav: [
                {
                  title: "Front end blogs",
                  link: "/"
                },
                {
                  title: "Back end blogs",
                  link: "/"
                }
              ]
            },
            {
              title: "Life",
              subNav: [
                {
                  title: "Life in China",
                  link: "/"
                },
                {
                  title: "Life in UCI",
                  link: "/"
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