import Mock from 'mockjs';

import { home } from './models/home';

let data = [].concat(
  home,
)

data.forEach((res) => {
  Mock.mock(res.path, res.type, res.data);
});

export default Mock;