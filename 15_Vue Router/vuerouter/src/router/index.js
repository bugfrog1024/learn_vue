import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import About from '@/components/About'
// import User from '@/components/User'

const Home = () => import('@/components/Home')
const HomeNews = () => import('@/components/HomeNews')
const HomeMessage = () => import('@/components/HomeMessage')
const About = () => import('@/components/About')
const User = () => import('@/components/User')
const Profile = () => import('@/components/Profile')

//1.Vue.use(插件)：安装路由插件
Vue.use(Router)

//2.创建路由实例
const router = new Router({
  //配置路由和组件之间的映射关系
  routes: [
    {
      path: '',
      //重定向
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      //配置子路由
      children: [
        {
          path: '',
          redirect: 'news'
        },
        {
          path: 'news',
          component: HomeNews
        },
        {
          path: 'message',
          component: HomeMessage
        }
      ],
      meta: {title:'主页'}
    },
    {
      path: '/about',
      component: About,
      meta: {title:'关于'}
    },
    {
      path: '/user/:userId',
      component: User,
      meta: {title:'用户'}
    },
    {
      path: '/profile',
      component: Profile,
      meta: {title:'我的'}
    }
  ],
  mode: 'history',
  linkActiveClass: 'active'
})

//全局导航
router.beforeEach((to, from, next) => {
  console.log(to.matched[0].meta.title)
  document.title = to.matched[0].meta.title
  //按VueRouter内部实现的正常流程执行下一步
  next()
})

//3.导出路由实例
export default router
