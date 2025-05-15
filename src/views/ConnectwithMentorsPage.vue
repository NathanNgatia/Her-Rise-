<template>
    <div class="mentor-connect-page">
      <header class="header">
        <h2>Connect with a Mentor</h2>
        <p>Select a mentor and start your journey of growth.</p>
      </header>
  
      <section class="mentor-list">
        <div v-for="mentor in mentors" :key="mentor.id" class="mentor-card  v-cardglass-effect">
          <img :src="mentor.photo" :alt="mentor.name" class="mentor-photo" />
          <h3>{{ mentor.name }}</h3>
          <p><strong>Field:</strong> {{ mentor.field }}</p>
          <p>{{ mentor.bio }}</p>
          <button @click="startChat(mentor)">Chat / Request Mentorship</button>
        </div>
      </section>
  
      <section v-if="selectedMentor" class="chat-box">
        <h3>Chat with {{ selectedMentor.name }}</h3>
        <div class="messages">
          <div v-for="(msg, i) in messages" :key="i" class="message">{{ msg }}</div>
        </div>
        <input v-model="newMessage" placeholder="Type your message..." @keyup.enter="sendMessage" />
        <button @click="sendMessage">Send</button>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ConnectMentorPage',
    data() {
      return {
        mentors: [
          { id: 1, name: 'Aisha Patel', field: 'Software Engineering', bio: 'Helping women break into tech.', photo: '../public/Aisha Patel.jpeg' },
          { id: 2, name: 'Maria Lopez', field: 'Biomedical Research', bio: 'Mentoring future scientists.', photo: '../public/Maria Lopez.jpeg' },
          { id: 3, name: 'Neha Sharma', field: 'Business & Marketing', bio: 'Empowering students in business.', photo: '../public/Neha Sharma.jpeg' },
          { id: 4, name: 'Fatima Khan', field: 'UX/UI Design', bio: 'Design with empathy and clarity.', photo: '../public/Fatima Khan.jpeg' },
          { id: 5, name: 'Chloe Zhang', field: 'AI/ML Research', bio: 'Guiding students in AI innovation.', photo: '../public/Chloe Zhang.jpeg' },
          { id: 6, name: 'Rina Das', field: 'Environmental Science', bio: 'Protecting the planet through education.', photo: '../public/Rina Das.jpeg' },
          { id: 7, name: 'Emily Johnson', field: 'Public Policy', bio: 'Shaping change through law and policy.', photo: '../public/Emily Johnson.jpeg' },
          { id: 8, name: 'Sara Ahmed', field: 'Healthcare Management', bio: 'Leading in the healthcare sector.', photo: '../public/Sara Ahmed.jpeg' },
          { id: 9, name: 'Yuki Nakamura', field: 'Animation & Film', bio: 'Creating stories through visuals.', photo: '../public/Yuki Nakamura.jpeg' },
          { id: 10, name: 'Angela Martinez', field: 'Civil Engineering', bio: 'Building sustainable infrastructure.', photo: '../public/Angela Martinez.jpeg' },
          { id: 11, name: 'Meera Verma', field: 'Cybersecurity', bio: 'Keeping the digital world secure.', photo: '../public/Meera Verma.jpeg' },
          { id: 12, name: 'Linda Brooks', field: 'Education', bio: 'Passionate about inclusive education.', photo: '../public/Linda Brooks.jpeg' },
          { id: 13, name: 'Hannah Gold', field: 'Finance & Investment', bio: 'Helping students master money.', photo: '../public/Hannah Gold.jpeg' },
          { id: 14, name: 'Zara Malik', field: 'Entrepreneurship', bio: 'Startup mentor and innovation coach.', photo: '../public/Zara Malik.jpeg' },
          { id: 15, name: 'Kim Lee', field: 'Product Management', bio: 'From idea to launch — mentoring PMs.', photo: '../public/Kim Lee.jpeg' },
          { id: 16, name: 'Grace Chen', field: 'Architecture', bio: 'Designing cities of the future.', photo: '../public/Grace Chen.jpeg' },
          { id: 17, name: 'Rosa Díaz', field: 'Law & Justice', bio: 'Justice, equity, and mentorship.', photo: '../public/Rosa Díaz.jpeg' },
          { id: 18, name: 'Tanya Bedi', field: 'Digital Marketing', bio: 'Helping students grow online.', photo: '../public/Tanya Bedi.jpeg' },
          { id: 19, name: 'Natalie Wood', field: 'Human Resources', bio: 'People-first leadership mentor.', photo: '../public/Natalie Wood.jpeg' },
          { id: 20, name: 'Ivy Ncube', field: 'Data Analytics', bio: 'Making data make sense.', photo: '../public/Ivy Ncube.jpeg' },
        ],
        selectedMentor: null,
        messages: [],
        newMessage: '',
      };
    },
    methods: {
      startChat(mentor) {
        this.selectedMentor = mentor;
        this.messages = [`Hi ${mentor.name}, I'm interested in learning more about ${mentor.field}.`];
        this.newMessage = '';
        alert(`You have successfully contacted the mentor. The mentor shall attend to you shortly!`);
      },
      sendMessage() {
        if (this.newMessage.trim()) {
          this.messages.push(this.newMessage.trim());
          this.newMessage = '';
          alert(`You have successfully sent the message to the mentor. The mentor shall attend to you shortly!`);
        }
      },
    },
  };
  </script>
  
  <style>
  .mentor-connect-page {
    font-family: 'Segoe UI', sans-serif;
    padding: 100px;
    background: linear-gradient(  #eb9b14,  #da2561);
  }
  .header {
    text-align: center;
    margin-bottom: 2rem;
  }
  .mentor-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
  }
  .mentor-card {
    background: #fff;
    padding: 1rem;
    border-radius: 12px;
    box-shadow: 0 0 10px #e7d9e7;
    width: 250px;
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
  .mentor-photo {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    margin-bottom: 1rem;
  }
  .chat-box {
    margin-top: 2rem;
    padding: 1rem;
    background: #fff;
    border-radius: 8px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  .messages {
    background: #f3f3f3;
    padding: 1rem;
    margin-bottom: 1rem;
    height: 150px;
    overflow-y: auto;
    border-radius: 6px;
  }
  .message {
    background: #d63384;
    color: white;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 6px;
  }
  input {
    width: calc(100% - 100px);
    padding: 0.5rem;
    margin-right: 0.5rem;
  }
  button {
    padding: 0.5rem 1rem;
    background: #d63384;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
  </style>
  