import Mock from 'mockjs';

export const home = [
  {
    path: '/home',
    type: 'get',
    data() {
      let result = {
        type: 'success',
        data: {
        }
      };

      return result;
    }
  }
]