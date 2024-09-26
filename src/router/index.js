import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EntradasView from '../views/EntradasView.vue'
<<<<<<< HEAD


=======
>>>>>>> af803c59ca55737df649d37c9c75ad11b0ba1fb9

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
<<<<<<< HEAD
      component: EntradasView
    },
=======
      component: EntradasView   
    }
>>>>>>> af803c59ca55737df649d37c9c75ad11b0ba1fb9
    
  ]
})

export default router
