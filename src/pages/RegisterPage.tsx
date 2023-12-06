import React from 'react';
import Logo from '../images/logo.jpeg';
import { Link } from 'react-router-dom';
import Input from '../components/ui/AuthInput';
import AuthImage from '../components/ui/AuthImage';
import LargeButton from '../components/ui/LargeButton';

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
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
                <Input type='name' placeholder='Name' />
                <Input type='email' placeholder='Email' />
                <Input type='tel' placeholder='Mobile No.' />
                <Input type='password' placeholder='Password' />
                <Input type='password' placeholder='Confirm Password' />
                {/* Sign Up Button */}
                <LargeButton type='submit' name='Register' />
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
