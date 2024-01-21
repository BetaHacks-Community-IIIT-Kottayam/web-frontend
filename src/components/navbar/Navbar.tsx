
import logoImage from '../../images/logo.jpeg';
import { GoHome, GoProject } from "react-icons/go";
import Button from '../ui/Button';
import { Link, useLocation } from 'react-router-dom';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useAppDispatch, useAuth, useProfile } from '../../hooks/hooks';
import { setLastLocation, userLogout } from '../../redux/features/auth/authSlice';
import { flushBlog } from '../../redux/features/blog/blogSlice';
import { flushUser } from '../../redux/features/user/userSlice';
import SideNavbar from './SideNavbar';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}
const Navbar = () => {
  const location = useLocation();
  const { userInfo } = useProfile();
  const dispatch = useAppDispatch();
  const setLastLocationHandler = () => {
    dispatch(setLastLocation('/'))
  }
  const logoutHandler = () => {
    dispatch(flushBlog());
    dispatch(flushUser());
    dispatch(userLogout());
  }
  const { isAuth } = useAuth();
  return (
    <header className="fixed top-0 w-full z-20">
      <nav className="bg-gray-700 px-4">
        <div className="mx-auto py-4 flex justify-between items-center">
          <Link to='/'>
            <h1 className="text-2xl font-bold text-gray-50">
              <img src={logoImage} alt="Logo" className="h-8 w-8 mr-2 inline rounded-full" />
              Betahacks
            </h1>
          </Link>
          <div className="hidden sm:flex md:flex lg:flex items-center space-x-12">
            <Link to='/'>
              <div className="flex items-center space-x-2 cursor-pointer">
                {/* <span>
                  <GoHome className="h-6 w-6 text-yellow-400" />
                </span> */}
                <span className={`text-gray-50 ${location.pathname === "/" ? 'underline underline-offset-8' : ''}`}>Home</span>
              </div>
            </Link>
            <Link to='/v1/blogs'>
              <div className="flex items-center space-x-3 cursor-pointer">
                <span>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg> */}
                </span>
                <span className={`text-gray-50 ${location.pathname === "/v1/blogs" ? 'underline underline-offset-8' : ''}`}>Blogs</span>
              </div>
            </Link>
            <Link to='/v1/projects'>
              <div className="flex items-center space-x-2 cursor-pointer">
                {/* <span>
                  <GoProject className="h-6 w-6 text-yellow-400" />
                </span> */}
                <span className={`text-gray-50 ${location.pathname === "/v1/projects" ? 'underline underline-offset-8' : ''}`}>Projects</span>
              </div>
            </Link>
            <Link to='/about-community'>
              <div className="flex items-center space-x-2 cursor-pointer">
                {/* <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </span> */}
                <span className={`text-gray-50 ${location.pathname === "/about-community" ? 'underline underline-offset-8' : ''}`}>About</span>
              </div>
            </Link>
          </div>
          <div className="lg:flex hidden items-center space-x-2 bg-white py-1 px-2 rounded-full">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input className="outline-none text-sm" type="text" placeholder="Search blog" />
          </div>
          {!isAuth ?
            <Link to='/auth/v1/login' onClick={setLastLocationHandler} >
              <button className='hidden sm:flex md:flex lg:flex items-center space-x-8 bg-yellow-400 text-gray-800 py-2 px-4 rounded-full text-sm  hover:bg-yellow-500 focus:outline-none focus:ring focus:border-blue-300'>
                Login/Register
              </button>
            </Link>
            : <Menu as="div" className="w-16 relative ml-3 hidden sm:flex md:flex lg:flex items-center space-x-8">
              <div>
                <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <img
                    className="h-8 w-8 rounded-full"
                    src={userInfo.imgUrl ? userInfo.imgUrl : "https://previews.123rf.com/images/triken/triken1608/triken160800028/61320729-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration.jpg"}
                    alt=""
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-8 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/v1/user/profile"
                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                      >
                        Your Profile
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        onClick={logoutHandler}
                        to="#"
                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                      >
                        Sign out
                      </Link>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          }
          <div className='flex sm:hidden md:hidden lg:hidden items-center'>
          <SideNavbar imgUrl={userInfo.imgUrl} setLastLocationHandler={setLastLocationHandler} logoutHandler={logoutHandler} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
