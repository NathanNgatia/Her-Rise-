import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import MentorsDashboard from '../views/MentorsDashboard.vue' 
import JobSearcherDashboard from '../views/JobSearcherDashboard.vue'
import Login from '../views/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/login',
        name: 'Login',
        component: Login,
      },
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
        name: 'ProfilePage',
        component: () => import('../views/ProfilePage.vue')
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../views/Dashboard.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/dashboard/mentor',
        name: 'MentorsDashboard',
        component: MentorsDashboard,
        meta: { requiresAuth: true, role: 'mentor' }
      },
      {
        path: '/dashboard/jobsearcher',
        name: 'JobsearcherDashboard',
        component: JobSearcherDashboard,
        meta: { requiresAuth: true, role: 'jobsearcher' }
      },

      {
        path: '/studentdashboard',
        name: 'StudentDashboard',
        component: () => import('../views/StudentsPage.vue'),
        meta: { requiresAuth: true, role: 'Students' }

      },
      {
        path: '/ConnectwithMentors',
        name: 'ConnectwithMentors',
        component: () => import('../views/ConnectwithMentorsPage.vue'),
      },
      {
        path: '/updateProfile',
        name: 'Editprofile',
        component: () => import('../views/Editprofile.vue'),
      },
      {
        path: '/mentor/messages',
        name: 'MentorMessages',
        component: () => import('../views/MentorMessages.vue'),
        meta: { requiresAuth: true, role: 'mentor' },
      },
      
    ]
  });
  
  //Navigation Guard
  router.beforeEach((to, from, next) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('auth-token');
    const isLoggedin = !!user && !!token;
  
    //Redirect unauthenticated users trying to access protected routes
    if (to.meta.requiresAuth && !isLoggedin) {
      alert('Please log in to access this page.');
      return next({ name: 'Login' });
    }
  
    if ((to.name === 'Login' || to.name === 'SignUpPage') && isLoggedin) {
      alert('You are already logged in.');//redirect to appropriate dashboard
      const role = user?.role?.slug; 
      if (role === 'Students') return next({ name: 'StudentDashboard' });
      if (role === 'mentor') return next({ name: 'MentorsDashboard' });
      if (role === 'jobsearcher') return next({ name: 'JobsearcherDashboard' });
      return next({ name: 'Dashboard' });
    }
  
    if (to.meta.requiresAuth && to.meta.role && user?.role?.slug !== to.meta.role) {
      alert('You do not have permission to access this page.');
      return next({ name: 'Dashboard' });
    }
  
    next();
  });

export default router