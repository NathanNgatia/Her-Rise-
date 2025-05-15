<template>
    <v-main>
      <v-container fluid fill-height class="signup-background">
        <v-row justify="center">
          <v-col cols="12" sm="8" md="6" lg="4">
            <v-card elevation="10" class="pa-6 rounded-lg v-cardglass-effect">
              <v-form @submit.prevent="register" ref="form">
                <div class="text-center mb-6">
                  <h1 class="text-h4 font-weight-bold teal--text text--darken-2">
                    Join HerRise
                  </h1>
                  <p class="text-subtitle-1 mt-2">
                    Create your account to start your career journey
                  </p>
                </div>
  
                <v-alert v-if="errorMessage" type="error" class="mb-4">{{ errorMessage }}</v-alert>
  
                <v-text-field
                  v-model="name"
                  label="Full Name"
                  prepend-inner-icon="mdi-account"
                  :rules="[(v) => !!v || 'Name is required']"
                  required
                  outlined
                  dense
                ></v-text-field>
  
                <v-text-field
                  v-model="email"
                  label="Email"
                  prepend-inner-icon="mdi-email"
                  :rules="[
                    (v) => !!v || 'Email is required',
                    (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
                  ]"
                  required
                  outlined
                  dense
                ></v-text-field>
  
                <v-text-field
                  v-model="password"
                  label="Password"
                  prepend-inner-icon="mdi-lock"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  @click:append="showPassword = !showPassword"
                  :rules="[
                    (v) => !!v || 'Password is required',
                    (v) => v.length >= 8 || 'Password must be at least 8 characters',
                  ]"
                  required
                  outlined
                  dense
                ></v-text-field>
  
                <v-text-field
                  v-model="password_confirmation"
                  label="Confirm Password"
                  prepend-inner-icon="mdi-lock-check"
                  :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showConfirmPassword ? 'text' : 'password'"
                  @click:append="showConfirmPassword = !showConfirmPassword"
                  :rules="[
                    (v) => !!v || 'Please confirm your password',
                    (v) => v === password || 'Passwords must match',
                  ]"
                  required
                  outlined
                  dense
                ></v-text-field>

                <v-select
                  v-model="selectedRoleId"
                  :items="roles"
                  item-title="text"
                  item-value="id"
                  label="Select Role"
                  prepend-inner-icon="mdi-account-circle"
                  :rules="[v => !!v || 'Role is required']"
                  required
                  outlined
                  dense
                ></v-select>
  
  
                <v-btn
                  block
                  color="teal darken-2"
                  dark
                  class="mt-4"
                  large
                  type="submit"
                  :loading="loading"
                >
                  Sign Up
                </v-btn>
  
                <div class="text-center mt-6">
                  <p>
                    Already have an account?
                    <router-link to="/login" class="teal--text text--darken-2 font-weight-medium"
                      >Log In</router-link
                    >
                  </p>
                </div>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <router-link/>
  </template>
  
  <script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import api from '../services/api.js'

const router = useRouter()

const form = ref(null)
const name = ref('')
const email = ref('')
const password = ref('')
const password_confirmation = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const selectedRoleId = ref(null)
const loading = ref(false)
const errorMessage = ref('')
const roles = ref([])

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

const getRoles = async () => {
  try {
    const response = await api.get(`Role`)
    roles.value = response.data?.map(role => ({
      text: role.name,
      id: role.id
    }))
    console.log('Roles:', response.data)
  } catch (error) {
    console.error('Error fetching roles:', error)
  }
}

onMounted(() => {
  getRoles()
})

const register = async () => {
  const isValid = form.value.validate()
  if (!isValid) return

  loading.value = true
  errorMessage.value = ''

  const formData = new FormData()
  formData.append('name', name.value)
  formData.append('email', email.value)
  formData.append('password', password.value)
  formData.append('password_confirmation', password_confirmation.value)
  formData.append('role_id', selectedRoleId.value)

  try {
    const response = await axios.post(`${API_URL}/register`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    localStorage.setItem('auth-token', response.data.token)
    localStorage.setItem('user', JSON.stringify(response.data.user))

    const roleName = response.data.user.role?.name?.toLowerCase()

    switch (roleName) {
      case 'Students':
        router.push('/studentdashboard')
        break
      case 'mentor':
        router.push('/dashboard/advisor')
        break
      case 'job seeker':
        router.push('/dashboard/jobsearcher')
        break
      case 'admin':
        router.push('/dashboard/admin')
        break
      default:
        router.push('/dashboard')
    }
  } catch (error) {
    console.error('Registration error:', error)
    if (error.response?.data?.errors) {
      const firstError = Object.values(error.response.data.errors)[0]
      errorMessage.value = firstError[0]
    } else {
      errorMessage.value = error.response?.data?.message || 'Registration failed. Please try again.'
    }
  } finally {
    loading.value = false
  }
}
</script>

  
  <style scoped>
  .signup-background {
    background: linear-gradient( #eb9b14, #da2561);
    min-height: 100vh;
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
  