import jwtDecode from 'jwt-decode';
import axios from './../utils/callApi';

class AuthService {
  setAxiosInterceptors = ({ onLogout }) => {
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          this.setSession(null);
          this.setUser(null);

          if (onLogout) {
            onLogout();
          }
        }

        return Promise.reject(error);
      }
    );
  };

  handleAuthentication() {
    const apiKey = this.getApiKey();

    if (!apiKey) {
      return;
    }

    if (this.isValidApiKey(apiKey)) {
      this.setSession(apiKey);
    } else {
      this.setSession(null);
      this.setUser(null);
    }
  }

  loginWithEmailAndPassword = (emailOrPhone, password) => new Promise((resolve, reject) => {
    axios.post('/bdemr-app-login-new', { emailOrPhone, password })
      .then((response) => {
        console.log({ response })
        if (!response.data.hasError) {
          this.setSession(response.data.data.apiKey);
          this.setUser(response.data.data);
          resolve(response.data.data);
        } else {
          reject(response.data.error);
        }
      })
      .catch((error) => {
        reject(error);
      });
  })

  loginInWithApiKey = (apiKey) => new Promise((resolve, reject) => {
    axios.post('/login-with-api-key', { apiKey })
      .then((response) => {
        if (response.data.user) {
          resolve(response.data.user);
        } else {
          reject(response.data.error);
        }
      })
      .catch((error) => {
        reject(error);
      });
  })

  logout = () => {
    this.setSession(null);
    this.setUser(null);
  }

  setSession = (apiKey) => {
    if (apiKey) {
      localStorage.setItem('apiKey', apiKey);
      // axios.defaults.headers.common.Authorization = `Bearer ${apiKey}`;
    } else {
      localStorage.removeItem('apiKey');
      // delete axios.defaults.headers.common.Authorization;
    }
  }

  setUser = (user) => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }

  getApiKey = () => localStorage.getItem('apiKey');

  isValidApiKey = (apiKey) => {
    if (!apiKey) {
      return false;
    }
    return true;
  }

  isAuthenticated = () => !!this.getApiKey()
}

const authService = new AuthService();

export default authService;
