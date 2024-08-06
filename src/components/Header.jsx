import '../styles/Header.css'
import Logo from '../assets/logo.png';
import GitHub from '../assets/icon-github.svg';
import Linkedin from '../assets/icon-linkedin.svg';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8 max-sm:flex-col" aria-label="Global">
          <div className="flex lg:flex-1 personal-logo">
            <Link to="/" className="-m-1.5 p-1.5">
              <img className="h-8" src={Logo} alt="Personal logo" />
            </Link>
          </div>
          <div className="sm:flex sm:items-center sm:justify-end">
            <Link to="/about" className="text-sm font-semibold leading-6">About</Link>
            <Link to="/skills" className="text-sm font-semibold leading-6 ml-6">Skills</Link>
            <Link to="/projects" className="text-sm font-semibold leading-6 ml-6">Projects</Link>
            <Link to="/contact" className="text-sm font-semibold leading-6 ml-6">Contact</Link>
            </div>
          <div className="max-sm:flex max-sm:flex-1 max-sm:justify-end max-md:flex max-md:flex-1 max-md:justify-end lg:flex lg:flex-1 lg:justify-end logo-network">
            <Link to="https://github.com/LizethVictoria20" className="text-sm font-semibold leading-6" target="_blanc">
              <img src={GitHub} alt="Logo Github" />
            </Link>
            <Link to="https://www.linkedin.com/in/lizethvictoria/" className="text-sm font-semibold leading-6">
              <img src={Linkedin} alt="Logo Linkendin" />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
