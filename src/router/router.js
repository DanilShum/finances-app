import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/components/MainPage';

Vue.use(VueRouter)

const routes = [
  {path: '/home', component: MainPage}
]

export default new VueRouter({
  mode: 'history',
  routes
})
