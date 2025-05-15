<template>
  <div class="dashboard">
    <h1>📘 Welcome, Advisor!</h1>
    <p>Manage mentees, share guidance, and track student progress here.</p>

    <v-card class="mx-auto" max-width="400" elevation="8 rounded-lg v-cardglass-effect">
      <v-card-title class="text-h5">My Profile</v-card-title>
      <v-list>
        <v-list-item-group v-for="mentee in mentees" :key="mentee.id">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{ mentee.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ mentee.email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <div
        v-for="mentor in mentors"
        :key="mentor.id"
        class="bg-white shadow-lg rounded-2xl p-5 flex flex-col items-center text-center"
      >
        <img :src="mentor.avatar" class="w-24 h-24 rounded-full mb-4" />
        <h2 class="text-xl font-semibold">{{ mentor.name }}</h2>
        <p class="text-gray-500 text-sm mb-2">{{ mentor.expertise }}</p>
        <p class="text-sm text-gray-600 mb-4">{{ mentor.bio }}</p>
        <div class="flex gap-2">
          <v-btn class="bg-blue-500 text-black px-4 py-2 rounded-lg" to="/mentor/messages"
            >Messages</v-btn
          >
          <button class="bg-gray-200 px-4 py-2 rounded-lg">View Profile</button>
        </div>
      </div>
      <v-card-actions>
        <v-btn color="black darken-2" @click="$router.push('/updateProfile')">Edit Profile</v-btn>
        <v-btn color="black darken-2" @click="$router.push('/')">Logout</v-btn>
      </v-card-actions>
    </v-card>
    <RouterView />
  </div>
</template>

<script>
import { ref } from 'vue'

const mentees = ref([
  { id: 1, name: 'John Doe', email: 'john doe@example.com ' },
  { id: 2, name: 'Jane Smith', email: 'janesmith@example.com	' },
])

export default {
  data() {
    return {
      mentors: [
        {
          id: 1,
          name: 'Jane Doe',
          expertise: 'Web Development',
          bio: 'Passionate about teaching HTML, CSS, JS, and Vue.',
          avatar: 'https://i.pravatar.cc/100?img=10',
        },
        // more mentors...
      ],
    }
  },
}
</script>

<style scoped>
.dashboard {
  padding: 2rem;
  padding-top: 100px;
  background: linear-gradient(#eb9b14, #da2561);
  border-radius: 12px;
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
