import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('views/home/Home');
const Cart = () => import('views/cart/Cart');
const Profile = () => import('views/profile/Profile');
const Category = () => import('views/category/Category');

Vue.use(Router);

const originalReplace = Router.prototype.replace
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '',
    redirect:'/home'
  },
  {
    path: '/home',
    component:Home
  },
  {
    path: '/shopcart',
    component:Cart
  },
  {
    path: '/profile',
    component:Profile
  },
  {
    path: '/category',
    component:Category
  }
];

export default new Router({
  routes,
  mode:'history'
});