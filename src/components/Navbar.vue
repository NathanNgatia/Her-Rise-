<template>
  <v-navigation-drawer
    v-model="drawer"
    style="background: linear-gradient( #eb9b14, #da2561);"
    light
    app
    v-if="isAuthenticated || !hideForUnauthenticated"
  >
  
    <v-layout column align-center>
      <v-flex class="my-2 mx-auto text-center">
        <v-avatar size="130">
          <v-img :src="userAvatar"></v-img>
        </v-avatar>
        <p class="white--text subheading mt-1 text-center">{{ userName }}</p>
      </v-flex>
    </v-layout>
    <v-list flat>
      <v-list-item
        v-for="path in filteredPaths"
        :key="path.text"
        router
        :to="path.route"
        active-class="border"
      >
        <v-list-item-content class="d-flex align-center">
          <v-icon v-if="path.icon">{{ path.icon }}</v-icon>
          <span v-else v-html="path.customIcon"></span>
          <span class="ml-2">{{ path.text }}</span>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar color="#eb9b14" light app>
    <v-app-bar-nav-icon 
      @click.stop="drawer = !drawer"
      v-if="isAuthenticated || !hideForUnauthenticated"
    ></v-app-bar-nav-icon>

    <v-toolbar-title class="text-mixed" text-font="sans-serif">
      <span color="black" dark>HerRise</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>
        <div>
          <v-icon left>mdi-home</v-icon>
            <v-btn to="/" color="black" dark >Home </v-btn>
            
        </div>
        <div>
            <v-icon left>mdi-information</v-icon>
            <v-btn to="/about-us" color="black" dark >About </v-btn>
            
        </div>
        <div>
            <v-icon left>mdi-phone</v-icon>
            <v-btn to="/contact-us" color="black" dark > Contact Us </v-btn>
            
        </div>
        <div>
          <a>
          <v-icon left>mdi-account</v-icon>
            <v-btn to="/profile" color="black" dark 
            v-if="isAuthenticated || !hideForUnauthenticated"
            >
             Profile </v-btn>
          </a>
        </div>
        <v-spacer></v-spacer>
    <v-menu offset-y>  
      <template v-slot:activator="{ props }">
        <v-btn text v-bind="props">
          <v-icon left>mdi-chevron-down</v-icon>
          <span>Accounts</span>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="path in filteredPaths"
          :key="path.text"
          router
          :to="path.route"
          active-class="border"
        >
          <v-list-item-title>{{ path.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- Add logout button if authenticated -->
    <v-btn 
     v-if="isAuthenticated || !hideForUnauthenticated"
      text 
      @click="handleLogout"
      class="ml-2"
    >
      <v-icon left>mdi-logout</v-icon>
      Logout
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useAuth } from '../services/auth.service'
import { useRouter } from 'vue-router'

const props = defineProps({
  hideForUnauthenticated: {
    type: Boolean,
    default: false,
  },
})

const drawer = ref(false)
const router = useRouter()

// Use the authentication service
const { isAuthenticated, currentUser, isAdmin, logout, loadUserInfo } = useAuth()

// Load user info on component mount
onMounted(async () => {
  await loadUserInfo()
})

// Computed properties for user info
const userName = computed(() => {
  return currentUser.value ? currentUser.value.name || $user : 'Guest'
})

const userAvatar = computed(() => {
  return currentUser.value && currentUser.value.user_photo
    ? currentUser.value.user_photo
    : '/UserProfilePhoto.jpeg'
})

// Handle logout
function handleLogout() {
  logout();
  router.push('/login');
  alert ('You have been logged out successfully!')
}

// Define all possible navigation paths with required roles
const allPaths = [
  // Public paths
  { icon: 'mdi-account', text: 'Dashboard', route:'/dashboard', public: true, showWhenLoggedIn: true, requiresAuth: true },
  

  // Authentication paths (show login when not authenticated, profile when authenticated)
  { icon: 'mdi-account', text: 'Login', route: '/login', public: true, showWhenLoggedOut: true },
  { icon: 'mdi-account', route: '/profile', text: 'Profile', public: false },
  { icon: 'mdi-account', route: '/signup', text: 'Sign Up', public: true },
  

  // Admin/Backend paths
  {
    icon: 'mdi-store',
    text: 'Website Management',
    route: '/admin/herrise',
    requiresAdmin: true,
  },
  { icon: 'mdi-map-marker', text: 'Locations', route: '/admin/locations', requiresAdmin: true },
  {
    icon: 'mdi-account-group',
    text: 'User Management',
    route: '/admin/users',
    requiresAdmin: false, // Change to true if needed
  },
]

// Filter paths based on authentication status and user role
const filteredPaths = computed(() => {
  return allPaths.filter((path) => {
    // Public paths are visible
    if (path.public) return true 


    // Paths that require authentication
    if (path.requiresAuth && isAuthenticated.value) {
      // Admin-only paths
      if (path.requiresAdmin) {
        return isAdmin.value
      }
      return true
    }


    return false
  })
})
</script>

<style scoped>
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Centering the logo vertically */
}

.logo {
  width: 200px; /* Responsive size */
  height: auto; /* Maintain aspect ratio */
}
.border {
  border-right: 4px solid red;
}
.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f8b400;
  color: white;
}
.icon {
  width: 24px;
  height: 24px;
}
</style>