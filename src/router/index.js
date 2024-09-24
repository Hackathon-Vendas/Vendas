import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NalcolicasView from '../views/HomeView.vue'
import AlcolicasView from '../views/HomeView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'Nalcolicas',
      component: NalcolicasView
    },
    {
      path: '/',
      name: 'Alcolicas',
      component: AlcolicasView
    },
    
  ]
})



export default router
