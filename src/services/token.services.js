import router from '../router/index';
import api from '../services/api';

class TokenService {
    setToken(token){
        localStorage.setItem("auth-token", token);
    }

    getToken() {
        const token = localStorage.getItem("auth-token");
        console.log("This is my Token --->>", token);
        return token;
    }
    removeToken(){
      localStorage.removeItem("auth-token");
    }

    isAuthenticated(){
      return !!this.getToken();
    }

    unAuthenticated(){
      return !this.getToken();
    }
}

const myTokenInstance = new TokenService();
export default myTokenInstance;