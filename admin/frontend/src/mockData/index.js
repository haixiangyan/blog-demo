import Mock from 'mockjs';

import { category } from './models/category';

let data = [].concat(
  category,
)

data.forEach((res) => {
  Mock.mock(res.path, res.type, res.data);
});

export default Mock;