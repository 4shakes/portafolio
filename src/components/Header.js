import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// import components
import Logo from '../assets/img/logo.png';
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';
import Socials from './Socials';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [bg, setBg] = useState(false);
  const [language, setLanguage] = useState(false)

  const handleClick = (lang) => {
    setLanguage(e => !e)
    i18n.changeLanguage(lang)

  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });



  return (
    <header
      className={`${bg ? 'bg-tertiary h-20' : 'h-24'
        } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className='container mx-auto h-full flex items-center justify-between'>
        {/* logo */}
        <a href='#'>
          <img src={Logo} alt='' className='w-16' />
        </a>
        {/* nav */}
        <div className='hidden lg:block'>
          <Nav />

        </div>
        {/* Socials */}
        <div className='hidden lg:flex lg:gap-x-5'>
          <Socials />
          {/* change lenguage */}
          {language ? <div className="cursor-pointer" onClick={() => handleClick('en')}>
            En
          </div> : <div className="cursor-pointer" onClick={() => handleClick('es')}>
            Es
          </div>}


        </div>

        {/* nav mobile*/}
        <div className='lg:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
