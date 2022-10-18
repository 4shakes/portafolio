import React from 'react';
import { Link } from 'react-scroll';

// import woman image
import codigo from '../assets/img/frontend.webp';

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-[22px]'>
              Hola, me llamo Jayro! 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              Soy desarrollador Front-end.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              Me gusta desarrollar webs a la medida de las necesidades de cada cliente.
            </p>
            <Link
              to='contact'
              activeClass='active'
              spy={true}
              smooth={true}
              duration={900}
              offset={-70}
              className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'>
              Contactame
            </Link>
          </div>
          <div className='hidden lg:flex flex-1 justify-center items-center h-full'>
            <img src={codigo} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
