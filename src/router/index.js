import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home');
const Footprint = () => import('../views/footprint/Footprint');
const Login = () => import('../views/login/Login');


//1.使用插件
Vue.use(VueRouter);
//2.定义路由
const routes=[
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/home',
    component: Home,
    meta: {
        requireAuth: true
    }
  },
  {
    path: '/footprint',
    component: Footprint,
    meta: {
        requireAuth: true
    }
  },
  {
    path: '/login',
    component: Login
  },
];
//3.创建路由实例
const router = new VueRouter({
   routes,
   mode:'history'
});
//4.导出router实例，传入到vue实例
export default router