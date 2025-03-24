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
    ></v-app-bar-nav-icon>

    <v-toolbar-title class="text-mixed">
      <span class="font-weight-light">HerRise</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>
        <div>
            <v-btn to="/" color="black" dark >Home </v-btn>
            
        </div>
        <div>
            <v-btn to="/about-us" color="black" dark >About </v-btn>
            
        </div>
        <div>
            <v-btn to="/contact" color="black" dark > ContactUs </v-btn>
            
        </div>
        <div>
            <v-btn to="/profile" color="black" dark > Profile </v-btn>

        </div>
    <!-- Add logout button if authenticated -->
    <v-btn 
      v-if="isAuthenticated" 
      text 
      @click="handleLogout"
      class="ml-2"
    >
      <v-icon left>mdi-logout</v-icon>
      <span>Logout</span>
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
    default: true,
  },
})

const drawer = ref(true)
const router = useRouter()

// Use the authentication service
const { isAuthenticated, currentUser, isAdmin, logout, loadUserInfo } = useAuth()

// Load user info on component mount
onMounted(async () => {
  await loadUserInfo()
})

// Computed properties for user info
const userName = computed(() => {
  return currentUser.value ? currentUser.value.name || 'User' : 'Guest'
})

const userAvatar = computed(() => {
  return currentUser.value && currentUser.value.user_photo
    ? currentUser.value.user_photo
    : '/dea6a4e6-0b58-4479-b401-79d4e4b13ec8.jpeg'
})

// Handle logout
function handleLogout() {
  logout()
  router.push('/login')
}

// Define all possible navigation paths with required roles
const allPaths = [
  // Public paths
  { icon: 'mdi-home', text: 'Home', route: '/', public: true },
  { icon: 'mdi-magnify', text: 'Search', route: '/search', public: true },
  { icon: 'mdi-heart', text: 'About Us', route: '/about-us', public: true },
  { icon: 'mdi-mail', text: 'Contact Us', route: '/contact-us', public: true },
  { icon: 'mdi-account', text: 'My Profile', route: '/profile', public: true },

  // Authentication paths (show login when not authenticated, profile when authenticated)
  { icon: 'mdi-lock', text: 'Login', route: '/login', showWhenLoggedOut: true },


  // Admin/Backend paths
  {
    icon: 'mdi-store',
    text: 'Website Management',
    route: '/admin/womendigi',
    requiresAdmin: true,
  },
  { icon: 'mdi-map-marker', text: 'Locations', route: '/admin/locations', requiresAdmin: true },
  {
    icon: 'mdi-account-group',
    text: 'User Management',
    route: '/admin/users',
    requiresAdmin: true,
  },
]

// Filter paths based on authentication status and user role
const filteredPaths = computed(() => {
  return allPaths.filter((path) => {
    // Public paths are always visible
    if (path.public) return true

    // Paths that should only show when logged out
    if (path.showWhenLoggedOut && !isAuthenticated.value) return true

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
</style>