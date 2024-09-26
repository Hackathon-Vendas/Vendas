import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SobremesasView from '../views/SobremesasView.vue'
import AlcolicasView from '../views/AlcolicasView.vue'
import NalcolicasView from '../views/NalcolicasView.vue'
import PrincipaisView from '../views/PrincipaisView.vue'
import EntradasView from '../views/EntradasView.vue'

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

    {
      path: '/principais',
      name: 'principais',
      component: PrincipaisView
    },
  ]
})

export default router
