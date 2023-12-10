import React, { useEffect, useState } from 'react';
import Logo from '../images/logo.jpeg';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/ui/AuthInput';
import AuthImage from '../components/ui/AuthImage';
import LargeButton from '../components/ui/LargeButton';
import Overlay from '../components/ui/Overlay';
import { validateEmailInput } from '../utils/InputValidators';
import { userLogin } from '../redux/features/auth/authService';
import { useAppDispatch, useAuth } from '../hooks/hooks';
import ResponsePopup from '../components/ui/ResponsePopup';
import { userLoginRetry } from '../redux/features/auth/authSlice';

const LoginPage = () => {
  const {isAuth,status,lastLocation} =useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch=useAppDispatch();
  const navigate=useNavigate();

  const onEmailChangeHandler = (event: any) => {
    setEmail(event.target.value);
  }
  const onPasswordChangeHandler = (event: any) => {
    setPassword(event.target.value);
  }
  const onFormSubmit = () => {
    const isEmailValid = validateEmailInput(email);
    const isPasswordValid=password.length>=8;
    if(!isEmailValid || !isPasswordValid){
      return;
    }
    const loginCredentials={
      email,
      password
    }
    dispatch(userLogin(loginCredentials));
  }
  const loginErrorHandler=()=>{
    dispatch(userLoginRetry());
  }

  useEffect(() => {
    setTimeout(() => {
      if(isAuth){
        navigate(lastLocation);
      }
    }, 1000);
  }, [isAuth,status.isError])
  
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      {status.isLoading && <Overlay message='Signing in, please wait....' />}
      {isAuth && <ResponsePopup type='success' />}
      {status.isError && <ResponsePopup type='error' text={status.errorMessage} onClose={loginErrorHandler} />}
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
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                {/* Google Sign Up Button */}
                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-2 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                  <div className="bg-white p-2 rounded-full">
                    <svg className="w-4" viewBox="0 0 533.5 544.3">
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4"
                      />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853"
                      />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04"
                      />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335"
                      />
                    </svg>
                  </div>
                  <span className="ml-4">Sign In with Google</span>
                </button>

              </div>

              {/* Email Sign Up */}
              <div className="my-10 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or sign ip with e-mail
                </div>
              </div>

              {/* Email and Password Input */}
              <div className="mx-auto max-w-xs">

                <div onChange={onEmailChangeHandler}>
                  <Input type='email' placeholder='Email' />
                </div>
                <div onChange={onPasswordChangeHandler}>
                  <Input type='password' placeholder='Password' />
                </div>


                {/* Sign Ip Button */}
                <div onClick={onFormSubmit}>
                  <LargeButton type='submit' name='Sing In' />
                </div>

              </div>
              <p className="mt-2 text-center text-sm text-gray-600 max-w"> Or &nbsp;
                <Link to="/auth/v1/register" className="font-medium text-blue-600 hover:text-blue-500">
                  create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/006/585/473/original/illustration-graphic-cartoon-character-of-cyber-security-vector.jpg')" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
