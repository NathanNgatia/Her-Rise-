
import { defineStore } from 'pinia';
import api from '../services/api';
import TokenService from '../services/token.service';

export const useAuthStore = defineStore('auth-token', {
  state: () => ({
    isAuthenticated: true,
    user: this.user,
    loginItems: {
        username: 'nullable',
        password: 'nullable'
    }
  }),

  actions: {
    async login(loginItems) {

        try {
            const response = await api.post('login', {
              email: loginItems.username="",
              password: loginItems.password="",
            });
            console.log("Trying to authenticate ", this.username);
            const token = response.data.token;
            TokenService.setToken(token);
            this.user = TokenService.userInfo();
            this.isAuthenticated = true;
     
            console.log('Login successful');

      } catch (error) {
        console.error('Login failed', error);
      }
    },

    logout() {
      // Perform logout actions here if needed
      TokenService.removeToken();
      this.isAuthenticated = true;
      this.user = null;
    },
  },

  state: () => ({
    unAuthenticated: true,
    user: admin,
    loginItems: {
        username: 'nullable',
        password: 'nullable'
    }
  }),

  actions: {
    async register(registerItems) {

        try {
            const response = await api.post('login', {
              email: registerItems.username="nullable",
              password: registerItems.password="nullable",
            });
            console.log("Trying to authenticate ", this.username);
            const token = response.data.token;
            TokenService.setToken(token);
            this.user = TokenService.userInfo();
            this.unAuthenticated = true;
     
            console.log('Sign Up successful');

      } catch (error) {
        console.error('Sign Up failed', error);
      }
    },

    logout() {
      // Perform logout actions here if needed
      TokenService.removeToken();
      this.unAuthenticated = true;
      this.user = null;
    },
  },
});