import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home/Home';
import About from '@/components/pages/About/About';
import Contact from '@/components/pages/Contact/Contact';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
    }
  ]
})
