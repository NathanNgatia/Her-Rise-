<template>
  <v-container class="about-us">
    <v-row>
      <v-col cols="12">
        <h1 class="text-center text-h3 my-6 teal--text text--darken-2">About HerRise</h1>
      </v-col>
    </v-row>

    <!-- Hero Section -->
    <v-row class="hero-section mb-12">
      <v-col cols="12" md="6" class="d-flex align-center">
        <div>
          <h2 class="text-h4 mb-4 font-weight-medium">HerRise:
             Empowering Women and Children in Kenya</h2>
          <p class="text-body-1">
            HerRise is a community-driven platform that aims to empower women in tech and entrepreneurship. Our mission is to provide resources, support, and opportunities.
In the heart of Nairobi, Kenya, our founder Mr Ngatia saw the struggles women and children went through and decided to start a website whereby both women and children can both create a better future.
Four years later, HerRise thrives, with thousands of women and children benefiting from its programs. Our stories journey from struggle to success reflects the strength of community and the power of resilience. HerRise stands tall as a beacon of hope in Kenya, reminding women that they are not alone and can rise together to create a brighter future.
          </p>
          <p class="text-body-1 mt-4">
            Our passion for empowering women and children drives us to create a better world. 
 We believe that every individual deserves access to quality education, healthcare, and economic opportunities.
Our programs are designed to address the unique challenges faced by women and children in Kenya, providing them with the tools and resources needed to succeed.
          </p>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <v-img
          src="/7161cc0f-fec5-4acf-90cd-07ed3134ebcd.jpeg"
          alt="HerRise atmosphere"
          class="rounded-lg elevation-3"
          height="400"
          cover
        ></v-img>
      </v-col>
    </v-row>

    <!-- Our Values -->
    <v-row class="my-10">
      <v-col cols="12">
        <h2 class="text-h4 text-center mb-8 font-weight-medium">Our Values</h2>
      </v-col>
      <v-col cols="12" md="4">
        <v-card height="100%" class="px-4 py-6 text-center elevation-2">
          <v-icon size="x-large" color="teal darken-2" class="mb-4">mdi-heart</v-icon>
          <h3 class="text-h5 mb-3">Future Nuturing</h3>
          <p>HerRise is a Kenyan initiative founded by Ngatia, who aimed to empower women and children through community support.
            We support local businesses and contribute to the communities we serve, believing that good food brings people together.
            </p>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card height="100%" class="px-4 py-6 text-center elevation-2">
          <v-icon size="x-large" color="teal darken-2" class="mb-4">mdi-home</v-icon>
          <h3 class="text-h5 mb-3">Workmanship</h3>
          <p> The platform provides resources and mentorship, fostering a sense of belonging and collaboration among women from diverse backgrounds.
            </p>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card height="100%" class="px-4 py-6 text-center elevation-2">
          <v-icon size="x-large" color="teal darken-2" class="mb-4">mdi-account-group</v-icon>
          <h3 class="text-h5 mb-3">Community Focus</h3>
          <p> Core values include empowerment, community, inclusivity, integrity, and resilience, driving efforts to educate and create sustainable solutions.
            With workshops and job placement programs, HerRise has transformed thousands of lives and stands as a beacon of hope for a brighter future in Kenya.</p>
        </v-card>
      </v-col>
    </v-row>

    <!-- Featured Section -->
     <v-card class="featured-section mb-12">
      <v-row>
    <section class="featured-section">
      <div class="container">
        <h2 class="section-title">Our Services</h2>
        <div class="featured-items">
          <div class="featured-item">
            <div class="featured-image">
              <img src="/4f26adf5-026d-43c1-9e45-bc89fe5f3a50.jpeg">
            </div>
            <h3>Women Empowerment</h3>
            <p>We help women to choose a career that will make sure they can have a peaceful future and a happy family.</p>
          </div>
          <div class="featured-item">
            <div class="featured-image">
              <img src="/9a55dade-0e03-4848-84ea-ab9e5bf51997.jpeg">
            </div>
            <h3>Children Fund</h3>
            <p>We do donations to children all over the world to help them go to school and ease their day to day life.
              The money that is collected from these donations are sent to children's homes and schools.
            </p>
          </div>
          <div class="featured-item">
            <div class="featured-image">
              <img src="/9515c86e-1ff9-498d-944f-f3634c6fdf44.jpeg">
            </div>
            <h3>Financial Mentorship</h3>
            <p>You can talk to financial advisors globally to help you choose your career in line to your dreams and aspirations.
              These advisors are some of the best in the world.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2 class="section-title">Our Story</h2>
            <p>Founded in 2010, Savoria brings together the finest ingredients and culinary expertise to create an unforgettable dining experience. Our chef, with over 20 years of experience, crafts each dish with passion and precision.</p>
            <p>We believe in sustainable sourcing and supporting local farmers, ensuring that every ingredient that enters our kitchen meets our high standards of quality and freshness.</p>
            <button class="secondary-button">Learn More</button>
          </div>
          <div class="about-image">
            <img src="/ec2830b6-782d-4692-9c74-8662d10bc24d.jpeg" alt="Restaurant Interior">
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <div class="container">
        <h2 class="section-title">What Our Guests Say</h2>
        <div class="testimonials">
          <div class="testimonial">
            <div class="stars">★★★★★</div>
            <p class="quote">"The best dining experience I've had in years. The food was exquisite and the service impeccable."</p>
            <p class="author">- Maria S.</p>
          </div>
          <div class="testimonial">
            <div class="stars">★★★★★</div>
            <p class="quote">"A hidden gem with atmosphere that matches the incredible flavors. Will definitely be returning!"</p>
            <p class="author">- James T.</p>
          </div>
          <div class="testimonial">
            <div class="stars">★★★★★</div>
            <p class="quote">"From appetizers to dessert, every dish was prepared with attention to detail. Truly memorable."</p>
            <p class="author">- Ana L.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Info Section -->
    <section class="info-section">
      <div class="container">
        <div class="info-container">
          <div class="info-card">
            <h3>Hours</h3>
            <p>Monday - Thursday: 11am - 10pm</p>
            <p>Friday - Saturday: 11am - 11pm</p>
            <p>Sunday: 11am - 9pm</p>
          </div>
          <div class="info-card">
            <h3>Location</h3>
            <p>123 Culinary Avenue</p>
            <p>Foodie District</p>
            <p>Gastro City, GC 12345</p>
          </div>
          <div class="info-card">
            <h3>Contact</h3>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@savoria.com</p>
            <p>Reservations recommended</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="newsletter-section">
      <div class="container">
        <div class="newsletter-content">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for special offers and events</p>
          <form class="newsletter-form">
            <input type="email" placeholder="Your email address" required>
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  </v-row>
     </v-card>

    <!-- Team Section -->
    <v-row class="my-10">
      <v-col cols="12">
        <h2 class="text-h4 text-center mb-8 font-weight-medium">Our Team</h2>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card class="text-center elevation-2">
          <v-img src="https://picsum.photos/id/1005/300/300" height="250" cover></v-img>
          <v-card-title class="justify-center">Sarah Johnson</v-card-title>
          <v-card-subtitle>Founder & CEO</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card class="text-center elevation-2">
          <v-img src="https://picsum.photos/id/1012/300/300" height="250" cover></v-img>
          <v-card-title class="justify-center">Michael Chen</v-card-title>
          <v-card-subtitle>Head of Operations</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card class="text-center elevation-2">
          <v-img src="https://picsum.photos/id/1027/300/300" height="250" cover></v-img>
          <v-card-title class="justify-center">Amara Wilson</v-card-title>
          <v-card-subtitle>Restaurant Relations</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card class="text-center elevation-2">
          <v-img src="https://picsum.photos/id/1074/300/300" height="250" cover></v-img>
          <v-card-title class="justify-center">David Rodriguez</v-card-title>
          <v-card-subtitle>Technology Director</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <!-- Achievements -->
    <v-row class="my-10 achievements-section py-6">
      <v-col cols="12">
        <h2 class="text-h4 text-center mb-8 font-weight-medium">Our Achievements</h2>
      </v-col>
      <v-col cols="12" sm="6" md="3" class="text-center">
        <div class="stat-circle d-inline-flex align-center justify-center mb-4">
          <span class="text-h4 font-weight-bold">500+</span>
        </div>
        <h3 class="mb-2">HerRise Partners</h3>
      </v-col>
      <v-col cols="12" sm="6" md="3" class="text-center">
        <div class="stat-circle  d-inline-flex align-center justify-center mb-4">
          <span class="text-h4 font-weight-bold">20</span>
        </div>
        <h3 class="mb-2">Cities Served</h3>
      </v-col>
      <v-col cols="12" sm="6" md="3" class="text-center">
        <div class="stat-circle d-inline-flex align-center justify-center mb-4">
          <span class="text-h4 font-weight-bold">2M+</span>
        </div>
        <h3 class="mb-2">Happy Customers</h3>
      </v-col>
      <v-col cols="12" sm="6" md="3" class="text-center">
        <div class="stat-circle d-inline-flex align-center justify-center mb-4">
          <span class="text-h4 font-weight-bold">4.8</span>
        </div>
        <h3 class="mb-2">Average Rating</h3>
      </v-col>
    </v-row>

    <!-- Contact CTA -->
    <v-row class="mt-12 mb-8">
      <v-col cols="12" class="text-center">
        <h2 class="text-h4 mb-4">Want to Know More?</h2>
        <p class="mb-6 text-body-1">We'd love to hear from you or answer any questions you might have.</p>
        <v-btn href="/contact-us" 
          color="#eb9b14" 
          size="large" 
          class="white--text" 
          to="/contact-us"
        >
          Contact Us
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
  <RouterView/>
  <router-link/>
</template>

<script setup>
import { RouterView } from 'vue-router';

// No additional setup logic needed
</script>

<style scoped>
/* Base Styles */
.container {
  max-width: 1200px;
  margin: 0 10px auto;
  padding: 0 20px;
}


/* Featured Section */
.featured-section {
  padding: 5rem 0;
  background-color: #f5f5f5;
}

.featured-items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
}

.featured-item {
  flex: 1;
  min-width: 300px;
  text-align: center;
}

.featured-image {
  height: 250px;
  overflow: hidden;
  margin-bottom: 1rem;
  border-radius: 8px;
}

.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.featured-image img:hover {
  transform: scale(1.05);
}

.featured-item h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.featured-item p {
  color: #666;
}

/* About Section */
.about-section {
  padding: 5rem 0;
  background-color: #f5f5f5;
}

.about-content {
  display: flex;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap;
}

.about-text, .about-image {
  flex: 1;
  min-width: 300px;
}

.about-text p {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: #555;
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.secondary-button {
  background-color: transparent;
  color: #eb9b14;
  border: 2px solid #eb9b14;
  padding: 10px 25px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s;
}

.secondary-button:hover {
  background-color: #e74c3c;
  color: white;
}

/* Testimonials Section */
.testimonials-section {
  padding: 5rem 0;
  background-color: #f5f5f5;
}

.testimonials {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

.testimonial {
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-width: 300px;
  max-width: 400px;
}

.stars {
  color: #f1c40f;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.quote {
  font-style: italic;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.author {
  font-weight: bold;
  text-align: right;
}

/* Info Section */
.info-section {
  padding: 5rem 0;
  background-color: #f5f5f5;
}

.info-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 100px;
}

.info-card {
  flex: 1;
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  min-width: 310px;
  text-align: center;
}

.info-card h3 {
  margin-bottom: 1rem;
  color: #333;
}

.info-card p {
  color: #666;
  margin-bottom: 0.5rem;
}

/* Newsletter Section */
.newsletter-section {
  padding: 5rem 0;
  background-color: #333;
  color: white;
}

.newsletter-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.newsletter-content h2 {
  margin-bottom: 1rem;
}

.newsletter-content p {
  margin-bottom: 2rem;
}

.newsletter-form {
  display: flex;
  max-width: 800px;
  margin: 0 auto;
}

.newsletter-form input {
  flex: 1;
  padding: 12px 15px;
  border: none;
  border-radius: 4px 0 0 4px;
}

.newsletter-form button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 0 20px;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: background-color 0.3s;
}

.newsletter-form button:hover {
  background-color: #c0392b;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 3rem;
  }
  
  .hero p {
    font-size: 1.2rem;
  }
  
  .about-content {
    flex-direction: column-reverse;
  }
  
  .newsletter-form {
    flex-direction: column;
  }
  
  .newsletter-form input {
    border-radius: 4px;
    margin-bottom: 10px;
  }
  
  .newsletter-form button {
    border-radius: 4px;
  }
}

.about-us {
  padding-top: 2rem;
  padding-bottom: 4rem;
}

.achievements-section {
  background-color: #f5f5f5;
  border-radius: 8px;
}

.stat-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #e9a93aa9;
  border: 2px solid #eca01dd5;
  color: #e4940b;
}

h1, h2, h3, h4 {
  font-family: 'Roboto', sans-serif;
}

.hero-section p {
  line-height: 1.8;
}
</style>