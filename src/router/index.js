import Vue from 'vue'
import Router from 'vue-router'

// 使用懒加载
const Home = () => import('views/home/Home');
const Cart = () => import('views/cart/Cart');
const Profile = () => import('views/profile/Profile');
const Category = () => import('views/category/Category');
const Detail = () => import('views/detail/Detail');

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
  },
  {
    path: '/detail/:id',
    component:Detail
  }
];

export default new Router({
  routes,
  mode:'history'
});