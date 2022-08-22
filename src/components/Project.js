import React from 'react';

const Project = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div className='mb-8'>
        <div style={{ backgroundImage: `url(${item.image})` }} className='rounded-2xl w-[23rem] h-[23rem] bg-cover bg-top ease-in-out duration-[5000ms] cursor-pointer hover:bg-bottom' >
        </div>
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
      <p className='text-base max-w-md'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit veniam
        obcaecati ipsam.
      </p>
    </div>
  );
};

export default Project;
