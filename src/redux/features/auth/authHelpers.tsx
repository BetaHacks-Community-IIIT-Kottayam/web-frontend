import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/hooks';

export const CheckAuthLoader = () => {
  const { isAuth, token } = useAuth();
  const navigate = useNavigate();

  if (!isAuth) {
    // Navigate to the login route if the user is not authenticated
    navigate('/auth/v1/login');
    // Return a promise that rejects (no token available)
    return Promise.reject(new Error('User not authenticated'));
  }

  // Return a promise that resolves with the token
  return Promise.resolve(token);
};
