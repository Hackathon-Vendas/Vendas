import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SobremesasView from '../views/SobremesasView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
  
    {
      path: '/sobremesas',
      name: 'sobremesas',
      component: SobremesasView
    },
    
  ]
})



export default router