// Import css files
import '@/assets/css/reset.css';
import '@/assets/css/animation.css';
import '@/assets/css/global.css';

// Import other third party libiraries
// Import awesome font
import '@/assets/libs/font-awesome-4.7.0/css/font-awesome.min.css';
// Import Animate.css
import '@/assets/libs/Animate/animate.css';

// Import mockjs
import '../mockData';

// Import axios and set it as global variable
import axios from 'axios';
import Vue from 'vue';

Object.defineProperty(Vue.prototype, '$axios', {
  value: axios
});