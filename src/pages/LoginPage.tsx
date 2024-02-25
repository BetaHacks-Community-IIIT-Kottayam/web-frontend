import React, { useEffect, useState } from 'react';
import Logo from '../images/logo.jpeg';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/ui/AuthInput';
import AuthImage from '../components/ui/AuthImage';
import LargeButton from '../components/ui/LargeButton';
import Overlay from '../components/ui/Overlay';
import { validateEmailInput } from '../utils/InputValidators';
import { userLogin, verifyTokenService } from '../redux/features/auth/authService';
import { useAppDispatch, useAuth } from '../hooks/hooks';
import ResponsePopup from '../components/ui/ResponsePopup';
import { setAuthenticated, userLoginRetry } from '../redux/features/auth/authSlice';
import sideimg from '../images/login.jpeg';
import { useUserLoginMutation } from '../redux/features/auth/authAPI';
import { toast } from 'react-toastify';
import ForgotPassword from '../components/auth/ForgotPassword';
import ModalOverlay from '../components/ui/ModalOverlay';

const LoginPage = () => {
  window.addEventListener('beforeunload', function (e) {
    // Cancel the event
    e.preventDefault();
    // Chrome requires returnValue to be set
    e.returnValue = '';

    // Prompt the user with a custom message
    var confirmationMessage = 'Your changes may not be saved. Are you sure you want to leave?';

    // Return the confirmation message
    return confirmationMessage;
});
  const {lastLocation } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const [openForgotPassword, setOpenForgotPassword] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [userLoginMutation,{isLoading:loginLoading,isError:loginError}]=useUserLoginMutation();

  const onEmailChangeHandler = (event: any) => {
    setEmail(event.target.value);
    setErr('');
  }
  const onPasswordChangeHandler = (event: any) => {
    setPassword(event.target.value);
    setErr('');
  }
  const onFormSubmit = async(e:any) => {
    e.preventDefault();
    const isEmailValid = validateEmailInput(email);
    const isPasswordValid = password.length >= 8;
    if (!isEmailValid || !isPasswordValid) {
      setErr('Invalid email or password');
      return;
    }
    const loginCredentials = {
      email,
      password
    }
    const result=await userLoginMutation(loginCredentials);
    if('data' in result){
      const {token}=result.data;
      dispatch(setAuthenticated(token));
      navigate(lastLocation);
      toast.success('Logged in successfully',{
        position:'top-center',
        autoClose:3000
      });
    }else{
      toast.error('Invalid email or password',{
        position:'top-center',
        autoClose:3000
      });
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      {loginLoading && <Overlay message='Signing in, please wait....' />}
      {openForgotPassword && <ModalOverlay><ForgotPassword onClose={()=>setOpenForgotPassword(false)} /></ModalOverlay>}
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            <Link to='/'>
              <AuthImage
                url={Logo}
                class="w-16 h-16 mx-auto rounded-full"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="mt-11 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              Sign In
            </h1>
            <div className="w-full flex-1">

              {/* Email Sign Up */}
              <div className="my-10 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Sign in with e-mail
                </div>
              </div>

              {/* Email and Password Input */}
              <form className="mx-auto max-w-xs">

                <div onChange={onEmailChangeHandler}>
                  <Input type='email' placeholder='Email' />
                </div>
                <div onChange={onPasswordChangeHandler}>
                  <Input type='password' placeholder='Password' />
                </div>
                <p onClick={()=>{setOpenForgotPassword(true)}} className="text-right text-sm font-medium text-blue-600 hover:text-blue-500 cursor-pointer">
                  ForgotPassword?
                </p>
                {err && <p className='text-red-600 text-sm text-center'>{err}</p>}
                {/* Sign Ip Button */}
                <div onClick={onFormSubmit}>
                  <LargeButton type='submit' name='Sign In' />
                </div>

              </form>
              <p className="mt-2 text-center text-sm text-gray-600 max-w"> Or &nbsp;
                <Link to="/auth/v1/register" className="font-medium text-blue-600 hover:text-blue-500">
                  create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <img

            className="w-[80%] h-[90%] m-auto"
            src={sideimg}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
