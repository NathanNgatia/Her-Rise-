<template>
    <v-container fluid class="welcome-background">
      <v-row justify="center" align="center" class="pt-16">
        <v-col cols="12" sm="10" md="8" lg="6">
          <v-card class="welcome-card" elevation="10  rounded-lg v-cardglass-effect" >
            <!-- Welcome header -->
            <v-card-title class="text-center teal darken-2 white--text py-4">
              <h1 class="text-h3 font-weight-bold w-100">WELCOME TO Her Rise</h1>
            </v-card-title>
            
            <!-- User profile section -->
            <v-card-text v-if="isAuthenticated" class="text-center py-8">
              <v-avatar size="150" class="mb-4">
                <v-img
                  :src="userPhotoUrl"
                  alt="User Photo"
                  cover
                ></v-img>
              </v-avatar>
              
              <div class="text-uppercase text-h4 font-weight-bold my-2">
                {{ userName }}
              </div>
              
              <div class="text-uppercase text-h6 font-weight-medium grey--text text--darken-1 mb-2">
                {{ userEmail }}
              </div>
              
              <div class="text-uppercase text-body-1 teal--text text--darken-2 font-weight-medium">
                {{ userRole }}
              </div>
              
              <v-divider class="my-6"></v-divider>
              
              <!-- Welcome message -->
              <p class="text-body-1 text-center mx-auto" style="max-width: 80%;">
                Thank you for joining Her Rise. We're excited to have you on board!
              </p>
            </v-card-text>
            
            <!-- Guest view -->
            <v-card-text v-else class="text-center py-8">
              <v-avatar size="150" class="mb-4">
                <v-img
                  src="/coco-o1e87ODPgJA-unsplash.jpg"
                  alt="Guest"
                  cover
                ></v-img>
              </v-avatar>
              
              <div class="text-h4 font-weight-bold my-2">
                HELLO, GUEST
              </div>
              
              <v-divider class="my-6"></v-divider>
              
              <!-- Welcome message for guests -->
              <p class="text-body-1 text-center mx-auto" style="max-width: 80%;">
                Welcome to Her Rise Foundation. Log in or register to experience our services.
              </p>
              
              <!-- Action buttons for guests -->
              <v-row class="mt-8">
                <v-col cols="12" sm="6">
                  <v-btn
                    block
                    color="#eb9b14"
                    dark
                    large
                    router
                    to="/students"
                  >
                  <v-icon left>mdi-account-plus</v-icon>
                    Students
                  </v-btn>
                </v-col>
                
                <v-col cols="12" sm="6">
                  <v-btn
                    block
                    outlined
                    color="#eb9b14"
                    large
                    router
                    to="/advisors"
                  >
                    <v-icon left>mdi-account-plus</v-icon>
                    Advisor
                  </v-btn>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-btn
                    block
                    outlined
                    color="#eb9b14"
                    large
                    router
                    to="/jobsearchers"
                  >
                    <v-icon left>mdi-account-plus</v-icon>
                    Jobsearcher
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <router-link/>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import { useAuth } from '../services/auth.service'
  
  const router = useRouter()
  const { isAuthenticated, currentUser, loadUserInfo } = useAuth()
  
  // Load user data on component mount
  onMounted(async () => {
    await loadUserInfo()
  })
  
  // Computed properties for user info
  const userName = computed(() => {
    return currentUser.value?.name || 'Guest'
  })
  
  const userEmail = computed(() => {
    return currentUser.value?.email || ''
  })
  
  const userRole = computed(() => {
    return currentUser.value?.role?.name || 'Customer'
  })
  
  const userPhotoUrl = computed(() => {
    if (currentUser.value?.user_photo) {
      return `/storage/${currentUser.value.user_photo}`
    } else {
      return 'https://picsum.photos/1920/1080?random'
    }
  })
  </script>
  
  <style scoped>
  .welcome-background {
    background: linear-gradient( #eb9b14,  #da2561);
    min-height: 100vh;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  
  .welcome-card {
    border-radius: 16px;
    overflow: hidden;
  }

  .v-cardglass-effect {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2));
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(20px);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.37);
      border: 1px solid rgba(255, 255, 255, 0.18);
      border-radius: 32px;
    }
  </style>