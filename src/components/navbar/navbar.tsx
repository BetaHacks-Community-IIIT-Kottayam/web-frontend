
import logoImage from '../../images/logo.jpeg';
import { GoHome, GoProject } from "react-icons/go";
import Button from '../ui/Button';

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-10">
      <nav className="bg-gray-700">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-50">
            <img src={logoImage} alt="Logo" className="h-8 w-8 mr-2 inline rounded-full" />
            Betahacks</h1>
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 cursor-pointer">
              <span>
                <GoHome className="h-6 w-6 text-yellow-400" />
              </span>
              <span className="text-gray-50 underline underline-offset-8 ">Home</span>
            </div>
            <div className="flex items-center space-x-3 cursor-pointer">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </span>
              <span className="text-gray-50">Blogs</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <span>
                <GoProject className="h-6 w-6 text-yellow-400" />
              </span>
              <span className="text-gray-50">Projects</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </span>
              <span className="text-gray-50">About Us</span>
            </div>
          </div>
          <div className="lg:flex hidden items-center space-x-2 bg-white py-1 px-2 rounded-full">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input className="outline-none" type="text" placeholder="Search" />
          </div>
          <Button name='Login/Signup' />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
