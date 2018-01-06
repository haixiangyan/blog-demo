import Mock from 'mockjs';

export const search = [
  {
    path: /\/search\?q=[A-Za-z0-9]*/,
    type: 'get',
    data() {

      let result = {
        type: 'success',
        data: {
          
        }
      }

      console.log('searching in mock');

      return result;
    }
  }
]