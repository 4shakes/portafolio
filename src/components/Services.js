import React from 'react';

// import services data
import { services } from '../data';

const Services = () => {
  return (
    <section id='services' className='section bg-tertiary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center relative'>
          <span className="hidden lg:block lg:-top-2 absolute stroke uppercase">
            servicios
          </span>
          <h2 className='section-title  relative '>
            Qué hago para los clientes
          </h2>
          <p className='subtitle'>
            Estos son algunos de los servicios que ofrezco a mis clientes
          </p>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3  gap-8'>
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div className='bg-secondary p-6 rounded-2xl' key={index}>
                <div className='text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]'>
                  {icon}
                </div>
                <h4 className='text-xl font-medium mb-2'>{name}</h4>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
