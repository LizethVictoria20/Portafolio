import '../styles/Header.css'
import Logo from '../assets/logo.png';
import GitHub from '../assets/icon-github.svg';
import Linkedin from '../assets/icon-linkedin.svg';

const Header = () => {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8 max-sm:flex-col" aria-label="Global">
          <div className="flex lg:flex-1 personal-logo">
            <a href="#" className="-m-1.5 p-1.5">
              <img className="h-8" src={Logo} alt="Personal logo" />
            </a>
          </div>
          <div className="max-sm:flex max-sm:flex-1 max-sm:justify-end max-md:flex max-md:flex-1 max-md:justify-end lg:flex lg:flex-1 lg:justify-end logo-network">
            <a href="#" className="text-sm font-semibold leading-6">
              <img src={GitHub} alt="Logo Github" />
            </a>
            <a href="#" className="text-sm font-semibold leading-6">
              <img src={Linkedin} alt="Logo Linkendin" />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
