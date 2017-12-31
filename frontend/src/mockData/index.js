import Mock from 'mockjs';

import { about } from './models/about';
import { contact } from './models/contact';

let data = [].concat(
  about,
  contact
)

data.forEach((res) => {
  Mock.mock(res.path, res.type, res.data);
});

export default Mock;