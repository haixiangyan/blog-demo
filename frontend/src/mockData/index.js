import Mock from 'mockjs';

import { about } from './models/about';
import { contact } from './models/contact';
import { subscribe } from './models/subscribe';
import { blogItems } from './models/blogItems';
import { search } from './models/search';
import { category } from './models/category';

let data = [].concat(
  about,
  contact,
  subscribe,
  blogItems,
  search,
  category
)

data.forEach((res) => {
  Mock.mock(res.path, res.type, res.data);
});

export default Mock;