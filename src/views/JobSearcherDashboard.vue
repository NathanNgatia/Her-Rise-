<template>
  <v-container fluid class="jobsearcher-background">
    <v-card class="elevation-0 rounded-lg v-cardglass-effect" height="100%">
      <v-row justify="center" align="center" class="py-8">
        <v-col cols="12" md="8" class="text-center">
          <h1 class="display-1 font-weight-bold">Job Search Dashboard</h1>
          <p class="text-h6">Your gateway to exciting job opportunities!</p>
        </v-col>
      </v-row>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <h2 class="text-h4 text-center font-weight-medium mb-4">Find Your Dream Job</h2>
        <p class="text-center text-subtitle-1 mb-6">Browse through open roles and connect with companies looking for talent like you.</p>

        <v-row class="mb-4" dense>
          <v-col cols="12" sm="4">
            <v-text-field v-model="search" label="Search by job title" outlined dense></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-select
              v-model="selectedType"
              :items="jobTypes"
              label="Job Type"
              outlined dense
              clearable
            ></v-select>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field v-model="location" label="Location" outlined dense></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col
            v-for="job in filteredJobs"
            :key="job.id"
            cols="12"
            sm="6"
            md="4"
          >
            <v-card class="elevation-3 job-card" @click="openDialog(job)">
              <v-card-title class="headline">{{ job.title }}</v-card-title>
              <v-card-subtitle>{{ job.company }}</v-card-subtitle>
              <v-card-text class="text--secondary">
                <div><strong>Location:</strong> {{ job.location }}</div>
                <div><strong>Type:</strong> {{ job.type }}</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Job Details Dialog -->
        <v-dialog v-model="dialog" max-width="600">
          <v-card>
            <v-card-title class="headline">{{ selectedJob?.title }}</v-card-title>
            <v-card-subtitle>{{ selectedJob?.company }}</v-card-subtitle>
            <v-card-text>
              <p><strong>Location:</strong> {{ selectedJob?.location }}</p>
              <p><strong>Type:</strong> {{ selectedJob?.type }}</p>
              <v-divider class="my-3" />
              <p>{{ selectedJob?.description }}</p>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn text @click="dialog = false">Close</v-btn>
              <v-btn color="primary" dark @click="applyForJob">Apply Now</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'

// Mock job data (replace this with API later)
const jobs = ref([
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Tech Solutions',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build user interfaces using Vue.js and modern web tech.'
  },
  {
    id: 2,
    title: 'UX Designer',
    company: 'Designify',
    location: 'New York, NY',
    type: 'Internship',
    description: 'Assist in wireframing and user testing for mobile apps.'
  },
  {
    id: 3,
    title: 'Data Analyst',
    company: 'DataMind',
    location: 'San Francisco, CA',
    type: 'Contract',
    description: 'Work with business teams to extract insights from data.'
  }
])

const search = ref('')
const selectedType = ref('')
const location = ref('')
const dialog = ref(false)
const selectedJob = ref(null)

const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Internship', 'Remote']

const filteredJobs = computed(() => {
  return jobs.value.filter(job => {
    return (
      job.title.toLowerCase().includes(search.value.toLowerCase()) &&
      (!selectedType.value || job.type === selectedType.value) &&
      job.location.toLowerCase().includes(location.value.toLowerCase())
    )
  })
})

function openDialog(job) {
  selectedJob.value = job
  dialog.value = true
}

function applyForJob() {
  dialog.value = false
  alert('Your application has been submitted!')
}
</script>

<style scoped>
.jobsearcher-background {
  background: linear-gradient( #eb9b14,  #da2561);
  padding: 10%;
  min-height: 100vh;
}

.job-card {
  cursor: pointer;
  transition: transform 0.2s ease;
}

.job-card:hover {
  transform: translateY(-4px);
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
