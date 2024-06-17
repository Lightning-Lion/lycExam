import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import EduTec from '../views/EduTec.vue'
import protut from '../views/protut.vue'
import News from '../views/News.vue'
import guanyu from '../views/guanyu.vue'
import lianxi from '../views/lianxi.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/EduTec',
    name: 'EduTec',
    component: EduTec
  },
  {
    path: '/protut',
    name: 'protut',
    component: protut
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/guanyu',
    name: 'guanyu',
    component: guanyu
  },
   {
    path: '/lianxi',
    name: 'lianxi',
    component: lianxi
  }
 
]

const router = createRouter({
  history: createWebHistory("/"),
  routes
})

export default router