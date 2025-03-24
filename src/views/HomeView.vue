<template>
    <div class="HerRise-homepage">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to HerRise</h1>
        <p>Forge a path to meet your destiny.</p>
        <v-btn class="cta-button" href="/about-us"
        >Explore our Website.</v-btn><br>  
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

</script>

<style scoped>
/* Base Styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color:black;
}

/* Hero Section */
.hero {
  height: 100vh;
  background-image: linear-gradient( #eb9b14,  #da2561), url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  text-align: center;
  margin-top: 50px;
}

.hero-content {
  max-width: 800px;
  padding: 0 20px;
}

.hero h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.cta-button {
  background-color: rgba(0, 0, 0, 0.884);
  color: white;
  border: none;
  padding: 10px 40px;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 10px;
  transition: background-color 0.5s;
}

.cta-button:hover {
  background-color: #c0392b;
}
</style>