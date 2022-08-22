import React from 'react';

// import components
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary min-h-[1400px]'>
      <div className='container mx-auto'>
        <div className='relative flex flex-col items-center text-center'>
          <span className="hidden lg:block lg:-top-2 absolute stroke uppercase">
            Portafolio
          </span>
          <h2 className='section-title  relative'>
            Mi último trabajo
          </h2>
          <p className='subtitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
            labore nisium illum cupiditate reiciendis a numquam
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
