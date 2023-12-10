import React, { useEffect, useState } from 'react';
import Logo from '../images/logo.jpeg';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/ui/AuthInput';
import AuthImage from '../components/ui/AuthImage';
import ResponsePopup from '../components/ui/ResponsePopup';
import LargeButton from '../components/ui/LargeButton';
import { validateEmailInput, validateMobileInput, validateNameInput } from '../utils/InputValidators';
import { useAppDispatch, useAuth } from '../hooks/hooks';
import { userRegister } from '../redux/features/auth/authService';
import Overlay from '../components/ui/Overlay';
import { userLoginRetry } from '../redux/features/auth/authSlice';

const RegisterPage = () => {
  const { isAuth, status, lastLocation } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [cnfpassword, setCnfPassword] = useState('');
  const [err, setErr] = useState('');
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
  const onFormSubmit = () => {
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
    if (password !== cnfpassword) {
      setErr('* Password is not matching');
      return;
    }
    const newUserCredentials = {
      name,
      email,
      mobile,
      password,
      cnfpassword
    }
    dispatch(userRegister(newUserCredentials));
  }
  const registerErrorHandler = () => {
    dispatch(userLoginRetry());
  }
  useEffect(() => {
    setTimeout(() => {
      if (isAuth) {
        navigate(lastLocation);
      }
    }, 1000);
  }, [isAuth, status.isError])
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      {status.isLoading && <Overlay message='Registering, please wait....' />}
      {isAuth && <ResponsePopup type='success' />}
      {status.isError && <ResponsePopup type='error' text={status.errorMessage} onClose={registerErrorHandler} />}
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
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://codegeeks.solutions/wp-content/uploads/2023/07/5259899_20634-1024x735.jpg')" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
