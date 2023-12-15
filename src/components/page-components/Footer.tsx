import { FaGithub,FaWhatsapp,FaTelegram,FaLinkedin} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
const Footer = () => {
    return (
      <footer className="bg-black text-center text-white w-full">
        <div className="pt-7 w-full">
          <div className="mb-4 flex justify-center items-center space-x-8 w-full">
            <a target="_blank" href="https://www.linkedin.com/company/betalabs-iiitkottayam/mycompany/" className="text-neutral-800 dark:text-neutral-200 text-6xl cursor-pointer">
            <FaLinkedin size='2rem' color="white"/>
            </a>
            <a className="text-neutral-800 dark:text-neutral-200 text-6xl cursor-pointer">
            <FaWhatsapp size='2rem' color="white"/>
            </a>
            <a target="_blank" href="https://github.com/BetaHacks-Community-IIIT-Kottayam" className="text-neutral-800 dark:text-neutral-200 text-6xl cursor-pointer">
            <FaGithub size='2rem' color="white"/>
            </a>
            
            <a onClick={(e) => {window.location.href ='mailto:betahackscommunity@gmail.com';}} className="text-neutral-800 dark:text-neutral-200 text-6xl cursor-pointer">
            <HiOutlineMail size='2rem' color="white"/>
            </a>
            <a className="text-neutral-800 dark:text-neutral-200 text-6xl cursor-pointer">
            <FaTelegram size='2rem' color="white"/>
            </a>
          </div>
        </div>
        {/* Copyright section */}
        <div className="p-2 text-center text-neutral-500">
          © 2023 Copyright:
          <a
            className="text-white"
            href="https://tailwind-elements.com/"
          >  Betahacks@IIITKottayam
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  