import React, { useEffect, useRef, useState } from 'react';
import Logo from '../images/logo.jpeg';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/ui/AuthInput';
import AuthImage from '../components/ui/AuthImage';
import ResponsePopup from '../components/ui/ResponsePopup';
import LargeButton from '../components/ui/LargeButton';
import { validateEmailInput, validateMobileInput, validateNameInput } from '../utils/InputValidators';
import { useAppDispatch, useAuth } from '../hooks/hooks';
import { sendOtpService, userRegister, verifyOtpService } from '../redux/features/auth/authService';
import Overlay from '../components/ui/Overlay';
import { setAuthenticated, setIsotpSent, userLoginRetry } from '../redux/features/auth/authSlice';
import ModalOverlay from '../components/ui/ModalOverlay';
import sideimg from '../images/register.jpeg';
import { MdEdit } from 'react-icons/md';
import { useSendOtpServiceMutation, useUserRegisterMutation, useVerifyOtpServiceMutation } from '../redux/features/auth/authAPI';
import { toast } from 'react-toastify';
import { MdCancel } from "react-icons/md";


const RegisterPage = () => {
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
  const { isAuth, status, lastLocation } = useAuth();
  const [name, setName] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const otpRef = useRef(null);
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [cnfPassword, setCnfPassword] = useState('');
  const [err, setErr] = useState('');
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [sendOtpMutation, { isLoading: sendOtpLoading, isError: sendOtpError }] = useSendOtpServiceMutation();
  const [userRegisterMutation, { isLoading: registerUserLoading, isError: registerUserError }] = useUserRegisterMutation();
  const [verifyOtpMutation, { isLoading: verifyOtpLoading, isError: verifyOtpError }] = useVerifyOtpServiceMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onNameChangeHandler = (event: any) => {
    setName(event.target.value);
    setErr('');
  }
  const onEmailChangeHandler = (event: any) => {
    setEmail(event.target.value);
    setErr('');
  }
  const onOtpChangeHandler = (event: any) => {
    setOtp(event.target.value);
    setErr('');
  }
  const onMobileChangeHandler = (event: any) => {
    setMobile(event.target.value);
    setErr('');
  }
  const onPasswordChangeHandler = (event: any) => {
    setPassword(event.target.value);
    setErr('');
  }
  const onCnfpasswordChangeHandler = (event: any) => {
    setCnfPassword(event.target.value);
    setErr('');
  }
  const onRequestOtp = async () => {
    if (!validateEmailInput(email)) {
      toast.error('Please enter a valid email address',
        {
          position: "top-center",
          autoClose: 2000,
        });
      return;
    }
    const result = await sendOtpMutation({ email, type: "REGISTER" });
    if ('data' in result) {
      setIsOtpSent(true);
      toast.success('OTP sent successfully',
        {
          position: "top-center",
          autoClose: 2000,
        });
    }
    if ('error' in result) {
      if ('status' in result.error) {
        if (result.error.status === 400) {
          toast.error('Email already exists, please login',
            {
              position: "top-center",
              autoClose: 2000,
            });
        }
      }
    }
  }
  const onVerifyOtp = async () => {
    if (otp.length !== 6) {
      toast.error('Please enter a valid 6 digit otp',
        {
          position: "top-center",
          autoClose: 2000,
        });
      return;
    }
    const result = await verifyOtpMutation({ email, otp });
    if ('data' in result) {
      setIsEmailVerified(true);
      setVerifyEmail(false);
      toast.success('OTP verified successfully',
        {
          position: "top-center",
          autoClose: 2000,
        });
      const newUserCredentials = {
        name,
        email,
        mobile,
        password,
        cnfPassword,
      }
      const result = await userRegisterMutation(newUserCredentials);
      if ('data' in result) {
        dispatch(setAuthenticated(result.data.token));
        navigate(lastLocation);
        toast.success('Registered successfully',
          {
            position: "top-center",
            autoClose: 2000,
          });
      }
      if ('error' in result) {
        if ('status' in result.error) {
          if (result.error.status === 400) {
            toast.error('User Already exists, please login...',
              {
                position: "top-center",
                autoClose: 2000,
              });
          }
        }
      }
    }
    if ('error' in result) {
      if ('status' in result.error) {
        if (result.error.status === 400) {
          toast.error('Incorrect OTP',
            {
              position: "top-center",
              autoClose: 2000,
            });
        }
      }
    }
  }
  const onFormSubmit = async () => {
    if (!validateNameInput(name)) {
      setErr('* Please enter valid name');
      return;
    }
    if (!validateEmailInput(email)) {
      setErr('* Please enter valid email');
      return;
    }
    if (!validateMobileInput(mobile)) {
      setErr('* Please enter valid mobile (10-digit)');
      return;
    }
    if (password.length < 8) {
      setErr('* Please enter atleast 8 digits password');
      return;
    }
    if (password !== cnfPassword) {
      setErr('* Password is not matching');
      return;
    }
    if (!isEmailVerified) {
      setVerifyEmail(true);
      setIsotpSent(false);
      return;
    }
    const newUserCredentials = {
      name,
      email,
      mobile,
      password,
      cnfPassword,
    }
    const result = await userRegisterMutation(newUserCredentials);
    if ('data' in result) {
      dispatch(setAuthenticated(result.data.token));
      navigate(lastLocation);
      toast.success('Registered successfully',
        {
          position: "top-center",
          autoClose: 2000,
        });
    }
    if ('error' in result) {
      if ('status' in result.error) {
        if (result.error.status === 400) {
          toast.error('User Already exists, please login...',
            {
              position: "top-center",
              autoClose: 2000,
            });
        }
      }
    }
  }
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      {registerUserLoading && <Overlay message='Registering, please wait....' />}
      {isAuth && <ResponsePopup type='success' />}
      {/* {isEmailVerified && verifyEmail && <ResponsePopup type='success' />} */}
      {verifyEmail && !isEmailVerified && <ModalOverlay>
        <div className='relative bg-white flex flex-col px-16 py-8 text-center justfiy-center rounded-md'>
          <MdCancel size='1.5rem' onClick={() => setVerifyEmail(false)} color='black' style={{ position: 'absolute', cursor: 'pointer', top: '3%', right: '3%' }} />
          <p className='font-semibold mb-4'>Verify Your Email</p>
          {!isOtpSent ? <input
            placeholder='Email'
            type='text'
            value={email}
            onChange={onEmailChangeHandler}
            className="block p-4 flex-1 outline-0 border-0 bg-gray-200 text-gray-900 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6"

          /> :
            <div>
              <p className='mb-2 text-[0.8rem] text-gray-700'>OTP sent to <span className='text-blue-500'>{email} <MdEdit onClick={() => { setIsOtpSent(false) }} className='inline cursor-pointer color-blue-500' size='0.8rem' /></span></p>
              <input
                placeholder='Enter OTP'
                type='text'
                value={otp}
                onChange={onOtpChangeHandler}
                className="w-full block p-4 flex-1 outline-0 border-0 bg-gray-200 text-gray-900 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6"

              />
            </div>
          }
          {!isOtpSent ?
            <div>
              {!sendOtpLoading ?
                <div onClick={onRequestOtp}>
                  <LargeButton type='submit' name='Request OTP' />
                </div>
                :
                <button
                  type="button"
                  className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="mr-2 animate-spin"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                  </svg>
                  Sending otp....
                </button>}
            </div>
            :
            <div>
              {!verifyOtpLoading ?
                <div onClick={onVerifyOtp}>
                  <LargeButton type='submit' name='Verify OTP' />
                </div>
                :
                <button
                  type="button"
                  className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="mr-2 animate-spin"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                  </svg>
                  Verifying otp....
                </button>}
            </div>
          }
        </div>

      </ModalOverlay>}
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
          <div className="mt-6 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              Register
            </h1>
            <div className="w-full flex-1 mt-8">

              {/* Email and Password Input */}
              <div className="mx-auto max-w-xs">
                <div onChange={onNameChangeHandler}>
                  <Input type='name' placeholder='Name' />
                </div>
                <div onChange={onEmailChangeHandler}>
                  <Input type='email' placeholder='Email' />
                </div>
                <div onChange={onMobileChangeHandler}>
                  <Input type='tel' placeholder='Mobile No.' />
                </div>
                <div onChange={onPasswordChangeHandler}>
                  <Input type='password' placeholder='Password' />
                </div>
                <div onChange={onCnfpasswordChangeHandler}>
                  <Input type='password' placeholder='Confirm Password' />
                </div>
                <div>
                </div>
                {err && <p className='text-red-600 text-sm text-center'>{err}</p>}
                {/* Sign Up Button */}
                <div onClick={onFormSubmit}>
                  <LargeButton type='submit' name='Register' />
                </div>
              </div>

              <p className="mt-2 text-center text-sm text-gray-600 max-w"> Already have an account? &nbsp;
                <Link to="/auth/v1/login" className="font-medium text-blue-600 hover:text-blue-500">
                  Login
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

export default RegisterPage;
