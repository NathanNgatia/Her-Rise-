<template>
  <router-link/>
    <v-main class="contact-us">
      <v-container class="contact-us,py-8 rounded-lg v-cardglass-effect">
        <v-row>
          <v-col cols="12">
            <h1 class="text-center text-h3 mb-6 teal--text text--darken-2">Contact Us</h1>
            <p class="text-center text-body-1 mb-12 max-width-text mx-auto">
              Have questions, feedback, or need support? We're here to help! Fill out the form below
              or use one of our other contact methods to get in touch with our team.
            </p>
          </v-col>
        </v-row>
  
        <v-row>
          <!-- Contact Form -->
          <v-col cols="12" md="7">
            <v-card class="pa-4 elevation-3 rounded-lg v-cardglass-effect">
              <v-card-title class="px-0">
                <h2 class="text-h5">Send us a message</h2>
              </v-card-title>
              <v-card-text class="px-0">
                <v-form
                  ref="contactForm"
                  v-model="valid"
                  lazy-validation
                  @submit.prevent="submitForm"
                >
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="name"
                        :rules="nameRules"
                        label="Full Name"
                        required
                        variant="outlined"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="Email"
                        required
                        variant="outlined"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="subject"
                        :rules="subjectRules"
                        label="Subject"
                        required
                        variant="outlined"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-select
                        v-model="inquiryType"
                        :items="inquiryTypes"
                        label="Inquiry Type"
                        required
                        variant="outlined"
                      ></v-select>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        v-model="message"
                        :rules="messageRules"
                        label="Message"
                        required
                        variant="outlined"
                        rows="4"
                      ></v-textarea>
                    </v-col>
                    <v-col cols="12">
                      <v-btn
                        type="submit"
                        color="#eb9b14"
                        size="large"
                        :disabled="!valid"
                        :loading="loading"
                        class="white--text"
                        light
                        app
                      >
                        Send Message
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
  
          <!-- Contact Information -->
          <v-col cols="12" md="5">
            <v-card class="pa-4 h-100 elevation-3">
              <v-card-title class="px-0">
                <h2 class="text-h5">Contact Information</h2>
              </v-card-title>
              <v-card-text class="px-0 ">
                <v-list density="compact ">
                  <v-list-item prepend-icon="mdi-map-marker" class="mb-2">
                    <v-list-item-title>Our Office</v-list-item-title>
                    <v-list-item-subtitle
                      >123 Restaurant Blvd, Suite 300, Foodtown, FT 12345</v-list-item-subtitle
                    >
                  </v-list-item>
  
                  <v-list-item prepend-icon="mdi-phone" class="mb-2">
                    <v-list-item-title>Phone</v-list-item-title>
                    <v-list-item-subtitle>(555) 123-4567</v-list-item-subtitle>
                  </v-list-item>
  
                  <v-list-item prepend-icon="mdi-email" class="mb-2">
                    <v-list-item-title>Email</v-list-item-title>
                    <v-list-item-subtitle>contact@her-rise.com</v-list-item-subtitle>
                  </v-list-item>
  
                  <v-list-item prepend-icon="mdi-clock-outline" class="mb-4">
                    <v-list-item-title>Hours</v-list-item-title>
                    <v-list-item-subtitle>Monday - Friday: 9:00 AM - 6:00 PM</v-list-item-subtitle>
                    <v-list-item-subtitle>Weekend: 10:00 AM - 3:00 PM</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
  
                <div class="mt-4 pt-4 border-top">
                  <h3 class="text-h6 mb-4">Follow Us</h3>
                  <div class="d-flex">
                    <v-btn icon color="blue-darken-2" class="mr-4">
                      <v-icon>mdi-facebook</v-icon>
                    </v-btn>
                    <v-btn icon color="light-blue-darken-1" class="mr-4">
                      <v-icon>mdi-twitter</v-icon>
                    </v-btn>
                    <v-btn icon color="deep-orange-darken-1" class="mr-4" href="https://www.instagram.com/her_rise/">
                      <v-icon>mdi-instagram</v-icon>
                    </v-btn>
                    <v-btn icon color="red-darken-1">
                      <v-icon>mdi-youtube</v-icon>
                    </v-btn>
                  </div>
                </div>
              </v-card-text>
            </v-card>
  
            <!-- Google Map placeholder -->
      <!--       <v-card class="mt-4 pa-0 elevation-3">
              <div class="map-container">
                <img src="https://picsum.photos/id/310/600/300" alt="Location Map" class="w-100" />
                <div class="map-overlay d-flex justify-center align-center">
                  <v-btn color="teal darken-1" prepend-icon="mdi-map"> Open in Google Maps </v-btn>
                </div>
              </div>
            </v-card> -->
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Form state
  const valid = ref(false)
  const contactForm = ref(null)
  const name = ref('')
  const email = ref('')
  const subject = ref('')
  const message = ref('')
  const inquiryType = ref('')
  const loading = ref(false)
  
  // Form validation rules
  const nameRules = [
    (v) => !!v || 'Name is required',
    (v) => v.length >= 2 || 'Name must be at least 2 characters',
  ]
  
  const emailRules = [
    (v) => !!v || 'Email is required',
    (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
  ]
  
  const subjectRules = [(v) => !!v || 'Subject is required']
  
  const messageRules = [
    (v) => !!v || 'Message is required',
    (v) => v.length >= 10 || 'Message must be at least 10 characters',
  ]
  
  // Inquiry types
  const inquiryTypes = [
    'General Inquiry',
    'Technical Support',
    'Partnership Opportunity',
    'Feedback',
    'Report an Issue',
  ]
  
  // Form submission handler
  const submitForm = async () => {
    if (!contactForm.value.validate()) return
  
    loading.value = true
  
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
  
      // Reset form after successful submission
      contactForm.value.reset()
  
      // Show success message
      alert('Thank you for your message! We will get back to you soon.')
    } catch (error) {
      alert('Failed to send message. Please try again later.')
    } finally {
      loading.value = false
    }
  }
  </script>
  
  <style scoped>
  .contact-us {
    background: linear-gradient( #eb9b14,  #da2561), url('/images/hero-bg.jpg');
  }
  .max-width-text {
    max-width: 700px;
  }
  
  .border-top {
    border-top: 1px solid rgba(0, 0, 0, 0.12);
  }
  
  .map-container {
    position: relative;
    height: 300px;
    overflow: hidden;
  }
  
  .map-container img {
    object-fit: cover;
    height: 100%;
  }
  
  .map-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .map-container:hover .map-overlay {
    opacity: 1;
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