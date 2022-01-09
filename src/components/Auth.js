import React, {
  useEffect,
  useState
} from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import SplashScreen from './SplashScreen';
import { setUserData, logout } from '../actions/accountActions';
import authService from './../services/authService';

function Auth({ children }) {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      authService.setAxiosInterceptors({
        onLogout: () => dispatch(logout())
      });

      authService.handleAuthentication();

      if (authService.isAuthenticated()) {
        // const user = await authService.loginInWithApiKey(apiKey);
        const user = localStorage.getItem('user');
        await dispatch(setUserData(JSON.parse(user)));
      }

      setLoading(false);
    };

    initAuth();
  }, [dispatch]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return children;
}

Auth.propTypes = {
  children: PropTypes.any
};

export default Auth;
