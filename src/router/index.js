import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about-us',
      name: 'About',      
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/test',
      name: 'TestPage',
      component: () => import('../views/TestPage.vue')
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: () => import('../views/LoginPage.vue')
    },
    {
      path: '/signup',
      name: 'SignUpPage',
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/contact-us',
      name: 'Contact Us',
      component: () => import('../views/ContactUs.vue')
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: () => import('../views/WelcomePage.vue')
    },
    {
      path: '/profile',
      name: 'My Profile',
      component: () => import('../views/My Profile.vue')  
    },
  ]
})

export default router