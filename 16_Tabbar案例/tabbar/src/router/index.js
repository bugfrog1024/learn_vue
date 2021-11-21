import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../pages/home/Home')
const Category = () => import('../pages/category/Category')
const ShopCart = () => import('../pages/shopcart/ShopCart')
const Profile = () => import('../pages/profile/Profile')

//1.安装路由插件
Vue.use(Router)

//2.创建路由对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: ShopCart
  },
  {
    path: '/profile',
    component: Profile
  }
]
const router = new Router({
  routes,
  mode: 'history'
})

//3.导出路由
export default router
