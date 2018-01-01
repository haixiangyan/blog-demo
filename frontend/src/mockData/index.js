import Mock from 'mockjs';

import { about } from './models/about';
import { contact } from './models/contact';
import { subscribe } from './models/subscribe';
import { blogItems } from './models/blogItems';

let data = [].concat(
  about,
  contact,
  subscribe,
  blogItems
)

data.forEach((res) => {
  Mock.mock(res.path, res.type, res.data);
});

export default Mock;