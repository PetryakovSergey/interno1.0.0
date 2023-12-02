import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue')
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('../views/ProjectView.vue')
  },
  {
    path: '/blog/details',
    name: 'blog details',
    component: () => import('../views/BlogDetailsView.vue')
  },
  {
    path: '/project/details',
    name: 'project details',
    component: () => import('../views/ProjectDetailsView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not found',
    component: () => import('../views/NotFoundView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
