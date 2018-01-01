import Mock from 'mockjs';

export const subscribe = [
  {
    path: '/subscribe',
    type: 'post',
    data(req) {

      let body = JSON.parse(req.body);

      let result = (body.subscribeForm.email === 'false') ? {
        type: 'fail',
        msg: `Something wrong`
      }: {
        type: 'success'
      }

      return result;
    }
  }
]