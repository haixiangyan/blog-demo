import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home/Home';
import BlogPage from '@/components/pages/BlogPage/BlogPage';
import Blogs from '@/components/pages/Blogs/Blogs';
import About from '@/components/pages/About/About';
import Contact from '@/components/pages/Contact/Contact';
import NotFound from '@/components/pages/NotFound/NotFound';

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: Blogs,
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/blog/:authorName/:blogID',
      name: 'BlogPage',
      component: BlogPage
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
