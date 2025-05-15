<template>
    <div class="dashboard">
      <v-card  class="mx-auto" max-width="600" outlined elevation="2 rounded-lg v-cardglass-effect">
        <v-card-text><h1>📊 Welcome to the Dashboard!</h1></v-card-text>
        <p>Here you can find resources for learning, mentorship, and internships.</p>
        <p>Choose your role to get started:</p>
        <!-- Action buttons for guests -->
        <v-row class="mt-8">
                <v-col cols="12" sm="6">
                  <v-btn
                    block
                    color="#eb9b14"
                    dark
                    large
                    router
                    to="/studentdashboard"
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
                    to="/dashboard/mentor"
                  >
                    <v-icon left>mdi-account-plus</v-icon>
                    Mentor
                  </v-btn>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-btn
                    block
                    outlined
                    color="#eb9b14"
                    large
                    router
                    to="/dashboard/jobsearcher"
                  >
                    <v-icon left>mdi-account-plus</v-icon>
                    Jobsearcher
                  </v-btn>
                </v-col>
              </v-row>
        <RouterView/>
      </v-card>
        </div>
</template>

<style scoped>
.dashboard {
    background: linear-gradient(  #eb9b14,  #da2561);
    border-radius: 30px;
    padding: 300px;
    text-align: center;
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

