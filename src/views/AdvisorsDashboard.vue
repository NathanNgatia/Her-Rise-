<template>
    <div class="dashboard">
      <h1>📘 Welcome, Advisor!</h1>
      <p>Manage mentees, share guidance, and track student progress here.</p>
    </div>
    <RouterView/>
  </template>
  
  <script>
  export default {
    name: "AdvisorDashboard"
  }
  </script>
  
  <style scoped>
  .dashboard {
    padding: 2rem;
    background: #e6ffe6;
    border-radius: 12px;
  }
  </style>
  