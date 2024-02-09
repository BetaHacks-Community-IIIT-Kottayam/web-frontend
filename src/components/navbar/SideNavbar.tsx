import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/hooks';
import { GoHome, GoProject } from 'react-icons/go';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { MdEmail } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';


function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}
const SideNavbar = (props: any) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const location = useLocation();
  const { isAuth } = useAuth();
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const logout=()=>{
    closeSidebar();
    props.logoutHandler();
  }

  return (
    <>
      <FaBars
        className='mx-8'
        size='1.5rem'
        color='white'
        onClick={toggleSidebar} />
      {isSidebarOpen && (
        <div
          className="fixed top-0 right-0 bottom-0 w-[100vw] left-0 bg-gray-800 bg-opacity-50 z-40"
          onClick={closeSidebar}
        ></div>
      )}
      <div
        className={`fixed right-0 p-4 w-2/5 top-0 bottom-0 bg-blue-200 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform ease-in-out duration-300 z-50`}
      >
        {!isAuth ?
          <Link to='/auth/v1/login' onClick={props.setLastLocationHandler} >
            <button className='mx-auto my-4 bg-yellow-400 text-gray-800 py-2 px-4 rounded-full text-sm  hover:bg-yellow-500 focus:outline-none focus:ring focus:border-blue-300'>
              Login/Register
            </button>
          </Link>
          : <Menu as="div" className="relative">
            <div>
              <Menu.Button className="relative mx-auto my-4 flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-1.5" />
                <img
                  className="h-8 w-8 rounded-full"
                  src={props.imgUrl ? props.imgUrl : "https://previews.123rf.com/images/triken/triken1608/triken160800028/61320729-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration.jpg"}
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
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/v1/user/profile"
                      onClick={closeSidebar}
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Your Profile
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      onClick={logout}
                      to="#"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Log out
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        }
        <hr className='my-4 color-black'></hr>
        <div className="mt-4 flex flex-col items-center justify-center space-y-6">
          <Link to='/' onClick={closeSidebar}>
            <div className="flex items-center space-x-2 cursor-pointer">
              {/* <span>
                  <GoHome className="h-6 w-6 text-yellow-400" />
                </span> */}
              <span className={`text-black ${location.pathname === "/" ? 'underline underline-offset-8' : ''}`}>Home</span>
            </div>
          </Link>
          <Link to='/v1/blogs' onClick={closeSidebar}>
            <div className="flex items-center space-x-3 cursor-pointer">
              {/* <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </span> */}
              <span className={`text-black ${location.pathname === "/v1/blogs" ? 'underline underline-offset-8' : ''}`}>Blogs</span>
            </div>
          </Link>
          <Link to='/v1/projects' onClick={closeSidebar}>
            <div className="flex items-center space-x-2 cursor-pointer">
              {/* <span>
                  <GoProject className="h-6 w-6 text-yellow-400" />
                </span> */}
              <span className={`text-black ${location.pathname === "/v1/projects" ? 'underline underline-offset-8' : ''}`}>Projects</span>
            </div>
          </Link>
          <Link to='/about-community' onClick={closeSidebar}>
            <div className="flex items-center space-x-2 cursor-pointer">
              {/* <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </span> */}
              <span className={`text-black ${location.pathname === "/about-community" ? 'underline underline-offset-8' : ''}`}>About Us</span>
            </div>
          </Link>
         {isAuth && <Link to='#' onClick={logout}>
             <div className="flex items-center space-x-2 cursor-pointer">
            
             <span className='text-black'>Logout</span>
           </div>
            </Link>}
        </div>
        <div className='absolute bottom-16 px-4 flex flex-col items-center justify-center'>
           <h2 className='text-black text-lg my-4'>Contact Us:</h2>
           <div className="flex flex-col justify-center items-center w-full space-y-4">
            <div className='flex space-x-4'>
            <a target="_blank" onClick={closeSidebar} href="https://www.linkedin.com/company/betalabs-iiitkottayam/mycompany/" className="text-neutral-800 dark:text-neutral-200 text-6xl cursor-pointer">
            <FaLinkedin size='1.5rem'  color="black"/>
            </a>
            <a target="_blank" onClick={closeSidebar} href="https://chat.whatsapp.com/GmHkvedR1Q8BKDHTikVH1P" className="text-neutral-800 dark:text-neutral-200 text-6xl cursor-pointer">
            <FaWhatsapp size='1.5rem'  color="black"/>
            </a>
            <a target="_blank" onClick={closeSidebar} href="https://github.com/BetaHacks-Community-IIIT-Kottayam" className="text-neutral-800 dark:text-neutral-200 text-6xl cursor-pointer">
            <FaGithub size='1.5rem'  color="black"/>
            </a>
            </div>
            
            <div className='flex space-x-4'>
            <a onClick={(e) => {window.location.href ='mailto:betahackscommunity@gmail.com'; closeSidebar()}} className="text-neutral-800 dark:text-neutral-200 text-6xl cursor-pointer">
            <HiOutlineMail size='1.5rem'  color="black"/>
            </a>
            <a target="_blank" onClick={closeSidebar} href="https://t.me/betahackscommunity" className="text-neutral-800 dark:text-neutral-200 text-6xl cursor-pointer">
            <FaTelegram size='1.5rem'  color="black"/>
            </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNavbar;
