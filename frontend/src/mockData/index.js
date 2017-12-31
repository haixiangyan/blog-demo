import Mock from 'mockjs';

import { aboutMe } from './models/aboutMe';

let data = [].concat(
  aboutMe
)

data.forEach((res) => {
  Mock.mock(res.path, res.type, res.data);
});

export default Mock;