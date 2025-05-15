<template>
    <div class="page-container">  
      <main>
        <section class="hero">
          <h2>Your Journey Starts Here</h2>
          <p>
            At Her Rise, we help students like you build confidence, skills, and a future—by connecting you to inspiring mentors who’ve walked the path before you.
          </p>
        </section>
  
        <section class="content">
          <h3>Find the Right Mentor for You</h3>
          <p>
            Whether you're exploring your interests or focused on your career, our mentorship network matches you with women professionals ready to guide you. Choose mentors based on your goals:
          </p>
          <ul>
            <li><strong>Academic Mentors:</strong> Help with subject choices, time management, and studying smarter.</li>
            <li><strong>Career Mentors:</strong> Get real-world insights, job prep support, and access to opportunities.</li>
            <li><strong>Personal Growth Mentors:</strong> Boost your confidence, communication, and leadership skills.</li>
          </ul>
  
          <h3>How It Works</h3>
          <ol>
            <li><strong>Sign Up:</strong> Create your Her Rise student profile.</li>
            <li><strong>Browse Mentors:</strong> Filter mentors by field, language, location, or interests.</li>
            <li><strong>Request a Match:</strong> Send a short intro and your goals. Our mentors are here to help!</li>
            <li><strong>Connect & Grow:</strong> Meet regularly online, ask questions, and build a lasting connection.</li>
          </ol>
  
          <h3>Why Mentorship Matters</h3>
          <p>
            Students who connect with mentors are more likely to stay motivated, discover their passions, and succeed in their careers. We’re here to make sure you don’t have to figure it out alone.
          </p>
  
          <v-btn @click="joinNow" class="join-btn" to="/ConnectwithMentors">Find My Mentor</v-btn>
        </section>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StudentsPage',
    methods: {
      joinNow() {
        alert('Loading Page.Please wait a moment!');
        push ('/ConnectwithMentors');
      },
    },
  };
  </script>
  
  <style scoped>
  .page-container {
    font-family: 'Segoe UI', sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(  #eb9b14,  #da2561);
  }
  
  .header {
    background: #eb9b14;
    color: white;
    padding: 1rem;
    text-align: center;
  }
  
  .logo {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.5rem;
  }
  
  .nav-list {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
  }
  
  .nav-list a {
    color: white;
    text-decoration: none;
  }
  
  .hero {
    background: #eb9b14;
    padding: 100px;
    text-align: center;
  }
  
  .hero h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  
  .content {
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .content h3 {
    margin-top: 2rem;
  }
  
  .content ul,
  .content ol {
    margin-left: 1.5rem;
    padding-left: 1rem;
  }
  
  .v-btn {
    margin-top: 2rem;
    padding: 0.75rem 2.5rem;
    background-color: #d63384;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .v-btn:hover {
    background-color: #b42a6b;
  }
  </style>
  