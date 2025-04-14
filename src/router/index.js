import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import StudentsDashboard from '../views/StudentsDashboard.vue'
import AdvisorsDashboard from '../views/AdvisorsDashboard.vue'
import JobSearcherDashboard from '../views/JobSearcherDashboard.vue'

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
      component: AboutView
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
      component: () => import('../views/Contact Us.vue')
    },
    {
      path: '/profile',
      name: 'Welcome',
      component: () => import('../views/WelcomePage.vue')
    },
    {
      path: '/studentsDashboard',
      name: 'Students',
      component:StudentsDashboard
    },
    {
      path: '/advisorsDashboard',
      name: 'Advisors',
      component: AdvisorsDashboard
    },
    {
      path: '/jobsearchersDashboard',
      name: 'Jobsearcher',
      component: JobSearcherDashboard
    },
  ]
})

export default router