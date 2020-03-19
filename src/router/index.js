import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)
export const mapRouter = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home/')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register/')
  },
]
export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: mapRouter
})