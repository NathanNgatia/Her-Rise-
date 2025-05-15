<template>
  <div class="mentor-messages">
    <v-container>
      <v-card elevation="8 rounded-lg v-cardglass-effect">
      <h2 class="text-h4 font-weight-medium mb-6">Student Messages</h2>

      <v-alert v-if="messages.length === 0" type="info" border="left" elevation="2">
        No messages received yet.
      </v-alert>

      <v-list two-line v-else>
        <v-list-item v-for="msg in messages" :key="msg.id" class="mb-3">
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">{{ msg.student.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ msg.content }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <span class="grey--text text--darken-1">{{
              new Date(msg.created_at).toLocaleString()
            }}</span>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card>
    </v-container>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const messages = ref([])

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

async function fetchMessages() {
  try {
    const response = await axios.get(`${API_URL}/mentor/messages`)
    messages.value = response.data.messages
  } catch (err) {
    console.error('Failed to fetch mentor messages:', err)
  }
}

onMounted(fetchMessages)
</script>

<style scoped>
.mentor-messages{
  padding: 200px;
  background: linear-gradient( #eb9b14,  #da2561);
}

.v-card{
  padding-top: 40px;
  border-width: 200px;
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