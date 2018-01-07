import Mock from 'mockjs';

import { about } from './models/about';
import { contact } from './models/contact';
import { subscribe } from './models/subscribe';
import { blogs } from './models/blogs';
import { blog } from './models/blog';
import { search } from './models/search';
import { category } from './models/category';

let data = [].concat(
  about,
  contact,
  subscribe,
  blog,
  blogs,
  search,
  category
)

data.forEach((res) => {
  Mock.mock(res.path, res.type, res.data);
});

export default Mock;