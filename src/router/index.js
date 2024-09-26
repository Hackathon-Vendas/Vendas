import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EntradasView from '../views/EntradasView.vue'
import AlcolicasView from '../views/AlcolicasView.vue'
import NalcolicasView from '../views/NalcolicasView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/entradas',
      name: 'entradas',
      component: EntradasView
    },
    ]
      path: '/nalcolicas',
      name: 'nalcolicas',
      component: NalcolicasView
    },
    {
      path: '/alcolicas',
      name: 'alcolicas',
      component: AlcolicasView
    },
    
  ]
})



export default router
