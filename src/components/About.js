import React from 'react';

// import img
import Image from '../assets/img/portafolio.jpg';
import PDF from '../assets/pdf/JAYRO-CV.pdf'

const About = () => {

  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col relative'>
              <span className="hidden lg:block lg:-top-2 absolute stroke uppercase">
                sobre&nbsp;mi
              </span>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3  relative'>
                Jayro as 4shakes
              </h2>
              <p className='mb-4 text-accent'>
                Freelance Frontend Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
               Como ingeniero de sistemas, mi pasión por la programación se concentra en el desarrollo frontend, donde poseo más de 2 años de experiencia. Mi enfoque se centra en un aprendizaje continuo, explorando constantemente nuevas tecnologías y estrategias para impulsar el desarrollo de aplicaciones web. Mi objetivo es fusionar la funcionalidad y la creatividad para ofrecer soluciones digitales de alto impacto y eficiencia
              </p>
            </div>
            <a href={PDF} download="JAYRO-CV.pdf" className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
