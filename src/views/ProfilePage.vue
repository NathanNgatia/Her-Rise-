<template>
  <v-main>
  <v-container fluid class="profile-container">
    <v-row justify="center">
      <v-col cols="12" sm="10" md="6" lg="4">
        <v-card class="profile-card" elevation="8">
          <!-- Header -->
          <v-card-title class="justify-center text-h5 font-weight-bold">
            Profile Details
          </v-card-title>

          <!-- Avatar -->
          <div class="text-center mt-3">
            <v-avatar size="100">
              <v-img :src="userphotoUrl" alt="Profile photo" cover />
            </v-avatar>
          </div>

          <!-- User Info -->
          <v-card-text class="mt-4">
            <v-row>
              <v-col cols="5" class="font-weight-medium">Username:</v-col>
              <v-col cols="7">{{ user.name || 'User' }}</v-col>
            </v-row>
            <v-divider></v-divider>

            <v-row>
              <v-col cols="5" class="font-weight-medium">Email:</v-col>
              <v-col cols="7">{{ user.email || 'User@example.com' }}</v-col>
            </v-row>
            <v-divider></v-divider>

            <v-row>
              <v-col cols="5" class="font-weight-medium">Phone:</v-col>
              <v-col cols="7">{{ user.phone || '+254 7123 456 78' }}</v-col>
            </v-row>
            <v-divider></v-divider>

          </v-card-text>

          <v-btn
              color="teal darken-2"
              class="mt-6"
              @click="$router.push('/updateProfile')"
            >
              Edit Profile
            </v-btn>
             <v-spacer></v-spacer>
            <v-btn 
            color="teal darken-2"
            class="mt-6"
            @click="$router.push('/login')"
            >
             Logout
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</v-main>
</template>

<script setup>
import { ref, onMounted, } from 'vue'
import { useAuth } from '../services/auth.service'

const { loadUserInfo, getUser } = useAuth()
const user = ref({})

onMounted(async () => {
  await loadUserInfo()
  user.value.data = getUser()
})




</script>

<style scoped>
.profile-container {
  background: linear-gradient(to bottom right, #f0f4f8, #dff6ff);
  min-height: 100vh;
  padding-top: 60px;
}

.profile-card {
  border-radius: 16px;
  padding: 24px;
  background: #fff;
}
</style>
