import Mock from 'mockjs';

export const contact = [
  {
    path: '/contact',
    type: 'post',
    data(req) {

      let body = JSON.parse(req.body);

      let result = (body.contactForm.name === 'false') ? {
        type: 'fail',
        msg: `Something wrong`
      }: {
        type: 'success'
      }

      return result;
    }
  }
]