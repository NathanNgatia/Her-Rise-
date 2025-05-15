<template>
    <v-container class="updateProfile-container" fluid>
      <v-row justify="center">
        <v-col cols="12" sm="10" md="6" lg="4">
          <v-card class="pa-6">
            <!-- Back arrow -->
            <v-btn icon @click="$router.back()" class="mb-4">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
  
            <!-- Title -->
            <h2 class="text-center font-weight-bold text-h5 mb-6">Edit Profile</h2>
  
            <!-- Profile picture with camera icon -->
            <div class="text-center mb-6 position-relative">
              <v-avatar size="120" class="mx-auto">
                <v-img :src="userPhotoPreview || userPhotoUrl"></v-img>
              </v-avatar>
  
              <v-btn
                small
                icon
                color="teal"
                class="camera-icon"
                @click="triggerFileInput"
              >
                <v-icon>mdi-camera</v-icon>
              </v-btn>
  
              <input
                type="file"
                ref="fileInput"
                accept="image/*"
                class="d-none"
                @change="handlePhotoUpload"
              />
            </div>
  
            <!-- Input fields -->
            <v-text-field v-model="form.name" label="Username" outlined dense />
            <v-text-field v-model="form.email" label="Email" outlined dense />
            <v-text-field v-model="form.phone" label="Phone" outlined dense />
  
            <!-- Save Button -->
            <v-btn
              block
              color="teal darken-2"
              dark
              class="mt-6"
              @click="updateProfile"
            >
              Save Changes
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref, reactive, onMounted, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { useAuth } from '../services/auth.service'
  
  const router = useRouter()
  const { loadUserInfo, getUser } = useAuth()
  
  const currentUser = ref(null)
  const userPhotoPreview = ref(null)
  
  const fileInput = ref(null)
  const triggerFileInput = () => fileInput.value?.click()
  
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        userPhotoPreview.value = reader.result
      }
      reader.readAsDataURL(file)
    }
  }
  
  onMounted(async () => {
    await loadUserInfo()
    currentUser.value = getUser()
    Object.assign(form, {
      name: currentUser.value?.name || '',
      email: currentUser.value?.email || '',
      phone: currentUser.value?.phone || '',
    })
  })
  
  const userPhotoUrl = computed(() =>
    currentUser.value?.user_photo
      ? `/storage/${currentUser.value.user_photo}`
      : '/UserProfilePhoto.jpeg'
  )

  const updateProfile = async () => {
    try{
    const formData = new FormData()
    formData.append('name', form.name)
    formData.append('email', form.email)
    formData.append('phone', form.phone)

    if (fileInput.value.files[0]) {
      formData.append('user_photo', fileInput.value.files[0])
    }

    const response = await api.post('/updateProfile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    console.log('Profile updated:', response.data)
    router.push('/profile')
    } catch (error) {
      console.error('Error updating profile:', error)
    }
}
  
  const form = reactive({
    name: '',
    email: '',
    phone: '',
    dob: '',
    address: '',
  })
  </script>
  
  <style scoped>
  .edit-profile-container {
    min-height: 100vh;
    background: #f5f5f5;
    padding-top: 40px;
  }
  .camera-icon {
    position: absolute;
    bottom: 5px;
    right: calc(50% - 60px); /* centers it under avatar */
    background: white;
  }
  </style>
  