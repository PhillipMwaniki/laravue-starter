
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import moment from 'moment';
import { Form, HasError, AlertError } from 'vform';
window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

import VueProgressBar from 'vue-progressbar'
import swal from 'sweetalert2';


import VueRouter from 'vue-router';

window.swal = swal;


Vue.use(VueRouter);

const options = {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  }
}

Vue.use(VueProgressBar, options);

const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmationButton: false,
    timer: 3000
});
window.toast = toast;

let routes = [
    { path: '/dashboard', component: require('./components/Dashboard.vue') },
    { path: '/users', component: require('./components/Users.vue') },
    { path: '/profile', component: require('./components/Profile.vue') }
  ]

const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.filter('upText', function(text){
  return text.charAt(0).toUpperCase() + text.slice(1);
});

Vue.filter('myDate', function(theDate){
  return moment(theDate).format('MMMM Do YYYY');
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('profile-component', require('./components/Profile.vue'));

const app = new Vue({
    el: '#app',
    router
});
